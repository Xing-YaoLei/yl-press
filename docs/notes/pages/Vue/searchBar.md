# Vue项目中公用搜索栏的简单封装

![image-20230310165333334](https://oss.oh-undefined.com/image-20230310165333334.png)

我们在进行后台系统开发的过程中难免会遇到这样的场景，顶部会有不同的搜索栏。有的可能是搜索用户名，有的可能搜索手机号，有的可能是筛选男女性别之类的枚举。我们每一次都通过使用`Element-Plus`中的`el-form`来开发的话会有很多重复的代码实现。针对它进行一定封装的话，我们就可以让多个页面进行复用。

首先我们需要知道，对于搜索栏，它可能是文字输入框，也有可能是数字输入框、时间选择、级联菜单、下拉菜单等多种类型的菜单。那么我们在封装的时候就需要根据自己项目需求来进行对应的封装。

```vue
<script lang="ts" setup>
import type { FormInstance } from "element-plus"
import type { IFormItem } from "./type"
import { ref, withDefaults } from "vue"
const ruleFormRef = ref<FormInstance>()
interface Props {
  formItems: IFormItem[] // 表单配置项
  labelWidth?: string // 每个表单标题宽度
  itemStyle?: object // 每个表单样式
  itemColLayout?: object // 表单布局
  modelValue: any //绑定表单的每个数据
  isHidden?: boolean
  lastBtnWidth?: string
  searchHeader?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  formItems: () => [],
  labelWidth: "",
  searchHeader: false,
  itemStyle: () => ({ padding: "" }),
  itemColLayout: () => ({
    xl: 6, // >=1920px
    lg: 8, // >=1200px
    md: 12, // >=992px
    sm: 24, // >=768px
    xs: 24 // <768px
  })
})
const emit = defineEmits<{
  (e: "update:modelValue", value: any): void
}>()
// 定义方法
const valueChange = (value: any, field: string) => {
  emit("update:modelValue", { ...props.modelValue, [field]: value })
}
// 表单重置方法
const resetForm = () => {
  ruleFormRef.value?.resetFields()
}
</script>
<template>
<!-- elementPlus的form表单 -->    
<el-form ref="ruleFormRef" :inline="true" :labelWidth="labelWidth || '120px'" :model="modelValue">
  <!-- 外部嵌套template用于循环渲染 -->  
      <template v-for="item in formItems" :key="item.label">
        <el-form-item
          v-if="!item.isHidden"
          :label="item.label"
          :label-width="item.labelWidth"
          :name="formItems.length > 1 ? 'many' : 'one'"
          :style="itemStyle"
          :prop="item.field"
        > 
          <!-- 如果type为input 或者type为password的时候 -->  
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              :model-value="modelValue[`${item.field}`]"
              :disabled="item.disabled"
              style="width: 199px"
              clearable
              @update:modelValue="valueChange($event, item.field)"
            />
          </template>
  				<!-- 如果type类型为级联菜单的时候 -->  
          <template v-if="item.type === 'cascader'">
            <el-cascader
              :placeholder="item.placeholder"
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="valueChange($event, item.field)"
              clearable
              :options="item.options"
            />
          </template>
  				<!-- 如果type类型为下拉菜单的时候 -->  
          <template v-if="item.type === 'select'">
            <el-select
              :placeholder="item.placeholder"
              filterable
              style="width: 199px"
              clearable
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="valueChange($event, item.field)"
            >
              <el-option
                v-for="option in item.options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </template>
					<!-- 如果type类型为时间选择器的时候 -->  
          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker
              style="width: 240px"
              v-bind="item.otherOptions"
              :placeholder="item.placeholder"
              :model-value="modelValue[`${item.field}`]"
              value-format="x"
              @update:modelValue="valueChange($event, item.field)"
            />
          </template>
  				<!-- 根据自定义以及自身需求来增加或者减少对应的选项 -->  
        </el-form-item>
      </template>
    </el-form>
</template>
```

通过上方的方法，我们初步实现了对于搜索栏的控制。但是偶尔我们会出现一些其他的需要自定义的时候，所以我们需要在封装组件的时候，留出对应的插槽，来应对我们可能会出现的自定义的需求。

```vue
  <el-form ref="ruleFormRef" :inline="true" :labelWidth="labelWidth || '120px'" :model="modelValue">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item
          v-if="!item.isHidden"
          :label="item.label"
          :label-width="item.labelWidth"
          :name="formItems.length > 1 ? 'many' : 'one'"
          :style="itemStyle"
          :prop="item.field"
        >
          ... other Code
          <template v-if="item.custom" #default="scope">
            <!-- 通过custom属性来控制是否显示，如果当前拥有custom属性的时候，则此条的搜索项为自定义搜索项 -->
            <!-- 此处额外的放置一个slot插槽，用于自定义搜索项的操作 -->
            <slot :name="item.field" :row="scope.row" />
          </template>
          ... other Code
        </el-form-item>
      </template>
    </el-form>
```

通过上方我们放置了`slot`插槽，来控制是否为自定义的搜索项。除去搜索项，我们可能会在搜索栏后放置一些额外的按钮，例如：搜索、重置、导入导出等操作。所以我们还需要在搜索项的后续，添加一些按钮的插槽。

```vue
  <el-form ref="ruleFormRef" :inline="true" :labelWidth="labelWidth || '120px'" :model="modelValue">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item
          v-if="!item.isHidden"
          :label="item.label"
          :label-width="item.labelWidth"
          :name="formItems.length > 1 ? 'many' : 'one'"
          :style="itemStyle"
          :prop="item.field"
        >
          ... other Code
          <template v-if="item.custom" #default="scope">
            <!-- 通过custom属性来控制是否显示，如果当前拥有custom属性的时候，则此条的搜索项为自定义搜索项 -->
            <!-- 此处额外的放置一个slot插槽，用于自定义搜索项的操作 -->
            <slot :name="item.field" :row="scope.row" />
          </template>
          ... other Code
        </el-form-item>
      </template>
			<!-- 此处我们设置了label属性为空字符串 防止对齐的时候出现问题 绑定了labelWidth属性来控制对齐的距离 -->
      <el-form-item label=" " :label-width="labelWidth">
        <!-- 通过放置插槽，当我们需要在搜索框后续添加按钮的时候，我们就可以触发该插槽来完成 -->
        <slot name="lastBtn" />
      </el-form-item>
    </el-form>
```

最后的代码如下所示，可以参考自身思路以及自身需求来进行封装。提高代码的复用性。

````vue
<script lang="ts" setup>
import type { FormInstance } from "element-plus"
import type { IFormItem } from "./type"
import { ref, withDefaults } from "vue"
const ruleFormRef = ref<FormInstance>()
interface Props {
  formItems: IFormItem[] // 表单配置项
  labelWidth?: string // 每个表单标题宽度
  itemStyle?: object // 每个表单样式
  itemColLayout?: object // 表单布局
  modelValue: any //绑定表单的每个数据
  isHidden?: boolean
  lastBtnWidth?: string
  searchHeader?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  formItems: () => [],
  labelWidth: "",
  searchHeader: false,
  itemStyle: () => ({ padding: "" }),
  itemColLayout: () => ({
    xl: 6, // >=1920px
    lg: 8, // >=1200px
    md: 12, // >=992px
    sm: 24, // >=768px
    xs: 24 // <768px
  })
})
const emit = defineEmits<{
  (e: "update:modelValue", value: any): void
}>()
// 定义方法
const valueChange = (value: any, field: string) => {
  emit("update:modelValue", { ...props.modelValue, [field]: value })
}
// 表单重置方法
const resetForm = () => {
  ruleFormRef.value?.resetFields()
}
defineExpose({
  resetForm
})
</script>

<template>
  <el-card class="baseCard">
    <template v-if="searchHeader">
      <slot name="searchHeader" />
    </template>
    <el-form ref="ruleFormRef" :inline="true" :labelWidth="labelWidth || '120px'" :model="modelValue">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item
          v-if="!item.isHidden"
          :label="item.label"
          :label-width="item.labelWidth"
          :name="formItems.length > 1 ? 'many' : 'one'"
          :style="itemStyle"
          :prop="item.field"
        >
          <template v-if="item.custom" #default="scope">
            <slot :name="item.field" :row="scope.row" />
          </template>
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              :model-value="modelValue[`${item.field}`]"
              :disabled="item.disabled"
              style="width: 199px"
              clearable
              @update:modelValue="valueChange($event, item.field)"
            />
          </template>
          <template v-if="item.type === 'cascader'">
            <el-cascader
              :placeholder="item.placeholder"
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="valueChange($event, item.field)"
              clearable
              :options="item.options"
            />
          </template>
          <template v-if="item.type === 'select'">
            <el-select
              :placeholder="item.placeholder"
              filterable
              style="width: 199px"
              clearable
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="valueChange($event, item.field)"
            >
              <el-option
                v-for="option in item.options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </template>

          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker
              style="width: 240px"
              v-bind="item.otherOptions"
              :placeholder="item.placeholder"
              :model-value="modelValue[`${item.field}`]"
              value-format="x"
              @update:modelValue="valueChange($event, item.field)"
            />
          </template>
        </el-form-item>
      </template>
      <el-form-item label=" " :label-width="labelWidth">
        <slot name="lastBtn" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.baseCard {
  margin-bottom: 3px;
  min-width: 1000px;
  // :deep(.el-card__body) {
  // }
  .el-form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .el-form-item {
    display: flex;
    align-items: center;
    height: 54px;
    margin: 0;
    margin-bottom: 0 !important;
  }
  .el-input {
    width: 199px;
    height: 38px;
  }
  .el-select {
    :deep(.el-input) {
      width: 199px;
      height: 38px;
    }
  }
  .el-form-item[name="many"] {
    margin-bottom: 20px;
  }
}
</style>

````

在使用的时候，我们通过在Vue文件的同级，创建一个`formConfig.ts`文件来提供搜索栏的配置项。

```ts
// formConfig.ts  与 index.vue同级 或专门存放一个文件夹内
import { IForm } from "@/components/form/type"
import { reactive } from "vue"
// 例如我们搜索项为角色名称
export const searchConfig: IForm = {
  formItems: [
    {
      field: "userName",
      label: "角色名称:",
      placeholder: "请输入角色名称",
      labelWidth: "90px",
      type: "input"
    }
  ]
}
```



在页面中使用的话，则引入form组件，并且引入对应的formConfig.ts文件来配置form的搜索项。

```vue
<script setup>
import { ref, onMounted, watch } from "vue"
import { searchConfig } from "./formConfig"
import DynamicForm from "@/components/form/index.vue"
const editForm = ref()
// 创建角色按钮 点击后跳转到角色新增页面
// 初始化搜索表单项
const formItems = searchFormConfig?.formItems ?? []
// 创建对象用于存储初始化内容
const formDataInit = {}
// 循环ts初始化表单项 并放入初始化对象中
formItems.map((item) => {
  formDataInit[item.field] = ""
})
// 用于对于子组件映射关系
const formData = ref(formDataInit)
</script>
<template>
		<!-- searchConfig是从formConfig.ts中引入而来的将配置内容传入到封装的对应的组件中去 -->
    <DynamicForm v-bind="searchConfig" v-model="formData" ref="editForm">
      <template #lastBtn>
        <!-- 自定义组件，可以其他按钮或者功能 -->
        <el-button class="searchBtn" type="primary" @click="handleSearch">查询</el-button>
        <el-button class="resetBtn" @click="resetForm">重置</el-button>
      </template>
    </DynamicForm>
</template>
```

可能也有不成熟的地方或者比较笨的方法，上方的代码有一部分依旧存在重复使用的情况，在后续的[Hook封装](./Hook.md)会进行简化。如果各位大佬有更好的思路，欢迎分享！

![image-20230314110952958](https://oss.oh-undefined.com/image-20230314110952958.png)

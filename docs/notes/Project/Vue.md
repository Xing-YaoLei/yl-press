# Vue项目中一些组件的封装

## Element Plus Table组件封装

最近一直在忙着公司的B端项目，B端通常是较多的CURD搭配各种各样的数据操作，其中数据展示主要则是为Table表格。公司架子是用的Vite + Element Plus来构建的项目。所以自己针对Element Plus的Table进行了一定的封装，提高代码的复用性。

### 组件封装

```vue
<script setup>
  import { toRefs } from 'vue'
  // props获取到的数据并不是响应式的，如果需要让数据变为响应式的我们可以通过使用toRefs来进行转换。
 
  // 通过defineProps即可获取父组件传入的数据了
  const props = defineProps({
      // tableData为表格数据
      tableData: {
        type: Array,
        required: true
      },
      // columnList为表头数据
      columnList: {
        type: Array,
        required: true
      }
  })
  const { columnList, tableData } = toRefs(props)
   // ...Other Code
</script> 

<el-table :data="tableData" default-expand-all header-row-class-name="baseTableClass" stripe row-key="id">
   <!-- 其中 data为el-table的数据来源  
						default-expand-all是表格中可能偶尔渲染树形结构 此项为默认展示的项目
						stripe为斑马纹
  					row-key为树形结构的主键 
	-->
      <el-table-column type="selection" width="50" align="center" />
      <el-table-column
        v-for="item in columnIsShow"
        :prop="item.prop"
        :label="item.label"
        :key="item.id"
        :min-width="item.minWidth ? item.minWidth : '165px'"
        :align="item.align ? item.align : 'center'"
        :fixed="item.fixed"
      >
      </el-table-column>
    </el-table>
```

- 通常表格中的第一列为多选选项，可能用于批量导出为Excel或者其他格式的文件数据。所以在封装的时候首行添加了`el-table-column`为`selection`如果不需要的情况下也可以默认清除掉。

- 紧接着就是循环渲染所需要所有列，此处使用了`v-for`循环遍历传入的值，其中的各种属性各位可以自行查看Element Plus Table组件的文档，这里就不一一赘述了。
- 虽然进行了循环遍历所有的列，但是还是会存在一个问题，那就是有很大概率出现一个情况 --- 后端所传入前端的数值为枚举的数值，而非是具体的内容。例如人员管理中可能会有性别的列，可能存在0为暂无、1为男、2为女的情况，那么我们则需要针对某一行进行自定义。

```vue
 <el-table :data="tableData" default-expand-all header-row-class-name="baseTableClass" stripe row-key="id">
   <el-table-column type="selection" width="50" align="center" />
   <el-table-column
                    v-for="item in columnIsShow"
                    :prop="item.prop"
                    :label="item.label"
                    :key="item.id"
                    :min-width="item.minWidth ? item.minWidth : '165px'"
                    :align="item.align ? item.align : 'center'"
                    :fixed="item.fixed"
                    >
     <!-- 此处通过v-if来进行判断循环条件是否存在custom属性。 -->
     <template v-if="item.custom" #default="scope">
				<slot :name="item.prop" :row="scope.row" />
     </template>
   </el-table-column>
</el-table>
```

- 通过判断是否存在`custom`属性如果存在的情况下的话则会渲染插槽，在使用的时候对应的给出template模版即可。

初步的组件封装好了，但是我们引入组件的时候是需要传入对应的列的，我这里放入一下我自己自定义的列文件。

```ts
// views -> xxx -> config.ts
// 表格显示列的数据 用于动态表格列的定义
export const columnList = reactive<any>([
  {
    prop: "uuid",
    label: "用户编号",
  },
  {
    prop: "username",
    label: "用户名",
  },
  {
    prop: "gender",
    label: "性别",
  }
])
```

拿到TS文件后我们即可在我们的组件中引入了。

```vue
<script setup>
// views -> user -> index.vue
  import BaseTable from '@/base-ui/BaseTable/index.vue' // 引入组件
  import { columnList } from './config.ts' // 引入表格的列选项
</script>
<template>
	<div class="container">
    <BaseTable :columnList="columnList"></BaseTable> 
    <!-- 使用组件并且传入对应的列 -->
  </div>
</template>

```

### 获取数据

我们上面的步骤只是完成了列的渲染，如果需要修改列，只需要前往config.ts中修改即可，我们还需要获取表格的数据并且渲染进去。

```vue
<script setup>
  import { onMounted, ref } from 'vue'
  import { getTableDataAPI } from '@/api/tableData.ts'
  const tableData = ref([])
 // ...other Code
  const initData = () => {
    // 获取数据的接口调用
    getTableDataAPI(data).then(res=>{
      tableData.value = res.data
    })
  }
  onMounted(()=>{
    // 在页面组件挂载完毕后执行数据初始化
    initData()
  })
</script>
<BaseTable :tableData="tableData" :columnList="columnList"></BaseTable>
```

### 自定义列

前面的内容我们通过数据请求能够拿到数据的值了，但是回到刚才的问题，对于一些数据，后台返回的可能仅仅是数据的枚举值，而不是具体的一个内容，那么我们除了与后端定义完善的枚举以外，还需要通过使用插槽来讲数据显示成用户可以看得懂的内容。

```ts
// views -> xxx -> config.ts
import { reactive } from 'vue'
// 表格显示列的数据 用于动态表格列的定义
export const columnList = reactive<any>([
  {
    prop: "uuid",
    label: "用户编号",
  },
  {
    prop: "username",
    label: "用户名",
  },
  {
    prop: "gender",
    label: "性别",
    custom: true
    // 在定义表格的时候 我们就添加了custom字段的v-if判断，如果忘记的可以回到顶端代码块查看
  }
])
```



我们将`gender`属性列添加字段`custom`我们回到页面的时候会发现我们的表格列渲染的数据为空了。不要着急因为我们是通过插槽的方式自定义了此列。

```vue
<script setup>
// views -> user -> index.vue
  import BaseTable from '@/base-ui/BaseTable/index.vue' // 引入组件
  import { columnList } from './config.ts' // 引入表格的列选项
</script>
<template>
	<div class="container">
    <BaseTable :columnList="columnList">
      <!-- 此处的#gender对应的则是config.ts中的prop属性值 -->
  		<template #gender="scope">
        {{  scope.row.gender == 0 ? "男" : "女" }}
			</template>
  	</BaseTable> 
    <!-- 使用组件并且传入对应的列 -->
  </div>
</template>
```

通过使用插槽的方式我们可以将我们的数据转换为用户可以看的明白的内容，通过简单的三目运算符是可以进行一些简单的是或否的判断，但是无法判断枚举更多的情况，所以我们需要定义一个判断方法来辅助我们进行枚举的显示。

```ts
// views -> xxx -> config.ts
const genderType: any = {
  1: "男",
  2: "女",
  3: "未知",
  4: "自定义性别"
  ...
}
export const customGenderHandle = (row) => {
  if (genderType[row.gender]) {
    return genderType[row.gender]
  }
  return "错误类型"
}
```

我们通过一个简单的方法来接受当前行提供的数据值 然后通过条件判断来进行渲染的操作，如果不存在枚举类型，那么我们可以通过给定一个默认的枚举类型来进行显示

```vue
<script setup>
// views -> user -> index.vue
  import BaseTable from '@/base-ui/BaseTable/index.vue' // 引入组件
  import { columnList, customGenderHandle } from './config.ts' // 引入表格的列选项
</script>
<template>
	<div class="container">
    <BaseTable :columnList="columnList">
      <!-- 此处的#gender对应的则是config.ts中的prop属性值 -->
  		<template #gender="scope">
        {{ customGenderHandle(scope.row) }}
			</template>
  	</BaseTable> 
    <!-- 使用组件并且传入对应的列 -->
  </div>
</template>
```

通过如上的方式我们便可以进行枚举值的渲染了。

。。。 这次实在是太困了，剩下的内容下次再写吧，还有新增按钮 自定义列操作，以及筛选是否显示列的操作等等。。


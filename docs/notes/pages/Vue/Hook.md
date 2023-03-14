# Vue项目中列表Hook的封装

![image-20230310163339170](https://oss.oh-undefined.com/image-20230310163339170.png)

最近在进行项目开发的时候发现在进行后台管理系统页面开发的时候，会遇到很多一个重复的需求，就是在列表展示页面，通常是顶部为搜索项，下边为表格数据，可能会有不同的搜索项等操作。

每次在不同页面的时候，虽然是进行了搜索框的封装以及表格的封装，但是还是感觉每次都还是需要进行一定的重复工作，然后就研究了一下自定义的Hook来进行封装一下子。页面样式如果想象不出来的话我这里贴一个图给大家看一下子。

![image-20230310164053966](https://oss.oh-undefined.com/image-20230310164053966.png)

例如上图，假设我们需要开发员工管理、部门管理、财务管理之类的管理页面，搜索框以及表格的排布一般都是固定的。那么重复的代码就会有很多。所以我就针对了这一部分代码进行了一定的封装。做一个简单的分享。

首先我们需要封装顶部的[搜索栏封装小例子](./searchBar.md)，通过结合封装的搜索栏。我们首先需要创建一个Hook，然后接受对象我们需要接受搜索栏的ref对象，以及搜索条件，如下所示。

```ts
import { ref, Ref, onMounted } from "vue"
interface IPropSerach {
  formData: any
  formRef: Ref
  requestFn?: Function
  paginationData?: any
  searchConfig: IPropSearchObj
}

interface IPropSearchObj {
  formItems: Array<object>
}
export const useSearchHook = (props: IPropSerach) => {
  // 通过从props中来获取对应的ref对象以及搜索内容
  const { formRef, searchConfig } = props
  const tableData = ref([])
  // 创建一个对象存放循环遍历的搜索项
  const formDataInit: any = {}
  // 创建formData的ref对象
  const formData = ref({})
  // 初始化方法，在onMounted中调用执行
 	const initSearchHandle = () => {
  // 循环遍历搜索项存放在formDataInit对象中
  const formItems = searchConfig?.formItems ?? []
  // 遍历并且赋值给formDataInit对象
  formItems.map((item: any) => {
    formDataInit[item.field] = ""
  })
  	// 数据转存在formData中
  formData.value = formDataInit
  }
  onMounted(() => {
    // 初始化
    initSearchHandle()
  })
  return {
    formData
  }
}
```

在我们拿到搜索条件的时候，我们如果点击了搜索的时候需要触发一下搜索的事件，所以我们在上述基础上，还需要添加一个搜索的事件，如下所示

```ts
 /**
   * @desc 搜索方法 后续需要在此处调用搜索接口API
   */
const handleSearch = () => {
  
}
```

在调用数据的时候，因为是异步操作，后台数据或者接口有可能会阻塞或者较慢的情况，为了提高用户体验通常我们会使用展示loading的方法来提示用户进行等待。除了这个以外，我们在点击的时候是需要触发接口调用的，所以我们需要通过props来接受一个函数。

```ts
import { ref, Ref, onMounted } from "vue"

interface IPropSerach {
  formData: any
  formRef: Ref
  requestFn?: Function
  paginationData?: any
  searchConfig: IPropSearchObj
}

interface IPropSearchObj {
  formItems: Array<object>
}

export const useSearchHook = (props: IPropSerach) => {
  const tableData = ref([])
  // 搜索过度的等待效果
  const loading = ref(false)
  // 结构form的ref用来清空表单操作  searchConfig则为都有哪些搜索项目
  const { formRef, searchConfig, requestFn } = props
  // 创建一个对象存放循环遍历的搜索项
  const formDataInit: any = {}
  // 创建formData的ref对象
  const formData = ref({})
  // 初始化方法，在onMounted中调用执行
  const initSearchHandle = () => {
    // 循环遍历搜索项存放在formDataInit对象中
    const formItems = searchConfig?.formItems ?? []
    // 遍历并且赋值给formDataInit对象
    formItems.map((item: any) => {
      formDataInit[item.field] = ""
    })
    // 数据转存在formData中
    formData.value = formDataInit
  }
  /**
   * @desc 搜索方法 后续需要在此处调用搜索接口API
   */
  const handleSearch = () => {
    // 在点击搜索的时候，我们进入loading状态
    loading.value = true
    try {
      // 发送数据请求
      requestFn({
        ...formData.value
      }).then((res) => {
        if (res.rspCode == 1) {
          const { list = [] } = res.rspData
          tableData.value = list
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
  // 挂载完成后调用初始化搜索方法，用于生成搜索时给后端提供的form表单字段
  onMounted(() => {
    // 初始化
    initSearchHandle()
  })

  // 将Hook方法以及formData搜索框中的数据返回出去
  return {
    handleSearch,
    formData,
    loading
  }
}

```

那么除了搜索项以外，我们还需要提供重置按钮的事件，来清空搜索栏内的内容

```ts
 /**
   * @desc 当用户点击重置按钮的操作，用于重置表单中现有的值，并且调用搜索接口重置当前列表数据
   */
  const resetForm = () => {
    formRef.value?.resetForm()
    paginationData.currentPage = 1
    handleSearch()
  }
```

然后在使用搜索的时候我们展示的数据，需要使用分页功能，所以我们还需要引入分页的功能以及页码相关的数据。

```ts
import { ref, Ref, onMounted } from "vue"

interface IPropSerach {
  formData: any
  formRef: Ref
  requestFn?: Function
  paginationData?: any
  searchConfig: IPropSearchObj
}

interface IPropSearchObj {
  formItems: Array<object>
}

export const useSearchHook = (props: IPropSerach) => {
  const tableData = ref([])
  // 搜索过度的等待效果
  const loading = ref(false)
  // 结构form的ref用来清空表单操作  searchConfig则为都有哪些搜索项目
  const { formRef, searchConfig, requestFn, paginationData } = props
  // 创建一个对象存放循环遍历的搜索项
  const formDataInit: any = {}
  // 创建formData的ref对象
  const formData = ref({})
  // 初始化方法，在onMounted中调用执行
  const initSearchHandle = () => {
    // 循环遍历搜索项存放在formDataInit对象中
    const formItems = searchConfig?.formItems ?? []
    // 遍历并且赋值给formDataInit对象
    formItems.map((item: any) => {
      formDataInit[item.field] = ""
    })
    // 数据转存在formData中
    formData.value = formDataInit
  }
  /**
   * @desc 搜索方法 后续需要在此处调用搜索接口API
   */
  const handleSearch = () => {
    loading.value = true
    try {
      requestFn({
        ...formData.value,
        pageNum: paginationData.currentPage,
        pageSize: paginationData.pageSize
      }).then((res) => {
        if (res.rspCode == 1) {
          const { total = 0, pageNum = 1, list = [] } = res.rspData
          tableData.value = list
          paginationData.total = total
          paginationData.currentPage = pageNum
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
  /**
   * @desc 当用户点击重置按钮的操作，用于重置表单中现有的值，并且调用搜索接口重置当前列表数据
   */
  const resetForm = () => {
    formRef.value?.resetForm()
    paginationData.currentPage = 1
    handleSearch()
  }
  // 挂载完成后调用初始化搜索方法，用于生成搜索时给后端提供的form表单字段
  onMounted(() => {
    // 初始化
    initSearchHandle()
  })

  // 将Hook方法以及formData搜索框中的数据返回出去
  return {
    handleSearch,
    resetForm,
    tableData,
    formData,
    loading
  }
}

```

最后提供一个简单的具体的使用方法。

```vue
<script>
// 使用解构出暴露出的方法 搜索、 重置、以及表格数据，搜索项的值，等待效果
const { handleSearch, resetForm, tableData, formData, loading } = useSearchHook({
  // 传入 搜索项
  searchConfig,
  // form的ref对象用于操作重置
  formRef: editForm,
  // 传入请求方法 
  requestFn: getTableDataAPI,
  // 分页数据传入
  paginationData
})
</script>
<template>
		<DynamicForm v-bind="searchConfig" v-model="formData" ref="editForm">
      <template #lastBtn>
        <!-- 自定义组件，可以其他按钮或者功能 -->
        <el-button class="searchBtn" type="primary" @click="handleSearch">查询</el-button>
        <el-button class="resetBtn" @click="resetForm">重置</el-button>
      </template>
    </DynamicForm>
		<el-card v-loading="loading">
			<el-table :data="tableData"></el-table>
      <!-- 分页封装Hook -->
      <el-pagination
          background
          :layout="paginationData.layout"
          :page-sizes="paginationData.pageSizes"
          :total="paginationData.total"
          :page-size="paginationData.pageSize"
          :currentPage="paginationData.currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
		</el-card>
</template>
```


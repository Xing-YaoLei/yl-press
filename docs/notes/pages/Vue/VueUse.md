# VueUse中部分API的用法

::: tip VueUse

VueUse是一个基于 Vue 生态系统的工具库，提供了一系列实用的组合式 API，旨在简化和加速 Vue 3 项目开发。它集成了许多常见的功能，能够让我们在进行项目开发的过程中减少很多重复性代码，提高开发效率。

:::

## useDebouncedRefHistory

可以理解为防抖函数，以往我们在需要使用防抖函数的时候可能会通过自行封装或者使用Lodash等库中的方法来进行，如果你引入了VueUse的时候，也能够通过引入VueUse中的useDebouncedRefHistory来进行使用。

防抖意味着在一定的时间（如 500ms）内如果多次更改值，只有最后一次更改会被保存到历史记录中，防止频繁的无效历史记录保存后导致多次触发接口请求等场景。

### Usage 用法

```typescript
import { ref } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'

// 定义一个counter的ref属性
const counter = ref(0)
const { history, last, undo, redo, clear  } = useDebouncedRefHistory(counter, { deep: true, debounce: 1000 })
/**
* history 为变量，通过将其在页面中渲染能够得到当前值的数据的变化。
* last    为变量，渲染页面中能够得到数据最后一次操作的值。
* undo    为方法，通过触发该方法撤回上一次针对变量的操作。 例如：触发了 counter + 1 撤回后counter则为 0
* redo    为方法，通过触发该方法恢复下一次针对变量的操作。 例如：触发了undo撤回了新增操作，触发此方法恢复上一次的操作counter为 1
* clear   为方法，通过触发该方法清空历史操作记录。
* ... 其他方法可以查看具体文档源码
*/
```


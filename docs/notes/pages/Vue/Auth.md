# Vue权限路由的一些思路

> 最近在忙活着做Vue的后台项目，然后需要用到权限管理相关的功能，要求就是需要权限管理需要到达按钮级别的权限，而不是我们传统根据用户的身份来判断路由表是否渲染。
>
> 例：我的用户身份是一个游客，系统本身设定的游客只能访问页面观看而已，后来管理员想要让游客中的我，而不是所有游客，拥有评论的权限，那么就需要单独给我添加一个评论的权限，就是这么一个场景。本来好像也没什么思路来着，后来问了问一些有经验的朋友，请教之后小受启发。



## 根据用户身份权限校验

1、我们先进行最简单的按照用户身份来进行校验

- 进行身份校验前提条件是后台提供一个接口，用来返回我们的用户身份，例如：`super`、`admin`、`visitor`之类的身份。

```js
const getUserInfo = () => {
	getUserInfoAPI().then(res=>{
    // res.data
    // userName:'...' - 用户的用户名
    // age: '...' - 用户的年龄
    // ... - 等等其他信息
    // role: 'admin' - 用户的身份权限
  })
}
```

- 假设我们上面的接口返回的正是我们需要的用户身份，那么我们便可以将我们的用户身份使用Vuex、或者Pinia来保存下来。

```ts
// router -> permission.ts
import { useUserStoreHook } from "@/store/modules/user"
import { usePermissionStoreHook } from "@/store/modules/permission"

const userStore = useUserStoreHook()
// 在user的Store中我们通过调用接口获取用户身份
const permissionStore = usePermissionStoreHook()
// 在permission的Store中我们进行权限身份对应的路由的引入
/*
const hasPermission = (roles: string[], route: RouteRecordRaw) => {
// 判断是否存在meta标签 并且meta标签拥有roles属性
  if (route.meta && route.meta.roles) {
    //  some：至少有一个元素通过回调函数的测试条件， 权限身份列表中判断当前的这个路由是否有一个身份匹配当前的用户的权限
    return roles.some((role) => {
			 // 返回的内容为 roles中存在身份的布尔值，true则为存在身份，false则为不存在身份
      if (route.meta?.roles !== undefined) {
        // 判断条件，返回拥有meta的roles中如果存在传入的role身份
        return route.meta.roles.includes(role)
      } else {
      // 否则的话返回false 代表该路由中不存在roles属性
        return false
      }
    })
  } else {
    return true
  }
}

// 过滤异步路由
const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  // 将传入的routes路由信息进行遍历
  routes.forEach((route) => {
    const r = { ...route }
    // 将传入的用户身份权限以及循环的路由信息通过hasPermission进行判断
    if (hasPermission(roles, r)) {
    // 如果路由项目拥有子路由
      if (r.children) {
      // 那么递归调用此方法，传入子路由以及权限信息
        r.children = filterAsyncRoutes(r.children, roles)
      }
      // 还在hasPermission的判断中，如果符合条件，则将当前的路由信息推入res列表数组中
      res.push(r)
    }
  })
  // 最后返回res数组
  return res
}
// PermissionStore 权限的Pinia

export const usePermissionStore = defineStore("permission", () => {
  // 定义路由信息数组
  const routes = ref<RouteRecordRaw[]>([])
  // 定义动态路由信息数组
  const dynamicRoutes = ref<RouteRecordRaw[]>([])
  // 设置路由的方法
  const setRoutes = (roles: string[]) => {
    let accessedRoutes
    // 如果roles传入的权限存在admin 管理员权限
    if (roles.includes("admin")) {
    // 那么accessedRoutes则直接将 所有的动态路由放入其中
      accessedRoutes = asyncRoutes
    } else {
    // 否则则进入过滤数组的方法中去， 将异步路由以及权限分别传入 此时走入filterAsyncRoutes路由中
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    // 最后将路由通过concat进行路由的合并
    routes.value = constantRoutes.concat(accessedRoutes)
    dynamicRoutes.value = accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})
*/
const roles = userStore.roles
permissionStore.setRoutes(roles)
```

- 然后我们还需要将我们的路由表分成两段，分别为常驻路由以及权限路由两部分，其中常驻路由一般为`login`、`register`、`list`等等页面，这些页面一般为无需登录即可查看具体内容的页面。

```ts
// src -> router -> index.ts
/** 常驻路由  router*/
export const constantRoutes = [
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      hidden: true
    }
  },
  {
    path: "/register",
    component: () => import("@/views/register/index.vue"),
    meta: {
      hidden: true
    }
  }
]
```

- 以及需要通过登陆之后拥有权限身份的用户才允许访问的页面。

```ts
export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      // roles便是我们的权限身份，数组中admin以及visitor表示该页面允许管理员以及访客访问
      roles: ["admin", "visitor"],  // 可以在根路由中设置角色
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"]
          // 该页面表示只有管理员admin用户才可以进行访问
        }
      },
      {
        path: "/dashboard",
        component: () => import("@/views/permission/directive.vue"),
        name: "Dashboard",
        meta: {
          title: "看板" // 如果未设置角色，则表示：该页面不需要权限
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]
```






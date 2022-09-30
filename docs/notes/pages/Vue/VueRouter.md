# Vue Router

::: tip 前言

[Vue Router](https://router.vuejs.org/zh/)作为Vue.js全家桶中的一员占据着Vue项目中不可或缺的地位。作为Vue.js的官方路由，目前已经发展到了v4.x版本。总而言之，言而总之就是这玩意功能贼多，又方便，赶紧学一学看一看吧。

:::

## 安装

### 直接下载 / CDN

可以直接从网站下载源码来使用[Vue Router](https://unpkg.com/vue-router@4)。

> [Unpkg.com](https://unpkg.com/) 提供了基于 npm 的 CDN 链接。上述链接将始终指向 npm 上的最新版本。 你也可以通过像 `https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js` 这样的 URL 来使用特定的版本或 Tag。

其次unpkg.com也是比较常用的免费的CDN网站之一，同样作为CDN网站的也有[jsdelivr](https://www.jsdelivr.com/)亦或者、[BootCDN](https://www.bootcdn.cn/)，不过这些玩意有时候还是会时不时崩一崩，如果需要持续稳定性的，可以去相应的云服务厂商进行购买。

:::: code-group

::: code-group-item NPM

```sh
npm install vue-router@4
```

:::

::: code-group-item YARN

```sh
yarn add vue-router@4
```

:::

::::

## Router-link的一些改变

最近在使用过程中发现了v3.x -> v4.x版本中的一点点小差距。在以往的版本中，我们使用`router-link`标签的时候，默认会渲染为`a`标签来显示在页面中，通常我们不想要默认渲染为`a`标签时，我们会选择使用`prop`的`tag`来改变默认渲染的标签。

```vue
<!-- 例如 -->
<router-link :to="{ name:'Home' }" tag="li"></router-link>
```

但是在v4.x版本中这项功能被[移除](https://router.vuejs.org/zh/guide/migration/index.html#%E5%88%A0%E9%99%A4-router-link-%E4%B8%AD%E7%9A%84-event-%E5%92%8C-tag-%E5%B1%9E%E6%80%A7)了。

> 官方原因：这些属性经常一起使用，以使用与 `<a>` 标签不同的东西，但这些属性是在 `v-slot` API 之前引入的，并且没有足够的使用，因此没有足够的理由为每个人增加 bundle 包的大小。

```vue
将
<router-link to="/about" tag="span" event="dblclick">
  About Us
</router-link>
替换成
<router-link to="/about" custom v-slot="{ navigate }">
  <span @click="navigate" @keypress.enter="navigate" role="link">
    About Us
  </span>
</router-link>
```

具体用法便是在`router-link`的行内属性中添加 `custom` 来自定义`router-link`的内容。例如我们如果想要让我们的标签渲染为`li`放在一个ul列表内，我们就可以通过使用[custom](https://router.vuejs.org/zh/api/index.html#custom)来自定义它。

我们先看一下默认情况下的效果。

```vue
<ul class="searchType">
  <router-link to="home">
    123
  </router-link>
</ul>
```

渲染效果就如下图所示，默认情况下，`router-link`标签会默认渲染为`a`标签。![渲染效果](https://oss.oh-undefined.com/image-20220930230329468.png)

即便是我们在`在router-link`标签内放入了另外一个标签，例如`span`标签，但是它外层还是会拥有一个`a`标签的父元素。

![渲染效果](https://oss.oh-undefined.com/image-20220930230611384.png)

那么当我们添加了`custom`的属性来自定义`router-link`的时候

```vue
<router-link custom to="/home">
  <span>123</span>
</router-link>
```

渲染出来的标签则会直接变为span标签

![image-20220930230805664](https://oss.oh-undefined.com/image-20220930230805664.png)

但是这个时候我们的标签却失去了跳转的功能。我们则需要根据官方的文档来进行一定的修改。需要搭配`v-slot`来为这个自定义的`router-link`来添加功能。[router-link的v-slot](https://router.vuejs.org/zh/api/index.html#router-link-%E7%9A%84-v-slot)

```vue
<router-link
  to="/about"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <NavLink :active="isActive" :href="href" @click="navigate">
    {{ route.fullPath }}
  </NavLink>
</router-link>
```

官方文档中也对于几种参数进行了详细的介绍。

> - `href`：解析后的 URL。将会作为一个 `<a>` 元素的 `href` 属性。如果什么都没提供，则它会包含 `base`。
> - `route`：解析后的规范化的地址。
> - `navigate`：触发导航的函数。 **会在必要时自动阻止事件**，和 `router-link` 一样。例如：`ctrl` 或者 `cmd` + 点击仍然会被 `navigate` 忽略。
> - `isActive`：如果需要应用 [active class](https://router.vuejs.org/zh/api/index.html#active-class)，则为 `true`。允许应用一个任意的 class。
> - `isExactActive`：如果需要应用 [exact active class](https://router.vuejs.org/zh/api/index.html#exact-active-class)，则为 `true`。允许应用一个任意的 class。

使用的代码就可以进行一定的更改了。

```vue
<!-- 此处的v-for是循环了一个导航列表 只是简单的使用了href与navigate的属性
navigate属性赋予了自定义的router-link跳转的功能
-->
<router-link
  custom
  v-slot="{ href, navigate }"
  v-for="item in searchTypeList"
  :to="{ name: 'Home', query: { id: item.id } }"
  :key="item.type"
 >
  <li
    :href="href"
    @click="navigate"
    :class="[
            'searchTypeItem',
            $route.query.id == item.id ? 'active' : '',
            ]"
  >
    <!-- 此处的绑定class的方法 运用了$route来获取当前路由地址的信息 -->
    {{ item.name }}
  </li>
</router-link>
```

---

未完待续。
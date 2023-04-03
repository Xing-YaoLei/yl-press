import{_ as n,o as s,c as a,d as e}from"./app.6eaef69b.js";const t={},o=e(`<h1 id="vue\u6743\u9650\u8DEF\u7531\u7684\u4E00\u4E9B\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#vue\u6743\u9650\u8DEF\u7531\u7684\u4E00\u4E9B\u601D\u8DEF" aria-hidden="true">#</a> Vue\u6743\u9650\u8DEF\u7531\u7684\u4E00\u4E9B\u601D\u8DEF</h1><blockquote><p>\u6700\u8FD1\u5728\u5FD9\u6D3B\u7740\u505AVue\u7684\u540E\u53F0\u9879\u76EE\uFF0C\u7136\u540E\u9700\u8981\u7528\u5230\u6743\u9650\u7BA1\u7406\u76F8\u5173\u7684\u529F\u80FD\uFF0C\u8981\u6C42\u5C31\u662F\u9700\u8981\u6743\u9650\u7BA1\u7406\u9700\u8981\u5230\u8FBE\u6309\u94AE\u7EA7\u522B\u7684\u6743\u9650\uFF0C\u800C\u4E0D\u662F\u6211\u4EEC\u4F20\u7EDF\u6839\u636E\u7528\u6237\u7684\u8EAB\u4EFD\u6765\u5224\u65AD\u8DEF\u7531\u8868\u662F\u5426\u6E32\u67D3\u3002</p><p>\u4F8B\uFF1A\u6211\u7684\u7528\u6237\u8EAB\u4EFD\u662F\u4E00\u4E2A\u6E38\u5BA2\uFF0C\u7CFB\u7EDF\u672C\u8EAB\u8BBE\u5B9A\u7684\u6E38\u5BA2\u53EA\u80FD\u8BBF\u95EE\u9875\u9762\u89C2\u770B\u800C\u5DF2\uFF0C\u540E\u6765\u7BA1\u7406\u5458\u60F3\u8981\u8BA9\u6E38\u5BA2\u4E2D\u7684\u6211\uFF0C\u800C\u4E0D\u662F\u6240\u6709\u6E38\u5BA2\uFF0C\u62E5\u6709\u8BC4\u8BBA\u7684\u6743\u9650\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5355\u72EC\u7ED9\u6211\u6DFB\u52A0\u4E00\u4E2A\u8BC4\u8BBA\u7684\u6743\u9650\uFF0C\u5C31\u662F\u8FD9\u4E48\u4E00\u4E2A\u573A\u666F\u3002\u672C\u6765\u597D\u50CF\u4E5F\u6CA1\u4EC0\u4E48\u601D\u8DEF\u6765\u7740\uFF0C\u540E\u6765\u95EE\u4E86\u95EE\u4E00\u4E9B\u6709\u7ECF\u9A8C\u7684\u670B\u53CB\uFF0C\u8BF7\u6559\u4E4B\u540E\u5C0F\u53D7\u542F\u53D1\u3002</p></blockquote><h2 id="\u6839\u636E\u7528\u6237\u8EAB\u4EFD\u6743\u9650\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u7528\u6237\u8EAB\u4EFD\u6743\u9650\u6821\u9A8C" aria-hidden="true">#</a> \u6839\u636E\u7528\u6237\u8EAB\u4EFD\u6743\u9650\u6821\u9A8C</h2><p>1\u3001\u6211\u4EEC\u5148\u8FDB\u884C\u6700\u7B80\u5355\u7684\u6309\u7167\u7528\u6237\u8EAB\u4EFD\u6765\u8FDB\u884C\u6821\u9A8C</p><ul><li>\u8FDB\u884C\u8EAB\u4EFD\u6821\u9A8C\u524D\u63D0\u6761\u4EF6\u662F\u540E\u53F0\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7528\u6765\u8FD4\u56DE\u6211\u4EEC\u7684\u7528\u6237\u8EAB\u4EFD\uFF0C\u4F8B\u5982\uFF1A<code>super</code>\u3001<code>admin</code>\u3001<code>visitor</code>\u4E4B\u7C7B\u7684\u8EAB\u4EFD\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token function">getUserInfoAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// res.data</span>
    <span class="token comment">// userName:&#39;...&#39; - \u7528\u6237\u7684\u7528\u6237\u540D</span>
    <span class="token comment">// age: &#39;...&#39; - \u7528\u6237\u7684\u5E74\u9F84</span>
    <span class="token comment">// ... - \u7B49\u7B49\u5176\u4ED6\u4FE1\u606F</span>
    <span class="token comment">// role: &#39;admin&#39; - \u7528\u6237\u7684\u8EAB\u4EFD\u6743\u9650</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5047\u8BBE\u6211\u4EEC\u4E0A\u9762\u7684\u63A5\u53E3\u8FD4\u56DE\u7684\u6B63\u662F\u6211\u4EEC\u9700\u8981\u7684\u7528\u6237\u8EAB\u4EFD\uFF0C\u90A3\u4E48\u6211\u4EEC\u4FBF\u53EF\u4EE5\u5C06\u6211\u4EEC\u7684\u7528\u6237\u8EAB\u4EFD\u4F7F\u7528Vuex\u3001\u6216\u8005Pinia\u6765\u4FDD\u5B58\u4E0B\u6765\u3002</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// router -&gt; permission.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStoreHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/user&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePermissionStoreHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/permission&quot;</span>

<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStoreHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5728user\u7684Store\u4E2D\u6211\u4EEC\u901A\u8FC7\u8C03\u7528\u63A5\u53E3\u83B7\u53D6\u7528\u6237\u8EAB\u4EFD</span>
<span class="token keyword">const</span> permissionStore <span class="token operator">=</span> <span class="token function">usePermissionStoreHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5728permission\u7684Store\u4E2D\u6211\u4EEC\u8FDB\u884C\u6743\u9650\u8EAB\u4EFD\u5BF9\u5E94\u7684\u8DEF\u7531\u7684\u5F15\u5165</span>
<span class="token comment">/*
const hasPermission = (roles: string[], route: RouteRecordRaw) =&gt; {
// \u5224\u65AD\u662F\u5426\u5B58\u5728meta\u6807\u7B7E \u5E76\u4E14meta\u6807\u7B7E\u62E5\u6709roles\u5C5E\u6027
  if (route.meta &amp;&amp; route.meta.roles) {
    //  some\uFF1A\u81F3\u5C11\u6709\u4E00\u4E2A\u5143\u7D20\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u7684\u6D4B\u8BD5\u6761\u4EF6\uFF0C \u6743\u9650\u8EAB\u4EFD\u5217\u8868\u4E2D\u5224\u65AD\u5F53\u524D\u7684\u8FD9\u4E2A\u8DEF\u7531\u662F\u5426\u6709\u4E00\u4E2A\u8EAB\u4EFD\u5339\u914D\u5F53\u524D\u7684\u7528\u6237\u7684\u6743\u9650
    return roles.some((role) =&gt; {
			 // \u8FD4\u56DE\u7684\u5185\u5BB9\u4E3A roles\u4E2D\u5B58\u5728\u8EAB\u4EFD\u7684\u5E03\u5C14\u503C\uFF0Ctrue\u5219\u4E3A\u5B58\u5728\u8EAB\u4EFD\uFF0Cfalse\u5219\u4E3A\u4E0D\u5B58\u5728\u8EAB\u4EFD
      if (route.meta?.roles !== undefined) {
        // \u5224\u65AD\u6761\u4EF6\uFF0C\u8FD4\u56DE\u62E5\u6709meta\u7684roles\u4E2D\u5982\u679C\u5B58\u5728\u4F20\u5165\u7684role\u8EAB\u4EFD
        return route.meta.roles.includes(role)
      } else {
      // \u5426\u5219\u7684\u8BDD\u8FD4\u56DEfalse \u4EE3\u8868\u8BE5\u8DEF\u7531\u4E2D\u4E0D\u5B58\u5728roles\u5C5E\u6027
        return false
      }
    })
  } else {
    return true
  }
}

// \u8FC7\u6EE4\u5F02\u6B65\u8DEF\u7531
const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) =&gt; {
  const res: RouteRecordRaw[] = []
  // \u5C06\u4F20\u5165\u7684routes\u8DEF\u7531\u4FE1\u606F\u8FDB\u884C\u904D\u5386
  routes.forEach((route) =&gt; {
    const r = { ...route }
    // \u5C06\u4F20\u5165\u7684\u7528\u6237\u8EAB\u4EFD\u6743\u9650\u4EE5\u53CA\u5FAA\u73AF\u7684\u8DEF\u7531\u4FE1\u606F\u901A\u8FC7hasPermission\u8FDB\u884C\u5224\u65AD
    if (hasPermission(roles, r)) {
    // \u5982\u679C\u8DEF\u7531\u9879\u76EE\u62E5\u6709\u5B50\u8DEF\u7531
      if (r.children) {
      // \u90A3\u4E48\u9012\u5F52\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u4F20\u5165\u5B50\u8DEF\u7531\u4EE5\u53CA\u6743\u9650\u4FE1\u606F
        r.children = filterAsyncRoutes(r.children, roles)
      }
      // \u8FD8\u5728hasPermission\u7684\u5224\u65AD\u4E2D\uFF0C\u5982\u679C\u7B26\u5408\u6761\u4EF6\uFF0C\u5219\u5C06\u5F53\u524D\u7684\u8DEF\u7531\u4FE1\u606F\u63A8\u5165res\u5217\u8868\u6570\u7EC4\u4E2D
      res.push(r)
    }
  })
  // \u6700\u540E\u8FD4\u56DEres\u6570\u7EC4
  return res
}
// PermissionStore \u6743\u9650\u7684Pinia

export const usePermissionStore = defineStore(&quot;permission&quot;, () =&gt; {
  // \u5B9A\u4E49\u8DEF\u7531\u4FE1\u606F\u6570\u7EC4
  const routes = ref&lt;RouteRecordRaw[]&gt;([])
  // \u5B9A\u4E49\u52A8\u6001\u8DEF\u7531\u4FE1\u606F\u6570\u7EC4
  const dynamicRoutes = ref&lt;RouteRecordRaw[]&gt;([])
  // \u8BBE\u7F6E\u8DEF\u7531\u7684\u65B9\u6CD5
  const setRoutes = (roles: string[]) =&gt; {
    let accessedRoutes
    // \u5982\u679Croles\u4F20\u5165\u7684\u6743\u9650\u5B58\u5728admin \u7BA1\u7406\u5458\u6743\u9650
    if (roles.includes(&quot;admin&quot;)) {
    // \u90A3\u4E48accessedRoutes\u5219\u76F4\u63A5\u5C06 \u6240\u6709\u7684\u52A8\u6001\u8DEF\u7531\u653E\u5165\u5176\u4E2D
      accessedRoutes = asyncRoutes
    } else {
    // \u5426\u5219\u5219\u8FDB\u5165\u8FC7\u6EE4\u6570\u7EC4\u7684\u65B9\u6CD5\u4E2D\u53BB\uFF0C \u5C06\u5F02\u6B65\u8DEF\u7531\u4EE5\u53CA\u6743\u9650\u5206\u522B\u4F20\u5165 \u6B64\u65F6\u8D70\u5165filterAsyncRoutes\u8DEF\u7531\u4E2D
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    // \u6700\u540E\u5C06\u8DEF\u7531\u901A\u8FC7concat\u8FDB\u884C\u8DEF\u7531\u7684\u5408\u5E76
    routes.value = constantRoutes.concat(accessedRoutes)
    dynamicRoutes.value = accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})
*/</span>
<span class="token keyword">const</span> roles <span class="token operator">=</span> userStore<span class="token punctuation">.</span>roles
permissionStore<span class="token punctuation">.</span><span class="token function">setRoutes</span><span class="token punctuation">(</span>roles<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7136\u540E\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u6211\u4EEC\u7684\u8DEF\u7531\u8868\u5206\u6210\u4E24\u6BB5\uFF0C\u5206\u522B\u4E3A\u5E38\u9A7B\u8DEF\u7531\u4EE5\u53CA\u6743\u9650\u8DEF\u7531\u4E24\u90E8\u5206\uFF0C\u5176\u4E2D\u5E38\u9A7B\u8DEF\u7531\u4E00\u822C\u4E3A<code>login</code>\u3001<code>register</code>\u3001<code>list</code>\u7B49\u7B49\u9875\u9762\uFF0C\u8FD9\u4E9B\u9875\u9762\u4E00\u822C\u4E3A\u65E0\u9700\u767B\u5F55\u5373\u53EF\u67E5\u770B\u5177\u4F53\u5185\u5BB9\u7684\u9875\u9762\u3002</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src -&gt; router -&gt; index.ts</span>
<span class="token doc-comment comment">/** \u5E38\u9A7B\u8DEF\u7531  router*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> constantRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/403&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/error-page/403.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/404&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/error-page/404.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token string">&quot;/:pathMatch(.*)*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/login/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/register&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/register/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EE5\u53CA\u9700\u8981\u901A\u8FC7\u767B\u9646\u4E4B\u540E\u62E5\u6709\u6743\u9650\u8EAB\u4EFD\u7684\u7528\u6237\u624D\u5141\u8BB8\u8BBF\u95EE\u7684\u9875\u9762\u3002</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/permission&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&quot;/permission/page&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Permission&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;\u6743\u9650\u7BA1\u7406&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// roles\u4FBF\u662F\u6211\u4EEC\u7684\u6743\u9650\u8EAB\u4EFD\uFF0C\u6570\u7EC4\u4E2Dadmin\u4EE5\u53CAvisitor\u8868\u793A\u8BE5\u9875\u9762\u5141\u8BB8\u7BA1\u7406\u5458\u4EE5\u53CA\u8BBF\u5BA2\u8BBF\u95EE</span>
      roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;visitor&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u4EE5\u5728\u6839\u8DEF\u7531\u4E2D\u8BBE\u7F6E\u89D2\u8272</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permission/page.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;PagePermission&quot;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u9875\u9762\u6743\u9650&quot;</span><span class="token punctuation">,</span>
          roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span>
          <span class="token comment">// \u8BE5\u9875\u9762\u8868\u793A\u53EA\u6709\u7BA1\u7406\u5458admin\u7528\u6237\u624D\u53EF\u4EE5\u8FDB\u884C\u8BBF\u95EE</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;/dashboard&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permission/directive.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;Dashboard&quot;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u770B\u677F&quot;</span> <span class="token comment">// \u5982\u679C\u672A\u8BBE\u7F6E\u89D2\u8272\uFF0C\u5219\u8868\u793A\uFF1A\u8BE5\u9875\u9762\u4E0D\u9700\u8981\u6743\u9650</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/:pathMatch(.*)*&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Must put the &#39;ErrorPage&#39; route at the end, \u5FC5\u987B\u5C06 &#39;ErrorPage&#39; \u8DEF\u7531\u653E\u5728\u6700\u540E</span>
    redirect<span class="token operator">:</span> <span class="token string">&quot;/404&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;ErrorPage&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[o];function p(c,l){return s(),a("div",null,i)}var r=n(t,[["render",p],["__file","Auth.html.vue"]]);export{r as default};

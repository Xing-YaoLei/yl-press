import{_ as n,o as a,c as t,e as s}from"./app.ce3324c5.js";const e={},p=s(`<h1 id="vue-js\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#vue-js\u9762\u8BD5\u9898" aria-hidden="true">#</a> Vue.js\u9762\u8BD5\u9898</h1><h3 id="vue\u7684\u751F\u547D\u5468\u671F\u90FD\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u751F\u547D\u5468\u671F\u90FD\u6709\u54EA\u4E9B" aria-hidden="true">#</a> Vue\u7684\u751F\u547D\u5468\u671F\u90FD\u6709\u54EA\u4E9B\uFF1F</h3><table><thead><tr><th style="text-align:center;">\u751F\u547D\u5468\u671F</th><th>Vue2.x</th><th>Vue3.x</th></tr></thead><tbody><tr><td style="text-align:center;">\u521B\u5EFA\u524D</td><td>beforeCreate</td><td>setup</td></tr><tr><td style="text-align:center;">\u521B\u5EFA\u540E</td><td>created</td><td>setup</td></tr><tr><td style="text-align:center;">\u6302\u8F7D\u524D</td><td>beforeMount</td><td>onBeforeMount</td></tr><tr><td style="text-align:center;">\u6302\u8F7D\u540E</td><td>mounted</td><td>onMounted</td></tr><tr><td style="text-align:center;">\u66F4\u65B0\u524D</td><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td style="text-align:center;">\u66F4\u65B0\u540E</td><td>updated</td><td>onUpdated</td></tr><tr><td style="text-align:center;">\u9500\u6BC1\u524D</td><td>beforeDestroy</td><td>onBeforeUnmount</td></tr><tr><td style="text-align:center;">\u9500\u6BC1\u540E</td><td>destroyed</td><td>onUnmounted</td></tr></tbody></table><p>\u5728Vue\u751F\u547D\u5468\u671F\u4E2D\uFF0C\u7236\u5B50\u7EC4\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u4E3A\uFF1A</p><p>\u7236\u7EC4\u4EF6<code>beforeCreate</code> -&gt; \u7236\u7EC4\u4EF6 <code>created</code> -&gt; \u7236\u7EC4\u4EF6 <code>beforeMount</code> -&gt; \u5B50\u7EC4\u4EF6<code> beforeCreate</code> -&gt; \u5B50\u7EC4\u4EF6 <code>created </code>-&gt; \u5B50\u7EC4\u4EF6 <code>beforeMount</code> -&gt; \u5B50\u7EC4\u4EF6 <code>mounted</code> -&gt; \u7236\u7EC4\u4EF6 <code>mounted</code> \u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u4EBA\u7684\u51FA\u751F\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5B69\u5B50\u51FA\u751F\u7684\u65F6\u5019\uFF0C\u5B69\u5B50\u7684\u5404\u9879\u5668\u5B98\uFF08\u7EC4\u4EF6\uFF09\u90FD\u5DF2\u7ECF\u662F\u6302\u8F7D\u5B8C\u6BD5\u4E4B\u540E\u6574\u4F53\u624D\u51FA\u751F\u7684\uFF08<code>mounted</code>\uFF09 \u4E2A\u4EBA\u7406\u89E3\u8BF7\u52FF\u89C1\u602A\u3002</p><h3 id="vue\u5E38\u7528\u7684\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#vue\u5E38\u7528\u7684\u6307\u4EE4" aria-hidden="true">#</a> Vue\u5E38\u7528\u7684\u6307\u4EE4</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// v-if \u5224\u65AD\u662F\u5426\u6E32\u67D3
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// if-show  \u5224\u65AD\u662F\u5426\u663E\u793A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// v-model \u7ED1\u5B9A\u8868\u5355\u503C
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
// v-for
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in todoList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// v-bind \u4E0E\u5B9A\u4E49\u7684\u503C\u8FDB\u884C\u7ED1\u5B9A \u8BFB\u53D6\u53D8\u91CF
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
// v-on \u7ED1\u5B9A\u4E8B\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickHandle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// v-html \u5728\u8BE5\u6807\u7B7E\u4E0B\u6E32\u67D3html\u6837\u5F0F
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// v-text \u5728\u8BE5\u6807\u7B7E\u4E0B\u6E32\u67D3\u6587\u672C\u5185\u5BB9
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
// v-once \u8BE5\u6807\u7B7E\u4E0B\u7684\u63D2\u503C\u53EA\u6E32\u67D3\u4E00\u6B21 \u6570\u636E\u6539\u53D8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,u){return a(),t("div",null,o)}var d=n(e,[["render",c],["__file","Vue.html.vue"]]);export{d as default};

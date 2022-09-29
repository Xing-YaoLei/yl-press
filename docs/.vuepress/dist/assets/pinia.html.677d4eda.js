import{_ as l,o as u,c as r,a as n,d as a,w as t,b as s,e as i,r as c}from"./app.3ea8243f.js";const d={},k=n("h1",{id:"pinia\u7684\u7B80\u5355\u7528\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pinia\u7684\u7B80\u5355\u7528\u6CD5","aria-hidden":"true"},"#"),s(" Pinia\u7684\u7B80\u5355\u7528\u6CD5")],-1),m={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"\u524D\u8A00",-1),b={href:"https://pinia.vuejs.org/getting-started.html",target:"_blank",rel:"noopener noreferrer"},g=s("Pinia"),h=s("\u4E5F\u662F\u4E00\u4E2A\u7528\u4E8EVuejs\u7684\u72B6\u6001\u7BA1\u7406\u5668\uFF0C\u5728Vuejs2.x\u4E2D\u5B98\u65B9\u63A8\u8350\u4F7F\u7528\u7684\u662FVuex\u6765\u8FDB\u884CVue\u7684\u72B6\u6001\u7BA1\u7406\uFF0C\u4F46\u662F\u5728Vue3.x\u7248\u672C\u540E\uFF0C\u5B98\u65B9\u6587\u6863\u7684\u72B6\u6001\u7BA1\u7406\u5668\u5219\u53D8\u6210\u4E86Pinia\uFF0C\u5728Pinia\u6587\u6863\u4E2D\u4E5F\u63D0\u5230\u4E86\uFF0C\u6B64\u72B6\u6001\u7BA1\u7406\u5668\u4E0D\u4EC5\u4EC5\u53EA\u6709Vue3.x\u53EF\u4EE5\u4F7F\u7528\uFF0C\u540C\u6837\u4E5F\u9002\u7528\u4E8EVue2.x\u7248\u672C\u3002\u6240\u4EE5\u5927\u5BB6\u53EF\u4EE5\u653E\u5FC3\u98DF\u7528\u3002"),f=n("h2",{id:"installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),s(" Installation")],-1),_=n("ul",null,[n("li",null,[s("\u5B89\u88C5Pinia\u901A\u8FC7"),n("strong",null,"npm"),s("\u6216\u8005"),n("strong",null,"yarn"),s("\u90FD\u53EF\u4EE5\u8FDB\u884C\u5B89\u88C5")])],-1),y=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` pinia
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` pinia
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x={class:"custom-container tip"},j=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),P=s("\u5B98\u65B9\u63D0\u793A\uFF1A\u5982\u679C\u4F60\u4F7F\u7528\u7684Vuejs\u7248\u672C\u5C0F\u4E8E2.7\u7248\u672C\u7684\u60C5\u51B5\u4E0B\u5219\u9700\u8981\u5B89\u88C5 "),V=n("strong",null,"@vue/composition-api",-1),S=s("\u8FDB\u884C\u914D\u5408\u4F7F\u7528\uFF0C\u5176\u6B21\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F"),L=n("code",null,"Nuxt",-1),C=s("\uFF0C\u5219\u9700\u8981\u67E5\u770B\u5177\u4F53\u7684"),A={href:"https://pinia.vuejs.org/ssr/nuxt.html",target:"_blank",rel:"noopener noreferrer"},B=s("\u6587\u6863"),N=n("ul",null,[n("li",null,"\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u5219\u5728\u9879\u76EE\u5185\u8FDB\u884C\u5F15\u5165\u5373\u53EF")],-1),$=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// src -> main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createPinia "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" pinia "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createPinia"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("pinia"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// src -> main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createPinia"),n("span",{class:"token punctuation"},","),s(" PiniaVuePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`

Vue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("PiniaVuePlugin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" pinia "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createPinia"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"el"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},","),s(`
  pinia`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=i(`<h2 id="defining" tabindex="-1"><a class="header-anchor" href="#defining" aria-hidden="true">#</a> Defining</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u5B58\u50A8\u7A7A\u95F4\u53EF\u4EE5\u5728\u6211\u4EEC\u7684<code>src</code>\u76EE\u5F55\u6587\u4EF6\u5939\u4E0B\u5C1D\u8BD5\u521B\u5EFA\u4E00\u4E2A<code>stores</code>\u7684\u6587\u4EF6\u5939\u7528\u6765\u7EDF\u4E00\u5B58\u653E\u6211\u4EEC\u7684\u72B6\u6001\u5B58\u50A8\u7A7A\u95F4\u6587\u4EF6\uFF0C\u9996\u5148\u6211\u4EEC\u9ED8\u8BA4\u5E38\u89C1\u4E00\u4E2A<code>main.js</code>\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src -&gt; stores -&gt; main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;\u547D\u540D\u7A7A\u95F4&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello world&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u9664\u4E86state\u4EE5\u5916\uFF0CPinia\u4E5F\u62E5\u6709actions\u548Cgetters\u5C5E\u6027\u7684options\u5BF9\u8C61\u3002</p>`,4),T=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// src -> stores -> main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'counter'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
  	`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" isLoading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hello world'"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count"),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function"},"loadingChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isLoading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`isLoading
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      count`),n("span",{class:"token punctuation"},","),s(`
      isLoading`),n("span",{class:"token punctuation"},","),s(`
      msg`),n("span",{class:"token punctuation"},","),s(`
      increment`),n("span",{class:"token punctuation"},","),s(`
      loadingChange
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// src -> stores -> main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'counter'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u5B58\u653E\u7684\u72B6\u6001\u503C"),s(`
  `),n("span",{class:"token function-variable function"},"state"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(` 
    `),n("span",{class:"token literal-property property"},"count"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"isLoading"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hello world'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// getters\u53EF\u4EE5\u7406\u89E3\u4E3A\u72B6\u6001\u7BA1\u7406\u5185\u7684\u8BA1\u7B97\u5C5E\u6027 \u63D0\u4F9B\u7684\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u5728\u5916\u90E8\u8FDB\u884C\u8C03\u7528"),s(`
  `),n("span",{class:"token literal-property property"},"getters"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"doubleCount"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"state"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" state"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// action\u53EF\u4EE5\u7406\u89E3\u4E3AJs\u4E2D\u7684function\u65B9\u6CD5\u7B49 \u63D0\u4EA4\u540E\u89E6\u53D1\uFF0C\u6539\u53D8State\u5B58\u653E\u7684\u503C\u3002"),s(`
  `),n("span",{class:"token literal-property property"},"actions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count"),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"loadingChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isLoading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`isLoading
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=i(`<h2 id="using" tabindex="-1"><a class="header-anchor" href="#using" aria-hidden="true">#</a> Using</h2><p>\u5728\u9875\u9762\u4E2D\u53BB\u4F7F\u7528Pinia\u8BFB\u53D6\u6211\u4EEC\u5728\u72B6\u6001\u7BA1\u7406\u4E2D\u5B58\u653E\u7684\u72B6\u6001\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// src -&gt; App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  {{ store.msg }}
  <span class="token comment">&lt;!-- &lt;button @click=&quot;clickHandle()&quot;&gt;\u66F4\u6539&lt;/button&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useBaseStore <span class="token keyword">from</span> <span class="token string">&#39;./stores/main&#39;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useBaseStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784" aria-hidden="true">#</a> \u89E3\u6784</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u6211\u4EEC\u53EA\u662F\u7B80\u5355\u7684\u5F15\u5165Store\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8BBF\u95EE\u53D8\u91CF\u6BCF\u6B21\u90FD\u9700\u8981\u4F7F\u7528<code>store.msg</code>\u3001<code>store.loading</code>\u3001<code>store.count</code>\u8FD9\u6837\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u3002\u6709\u7684\u540C\u5B66\u53EF\u80FD\u4F1A\u60F3\u5230\u7ED3\u6784\u8D4B\u503C\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\u3002\u4F8B\u5982\uFF1A\`const { msg, loading, count } = store</p><p><strong>\u4F46\u662F</strong>\u8FD9\u79CD\u65B9\u5F0F\u89E3\u6784\u51FA\u7684\u503C\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u66F4\u6539\u7684\u60C5\u51B5\u4E0B\uFF0C\u89C6\u56FE\u662F\u4E0D\u4F1A\u8FDB\u884C\u66F4\u65B0\u6E32\u67D3\u7684\u3002 Pinia\u63D0\u4F9B\u4E86<strong>storeToRefs</strong>\u7684\u65B9\u6CD5\u6765\u5E2E\u52A9\u6211\u4EEC\u8FDB\u884C\u6570\u636E\u7684\u66F4\u65B0\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src -&gt; App.vue</span>
<span class="token keyword">import</span> useBaseStore <span class="token keyword">from</span> <span class="token string">&#39;./stores/base&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useBaseStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u7F6E\u72B6\u6001\u503C" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u72B6\u6001\u503C" aria-hidden="true">#</a> \u91CD\u7F6E\u72B6\u6001\u503C</h2><p>Pinia\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>store.$reset</code>\u6765\u91CD\u7F6E\u72B6\u6001\u4E2D\u7684\u503C</p><h2 id="\u4FEE\u6539\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u72B6\u6001" aria-hidden="true">#</a> \u4FEE\u6539\u72B6\u6001</h2><p>Pinia\u53EF\u4EE5\u901A\u8FC7\u5728action\u4E2D\u8FDB\u884C\u6570\u636E\u72B6\u6001\u7684\u4FEE\u6539\uFF0C\u6211\u4EEC\u4E66\u5199\u5B8C\u6BD5action\u7684\u65B9\u6CD5\u540E\uFF0C\u53EA\u9700\u8981\u89E6\u53D1\u8FD9\u4E2Aaction\u5373\u53EF\u5B8C\u6210\u6570\u636E\u72B6\u6001\u7684\u4FEE\u6539\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// src -&gt; App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">steup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> useBaseStore <span class="token keyword">from</span> <span class="token string">&#39;./stores/base&#39;</span>
  <span class="token keyword">const</span>  <span class="token operator">=</span> <span class="token function">useBaseStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u8BE5\u5904 \u51FA\u53D1onMounted\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u9875\u9762\u6302\u8F7D\u5B8C\u6BD5\u4E4B\u540E\u5373\u53EF\u89E6\u53D1\u8BE5action</span>
    store<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539\u53D8\u72B6\u6001-patch" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u72B6\u6001-patch" aria-hidden="true">#</a> \u6539\u53D8\u72B6\u6001 - $patch</h2>`,12),H=s("\u9664\u4E86\u4F7F\u7528"),M=n("code",null,"store.count++",-1),E=s("\u3001\u6216\u8005\u89E6\u53D1action\u7684\u65B9\u5F0F\u6539\u53D8\u72B6\u6001\uFF0CPinia\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528"),D={href:"https://pinia.vuejs.org/core-concepts/state.html#mutating-the-state",target:"_blank",rel:"noopener noreferrer"},J=s("$patch"),O=s("\u6765\u8FDB\u884C\u72B6\u6001\u7684\u6539\u53D8\u3002"),U=i(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> store<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u75AB\u60C5\u9000\u6563\uFF0C\u{1F93A}\u{1F93A}\u{1F93A}&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u53EF\u80FD\u72B6\u6001\u53EF\u80FD\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E9B\u7B80\u5355\u7684\u503C\uFF0C\u6709\u53EF\u80FD\u662F\u5BF9\u8C61\u6216\u8005\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u4F7F\u7528$patch\u7684\u65F6\u5019\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4E66\u5199\u65B9\u6CD5\u3002\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;iPhone14 Pro&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8899</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  state<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BE5\u4EE3\u7801\u672C\u4EBA\u6682\u672A\u5728\u9879\u76EE\u4E2D\u5C1D\u8BD5\uFF0C\u6682\u65F6\u7ED3\u5408\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u4E66\u5199\uFF0C\u5C1D\u8BD5\u540E\uFF0C\u4F1A\u5BF9\u8BE5\u6CE8\u91CA\u8FDB\u884C\u4FEE\u6539\u4EE5\u53CA\u8C03\u6574\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002" tabindex="-1"><a class="header-anchor" href="#\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002" aria-hidden="true">#</a> \u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002</h2>`,4);function Y(z,F){const o=c("ExternalLinkIcon"),e=c("CodeGroupItem"),p=c("CodeGroup");return u(),r("div",null,[k,n("div",m,[v,n("p",null,[n("a",b,[g,a(o)]),h])]),f,_,a(p,null,{default:t(()=>[a(e,{title:"NPM"},{default:t(()=>[y]),_:1}),a(e,{title:"YARN"},{default:t(()=>[w]),_:1})]),_:1}),n("div",x,[j,n("p",null,[P,V,S,L,C,n("a",A,[B,a(o)])])]),N,a(p,null,{default:t(()=>[a(e,{title:"Vue3.x"},{default:t(()=>[$]),_:1}),a(e,{title:"Vue2.x"},{default:t(()=>[I]),_:1})]),_:1}),R,a(p,null,{default:t(()=>[a(e,{title:"Setup"},{default:t(()=>[T]),_:1}),a(e,{title:"Option"},{default:t(()=>[q]),_:1})]),_:1}),G,n("p",null,[H,M,E,n("a",D,[J,a(o)]),O]),U])}var Q=l(d,[["render",Y],["__file","pinia.html.vue"]]);export{Q as default};

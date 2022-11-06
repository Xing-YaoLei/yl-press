import{_ as s,o as n,c as e,e as a}from"./app.ec912b41.js";const t={},p=a(`<h1 id="typescript\u53EF\u80FD\u51FA\u73B0\u7684bug" tabindex="-1"><a class="header-anchor" href="#typescript\u53EF\u80FD\u51FA\u73B0\u7684bug" aria-hidden="true">#</a> TypeScript\u53EF\u80FD\u51FA\u73B0\u7684Bug</h1><h3 id="ts\u8B66\u544A\u4E0D\u5141\u8BB8\u4F7F\u7528any" tabindex="-1"><a class="header-anchor" href="#ts\u8B66\u544A\u4E0D\u5141\u8BB8\u4F7F\u7528any" aria-hidden="true">#</a> Ts\u8B66\u544A\u4E0D\u5141\u8BB8\u4F7F\u7528Any</h3><p>\u5F53\u9879\u76EE\u6784\u5EFA\u4F7F\u7528TS\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5728\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49\u4E0A\u4F7F\u7528\u4E86<code>Any</code>\uFF0C\u5219\u6709\u53EF\u80FD\u4F1A\u62A5<code>warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any</code>\u7684\u9519\u8BEF\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u901A\u8FC7\u5728<code>.eslintrc.js</code>\u6587\u4EF6\u4E2D\u7684rules\u4E2D\u8FDB\u884C\u914D\u7F6E\u5982\u4E0B\u4EE3\u7801\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// override/add rules settings here, such as:</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts\u914D\u7F6E\u65E0\u6CD5\u540C\u65F6\u5F15\u5165\u6A21\u5757\u548C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#ts\u914D\u7F6E\u65E0\u6CD5\u540C\u65F6\u5F15\u5165\u6A21\u5757\u548C\u7C7B\u578B" aria-hidden="true">#</a> TS\u914D\u7F6E\u65E0\u6CD5\u540C\u65F6\u5F15\u5165\u6A21\u5757\u548C\u7C7B\u578B</h3><p>\u5F53\u9879\u76EE\u6784\u5EFA\u4F7F\u7528TS\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5728\u5F15\u5165\u6A21\u5757\u7684\u65F6\u5019<code>import axios, { AxiosResponse, AxiosRequestConfig } from &#39;axios&#39;;</code>\u540C\u65F6\u5F15\u5165\u4E86\u6A21\u5757\u4EE5\u53CA\u6A21\u5757\u4E2D\u7684\u7C7B\u578B\u7684\u60C5\u51B5\u4E0B\uFF0C\u5219\u53EF\u80FD\u4F1A\u62A5\u9519<code>&quot;AxiosRequestConfig&quot; \u662F\u4E00\u79CD\u7C7B\u578B\uFF0C\u5728\u540C\u65F6\u542F\u7528\u4E86 &quot;preserveValueImports&quot; \u548C &quot;isolatedModules&quot; \u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u4EC5\u7C7B\u578B\u5BFC\u5165\u8FDB\u884C\u5BFC\u5165\u3002</code></p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5355\u72EC\u5F15\u5165\u6A21\u5757\u4EE5\u53CA\u5355\u72EC\u8FDB\u884C\u7C7B\u578B\u7684\u5F15\u5165\u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AxiosResponse<span class="token punctuation">,</span> AxiosRequestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function i(c,r){return n(),e("div",null,o)}var d=s(t,[["render",i],["__file","TypeScript.html.vue"]]);export{d as default};

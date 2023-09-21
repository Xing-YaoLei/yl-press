import{_ as n,o as s,c as a,d as e}from"./app.4c88571b.js";const t={},i=e(`<h1 id="go-\u4E2D\u7684\u5305\u7684\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#go-\u4E2D\u7684\u5305\u7684\u5F15\u5165" aria-hidden="true">#</a> Go \u4E2D\u7684\u5305\u7684\u5F15\u5165</h1><p>\u7F16\u5199\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u80FD\u662F\u4E00\u4E2A\u6587\u4EF6\u68AD\u54C8\u51E0\u5343\u884C\uFF0C\u80AF\u5B9A\u4F1A\u6839\u636E\u6A21\u5757\u6765\u8FDB\u884C\u5C01\u88C5\uFF0C\u7136\u540E\u901A\u8FC7\u5BFC\u5165\u5BFC\u51FA\u7684\u65B9\u5F0F\u6765\u4F18\u5316\u6574\u4F53\u7684\u4EE3\u7801\u7ED3\u6784\u4EE5\u53CA\u4EE3\u7801\u903B\u8F91\uFF0C\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027\u7684\uFF0C\u5728Go\u4E2D\uFF0C\u540C\u6837\u53EF\u4EE5\u8FDB\u884C\u5305\u7684\u4E92\u76F8\u5F15\u5165\u529F\u80FD\u3002\u4F8B\u5982\u6211\u4EEC\u901A\u5E38\u5728\u63A7\u5236\u53F0\u6253\u5370\u7684<code>fmt</code>\u5305</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u51FAmain&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u6700\u7EC8\u8F93\u51FA\u7ED3\u679C\u5C31\u662F<code>\u8F93\u51FAmain</code>\u8FD9\u6837\u4E00\u6BB5\u6587\u5B57\uFF0C\u5728\u5934\u90E8\u6211\u4EEC\u5219\u901A\u8FC7\u4F7F\u7528<code>import</code>\u6765\u5BFC\u5165\u4E86\u6211\u4EEC\u6240\u9700\u8981\u7684<code>fmt</code>\u5305\uFF0C\u6211\u4EEC\u5728\u5F15\u5165\u5185\u7F6E\u5305\u4EE5\u5916\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BFC\u5165\u81EA\u5DF1\u6240\u5C01\u88C5\u7684\u5305\u3002\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// pack/lib/lib.go</span>
<span class="token keyword">package</span> lib
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">SendNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;No&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;libInit&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728<code>index.go</code>\u76F8\u540C\u5C42\u7EA7\u7684<code>lib</code>\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E86\u4E00\u4E2A<code>lib.go</code>\u7684\u6587\u4EF6\uFF0C\u5E76\u4E14\u8FDB\u884C\u4E00\u90E8\u5206\u7B80\u5355\u4EE3\u7801\u7684\u4E66\u5199\u3002\u7136\u540E\u6211\u4EEC\u5728<code>index.go</code>\u6587\u4EF6\u4E2D\u5C06\u6B64\u5305\u8FDB\u884C\u5BFC\u5165</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// pack/index.go</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;lib&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u65E0\u6CD5\u76F4\u63A5\u5BFC\u5165 package lib is not in GOROOT (/usr/local/go/src/lib) \u9700\u8981\u6DFB\u52A0\u4ED6\u4EEC\u5171\u6709\u7684\u7236\u6587\u4EF6\u5939</span>
  <span class="token string">&quot;pack/lib&quot;</span> <span class="token comment">// \u6B64\u79CD\u64CD\u4F5C\u4E3A\u6B63\u786E\u7684</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u51FAmain&quot;</span><span class="token punctuation">)</span>
	lib<span class="token punctuation">.</span><span class="token function">SendNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u65B9Demo\u64CD\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u76F4\u63A5\u5F15\u5165<code>lib</code>\u5305\uFF0C\u5BFC\u81F4\u7F16\u8F91\u5668\u63D0\u793A\u9519\u8BEF<code>package lib is not in GOROOT (/usr/local/go/src/lib)</code>\u9700\u8981\u6211\u4EEC\u5C06<code>index.go</code>\u4EE5\u53CA<code>lib.go</code>\u5171\u6709\u7684\u7236\u7EA7\u6587\u4EF6\u5939\u643A\u5E26\u624D\u53EF\u4EE5\u3002</p><p>\u5F15\u5165\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5728<code>main</code>\u65B9\u6CD5\u4E2D\u76F4\u63A5\u8C03\u7528<code>lib</code>\u6587\u4EF6\u5939\u4E0B<code>lib.go</code>\u6587\u4EF6\u4E2D\u5C01\u88C5\u7684\u65B9\u6CD5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// pack/index.go</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span><span class="token punctuation">;</span>
  <span class="token string">&quot;pack/lib&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u51FAmain&quot;</span><span class="token punctuation">)</span>
	lib<span class="token punctuation">.</span><span class="token function">SendNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5305\u7684\u5F15\u5165\u987A\u5E8F\u4EE5\u53CA\u6267\u884C\u987A\u5E8F\u4E00\u822C\u4E3A\uFF0C\u6240\u6709\u5B50\u5305\u6309\u7167\u5148\u540E\u987A\u5E8F\u6267\u884C\u65B9\u6CD5\u5C42\u7EA7\u5411\u4E0B\uFF0C\u6267\u884C\u5230\u6700\u4E2D\u7684\u5B50\u5305\u6CA1\u6709\u5F15\u5165\u7684\u65F6\u5019\uFF0C\u9010\u7EA7\u5411\u4E0A\u8FD4\u56DE\uFF0C\u6700\u7EC8\u6267\u884C<code>main</code>\u5305\u7684<code>main</code>\u65B9\u6CD5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;pack/lib&quot;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;pack/plugins&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u51FAmain&quot;</span><span class="token punctuation">)</span>
	lib<span class="token punctuation">.</span><span class="token function">SendNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	plugins<span class="token punctuation">.</span><span class="token function">PrintYes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># libInit // \u6B64\u4E3Alib\u5305\u4E2D\u7684init\u65B9\u6CD5</span>
<span class="token comment"># pluginInit // \u6B64\u4E3Aplugin\u4E2D\u7684init\u65B9\u6CD5</span>
<span class="token comment"># \u8F93\u51FAmain // main\u5305\u4E2D\u7684main\u65B9\u6CD5</span>
<span class="token comment"># No // main\u5305\u4E2D\u8C03\u7528lib\u5305\u7684\u65B9\u6CD5 </span>
<span class="token comment"># pluginYes // main\u5305\u4E2D\u8C03\u7528plugin\u5305\u7684\u65B9\u6CD5 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[i];function o(p,l){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","06-package.html.vue"]]);export{d as default};
import{_ as n,o as s,c as a,d as t}from"./app.165283f2.js";const e={},i=t(`<h1 id="struct-\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#struct-\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> Struct \u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B</h1><p>Go\u8BED\u8A00\u4E2D\u7684struct\u662F\u4E00\u79CD\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u5C01\u88C5\u4E00\u7EC4\u76F8\u5173\u7684\u6570\u636E\u3002struct\u53EF\u4EE5\u5305\u542B\u5404\u79CD\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u6570\u7EC4\u3001\u5207\u7247\u3001\u6307\u9488\u3001\u51FD\u6570\u7B49\u7B49\u3002\u3010\u8BF4\u4EBA\u8BDD\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u662F\u4E00\u4E2AJavaScript\u4E2D\u7684\u5BF9\u8C61\u3011</p><h2 id="struct\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#struct\u7684\u5B9A\u4E49" aria-hidden="true">#</a> Struct\u7684\u5B9A\u4E49</h2><h3 id="\u57FA\u672C\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5B9A\u4E49" aria-hidden="true">#</a> \u57FA\u672C\u5B9A\u4E49</h3><p>\u57FA\u672C\u5B9A\u4E49\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\u3002\u901A\u8FC7\u5B9A\u4E49\u4E00\u4E2APerson\u7684struct\uFF0C\u5176\u4E2D\u5305\u542B\u4E09\u4E2A\u5B57\u6BB5\uFF0CName\u3001Age\u3001Email\u3002\u8FD9\u4E9B\u5B57\u6BB5\u90FD\u662F\u7531\u7C7B\u578B\u548C\u540D\u79F0\u7EC4\u6210\u7684\u952E\u503C\u5BF9\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
	Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B9E\u4F8B" aria-hidden="true">#</a> \u521B\u5EFA\u5B9E\u4F8B</h3><p>\u65E2\u7136\u6709\u4E86\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8EPerson\u7684\u5B9E\u4F8B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
	Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	Ley <span class="token operator">:=</span> Person <span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span><span class="token string">&quot;Ley&quot;</span><span class="token punctuation">,</span>
		Age <span class="token punctuation">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
		Email<span class="token punctuation">:</span> <span class="token string">&quot;542528512@qq.com&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run main.go                                                                            </span>
<span class="token comment"># {Ley 666 542528512@qq.com}</span>
<span class="token comment"># Ley</span>
<span class="token comment"># 666</span>
<span class="token comment"># 542528512@qq.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5B9E\u4F8B" aria-hidden="true">#</a> \u4FEE\u6539\u5B9E\u4F8B</h3><p>\u65E2\u7136\u6709\u521B\u5EFA\uFF0C\u5C31\u80AF\u5B9A\u53EF\u80FD\u4F34\u968F\u7740\u4FEE\u6539\u7684\u64CD\u4F5C\u3002\u6D89\u53CA\u5230\u4FEE\u6539\u64CD\u4F5C\u53EF\u80FD\u5C31\u9700\u8981\u67E5\u770B\u4E00\u4E0B\u8DE8\u65B9\u6CD5\u4F20\u9012\u7684\u65F6\u5019\uFF0C\u662F\u503C\u4F20\u9012\u8FD8\u662F\u6307\u9488\u4F20\u9012\u4E86\u3002\u5177\u4F53\u4F8B\u5B50\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	f <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
	Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">changePerson</span><span class="token punctuation">(</span>user Person<span class="token punctuation">)</span><span class="token punctuation">{</span>
	user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;\u80E1\u6843&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	Ley <span class="token operator">:=</span> Person <span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span><span class="token string">&quot;Ley&quot;</span><span class="token punctuation">,</span>
		Age <span class="token punctuation">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
		Email<span class="token punctuation">:</span> <span class="token string">&quot;542528512@qq.com&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">changePerson</span><span class="token punctuation">(</span>Ley<span class="token punctuation">)</span> 
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">)</span> <span class="token comment">// {Ley 666 542528512@qq.com}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u521A\u624D\u7684\u64CD\u4F5C\u4E2D\uFF0C\u6700\u7EC8\u8F93\u51FA\u8FD8\u662F\u539F\u672C\u7684\u503C\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E2A\u5730\u65B9\u6211\u4EEC\u5C31\u80FD\u591F\u53D1\u73B0\uFF0Cstruct\u5B9A\u4E49\u7684\u6570\u636E\u7C7B\u578B\u5728\u65B9\u6CD5\u4E2D\u4F20\u9012\u7684\u65F6\u5019\uFF0C\u662F\u8FDB\u884C\u7684<strong>\u503C\u4F20\u9012</strong>\uFF0C\u800C\u4E0D\u662F\u6307\u9488\u4F20\u9012\u3002</p><p>\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5728\u53E6\u5916\u7684\u65B9\u6CD5\u4FEE\u6539\u6570\u636E\u7684\u65F6\u5019\uFF0C\u540C\u6B65\u4FEE\u6539\u6E90\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>&amp;</code>\u548C<code>*</code>\u6765\u8FDB\u884C\u6307\u9488\u5730\u5740\u7684\u4F20\u9012\u3002\u5177\u4F53\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">changePerson</span><span class="token punctuation">(</span>user <span class="token operator">*</span>Person<span class="token punctuation">)</span><span class="token punctuation">{</span>
	user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;\u80E1\u6843&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	Ley <span class="token operator">:=</span> Person <span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span><span class="token string">&quot;Ley&quot;</span><span class="token punctuation">,</span>
		Age <span class="token punctuation">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
		Email<span class="token punctuation">:</span> <span class="token string">&quot;542528512@qq.com&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">changePerson</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Ley<span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Ley<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// {\u80E1\u6843 666 542528512@qq.com}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u4E00\u4E9B\u5C0F\u63D0\u793A</p><ul><li>struct\u5B57\u6BB5\u7684\u540D\u79F0\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u624D\u80FD\u88AB\u5176\u4ED6\u5305\u8BBF\u95EE\uFF0C\u5426\u5219\u5C31\u662F\u79C1\u6709\u7684\u3002</li><li>struct\u53EF\u4EE5\u5305\u542B\u533F\u540D\u5B57\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u5D4C\u5957\u5176\u4ED6struct\u3002</li><li>struct\u662F\u503C\u7C7B\u578B\uFF0C\u4F20\u9012struct\u5B9E\u4F8B\u65F6\u4F1A\u8FDB\u884C\u590D\u5236\uFF0C\u4FEE\u6539\u526F\u672C\u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u5B9E\u4F8B\u3002</li></ul></div><h3 id="struct\u4E0Etypescript\u4E2D\u7684\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#struct\u4E0Etypescript\u4E2D\u7684\u6CDB\u578B" aria-hidden="true">#</a> struct\u4E0ETypeScript\u4E2D\u7684\u6CDB\u578B</h3><blockquote><ol><li>\u4E0D\u5B8C\u5168\u53EF\u4EE5\u5C06Go\u8BED\u8A00\u4E2D\u7684struct\u7406\u89E3\u4E3ATypeScript\u4E2D\u7684\u6CDB\u578B\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u672C\u8D28\u548C\u7528\u6CD5\u4E0D\u540C\u3002</li><li>\u5728TypeScript\u4E2D\uFF0C\u6CDB\u578B\u662F\u4E00\u79CD\u53C2\u6570\u5316\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u901A\u7528\u7684\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u3002\u5B83\u53EF\u4EE5\u5728\u7F16\u8BD1\u65F6\u6307\u5B9A\u5B9E\u9645\u7684\u7C7B\u578B\u53C2\u6570\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7C7B\u578B\u5B89\u5168\u548C\u4EE3\u7801\u91CD\u7528\u3002</li><li>\u5728Go\u8BED\u8A00\u4E2D\uFF0Cstruct\u662F\u4E00\u79CD\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u5C01\u88C5\u4E00\u7EC4\u76F8\u5173\u7684\u6570\u636E\u3002\u5B83\u4E0D\u5177\u6709\u6CDB\u5316\u7684\u7279\u6027\uFF0C\u5373\u6BCF\u4E2Astruct\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E0D\u80FD\u7528\u6765\u5B9A\u4E49\u901A\u7528\u7684\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u3002</li><li>\u5F53\u7136\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528interface\u7C7B\u578B\u6765\u5B9E\u73B0\u7C7B\u4F3C\u4E8E\u6CDB\u578B\u7684\u6548\u679C\u3002interface\u7C7B\u578B\u53EF\u4EE5\u5B9A\u4E49\u4E00\u7EC4\u65B9\u6CD5\u96C6\u5408\uFF0C\u800C\u4E0D\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\u3002\u53EF\u4EE5\u4F7F\u7528interface{}\u7C7B\u578B\u6765\u8868\u793A\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u3002\u4F46\u662F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0ETypeScript\u4E2D\u7684\u6CDB\u578B\u8FD8\u662F\u5B58\u5728\u5F88\u5927\u5DEE\u5F02\u7684\u3002</li></ol><p>\u2014\u2014ChatGPT</p></blockquote><p><img src="https://oss.oh-undefined.com/image-20230404180628565.png" alt="image-20230404180628565"></p>`,20),c=[i];function p(o,l){return s(),a("div",null,c)}var r=n(e,[["render",p],["__file","12-struct.html.vue"]]);export{r as default};

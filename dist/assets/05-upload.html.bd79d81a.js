import{_ as c,o as i,c as l,b as s,a,w as u,d as p,e as n,r as t}from"./app.cc629c0d.js";const d={},k=p(`<h1 id="\u4E0A\u4F20\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u6587\u4EF6" aria-hidden="true">#</a> \u4E0A\u4F20\u6587\u4EF6</h1><p>\u670D\u52A1\u7AEF\u4E0A\u4F20\u6587\u4EF6\u4E5F\u662F\u8F83\u4E3A\u91CD\u8981\u7684\u4E00\u73AF\u3002Gin\u6846\u67B6\u4E2D\u4E5F\u63D0\u4F9B\u4E86\u5355\u6587\u4EF6\u4EE5\u53CA\u591A\u6587\u4EF6\u7684\u4E0A\u4F20\u529F\u80FD\u7684\u5C01\u88C5\u3002</p><h2 id="\u5355\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u5355\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u5355\u6587\u4EF6\u4E0A\u4F20</h2><p>\u5355\u6587\u4EF6\u4E0A\u4F20\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\uFF0C\u901A\u8FC7\u4F7F\u7528<code>FormFile</code>\u65B9\u6CD5\u6765\u83B7\u53D6\u6570\u636E\u8BF7\u6C42\u4E2D\u7684File\u6587\u4EF6\uFF0C\u5F53\u6CA1\u6709\u9519\u8BEF\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u4E0A\u4F20\u5230\u7684\u6587\u4EF6\u901A\u8FC7\u4F7F\u7528<code>SaveUploadedFile</code>\u7684\u65B9\u5F0F\u5C06\u6587\u4EF6\u4FDD\u5B58\u5230\u672C\u5730\u7684\u6307\u5B9A\u6587\u4EF6\u5939\u4E2D\u53BB\u3002</p><p><code>SaveUploadedFile</code>\u65B9\u6CD5\u662FGin\u6846\u67B6\u4E2D\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684\u6587\u4EF6\u4FDD\u5B58\u5230\u6307\u5B9A\u4F4D\u7F6E\u4E2D\u53BB\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file <span class="token operator">*</span>multipart<span class="token punctuation">.</span>FileHeader<span class="token punctuation">,</span> dst <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>file</code>\u53C2\u6570\u662F\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684\u6587\u4EF6\u3002\u7C7B\u578B\u662F<code>*multipart.FileHeader</code>\uFF1B<code>dst</code>\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32<code>string</code>\u7684\u5F62\u5F0F\uFF0C\u4E3A\u6587\u4EF6\u4FDD\u5B58\u7684\u76EE\u6807\u8DEF\u5F84\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">uploadHandle</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7FormFile\u7684\u65B9\u5F0F\u6765\u83B7\u53D6Form\u8868\u5355\u4E2D\u7684\u6587\u4EF6</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">FormFile</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;error&quot;</span><span class="token punctuation">:</span>   err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6709\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u8C03\u7528SaveUploadedFile\u65B9\u6CD5 \u5C06\u6587\u4EF6\u5B58\u50A8\u5230\u672C\u5730</span>
		ctx<span class="token punctuation">.</span><span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;./public/&quot;</span><span class="token operator">+</span>file<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    file<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=n("\u5F53\u7136\u5982\u679C\u60F3\u8981\u629B\u5F00Gin\u6846\u67B6\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u81EA\u5DF1\u901A\u8FC7\u539F\u751F\u7684\u529E\u6CD5\u6765\u5B9E\u73B0\u7684\u60C5\u51B5\u4E0B\u5219\u9700\u8981\u4F9D\u8D56\u4E8EGo\u4E2D\u7684"),v=n("OS"),m=n("\u6A21\u5757\u3002"),f=p(`<h2 id="\u591A\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u591A\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u591A\u6587\u4EF6\u4E0A\u4F20</h2><p>\u5355\u6587\u4EF6\u4E0A\u4F20\u5DF2\u7ECF\u80FD\u591F\u6EE1\u8DB3\u6211\u4EEC\u7EDD\u5927\u591A\u6570\u7684\u6587\u4EF6\u4E0A\u4F20\u7684\u9700\u8981\uFF0C\u751A\u81F3\u4E8E\u53EF\u4EE5\u901A\u8FC7\u5FAA\u73AF\u8C03\u7528\u5355\u6587\u4EF6\u4E0A\u4F20\u7684\u65B9\u6CD5\u6765\u6A21\u62DF\u51FA\u591A\u6587\u4EF6\u4E0A\u4F20\u7684\u64CD\u4F5C\uFF0C\u4F46\u662F\u5982\u679C\u6587\u4EF6\u6570\u91CF\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u5219\u53EF\u80FD\u56E0\u4E3A\u5FAA\u73AF\u8C03\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898\u5BFC\u81F4\u6574\u4E2A\u6D41\u7A0B\u7684\u5931\u8D25\uFF0C\u6240\u4EE5\u591A\u6587\u4EF6\u4E0A\u4F20\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u540C\u6837\u662F\u6709\u7740\u4E00\u5B9A\u7684\u9700\u6C42\u4EE5\u53CA\u5FC5\u8981\u6027\u7684\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">uploadManyFileHandle</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	form<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">MultipartForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	files <span class="token operator">:=</span> form<span class="token punctuation">.</span>File<span class="token punctuation">[</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
		ctx<span class="token punctuation">.</span><span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;./public/&quot;</span><span class="token operator">+</span>file<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    files<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u65B9\u6CD5\u64CD\u4F5C\u6240\u793A\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u65B9\u6CD5\u4E3A<code>uploadManyFileHandle</code>\u65B9\u6CD5\u3002</p><ul><li>\u5728\u65B9\u6CD5\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u901A\u8FC7\u4F7F\u7528<code>MultipartForm()</code>\u65B9\u6CD5\u6765\u63A5\u53D7\u5BA2\u6237\u7AEF\u7684<code>form-data</code>\u6570\u636E\u3002</li><li>\u968F\u540E\u901A\u8FC7\u4F7F\u7528<code>form.File[&quot;files&quot;]</code>\u65B9\u6CD5\uFF0C\u6765\u83B7\u53D6form\u4E2D\u7684\u6587\u4EF6\u3002</li><li>\u901A\u8FC7\u4F7F\u7528<code>range</code>\u6765\u5FAA\u73AF\u904D\u5386\u5207\u7247\u4E2D\u7684\u6587\u4EF6\u6570\u636E\u3002</li><li>\u5E76\u4E14\u901A\u8FC7\u4F7F\u7528<code>SaveUploadedFile</code>\u65B9\u6CD5\u6765\u5FAA\u73AF\u4FDD\u5B58\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55\u4E2D\u3002</li></ul><p>\u5BA2\u6237\u7AEF\u6A21\u62DF\u8BF7\u6C42\u7684\u64CD\u4F5C\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="https://oss.oh-undefined.com/image-20230413145328967.png" alt="image-20230413145328967"></p><p>\u4F46\u662F\u4E0A\u8FF0\u4EE3\u7801\u6CA1\u6709\u5904\u7406\u6587\u4EF6\u540D\u91CD\u590D\u7684\u95EE\u9898\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u6587\u4EF6\u91CD\u540D\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u5BFC\u81F4\u53EA\u6709\u4E00\u4E2A\u4F1A\u88AB\u4FDD\u5B58\u4E0B\u6765\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u65F6\u95F4\u6233\u3001\u968F\u673A\u6570\u6216\u8005\u7279\u5B9A\u7684\u65B9\u6CD5\u6765\u5C06\u6587\u4EF6\u91CD\u547D\u540D\u4FDD\u5B58\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">uploadManyFileHandle</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    form<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">MultipartForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    files <span class="token operator">:=</span> form<span class="token punctuation">.</span>File<span class="token punctuation">[</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
        <span class="token comment">// \u751F\u6210\u4E0D\u91CD\u590D\u7684\u6587\u4EF6\u540D</span>
        fileName <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%d_%s&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span><span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;./public/&quot;</span><span class="token operator">+</span>fileName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    files<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u6240\u793A\uFF0C\u6211\u4EEC\u901A\u8FC7\u4F7F\u7528\u65F6\u95F4\u6233\u7684\u65B9\u5F0F\u6765\u4E0E\u6587\u4EF6\u540D\u8FDB\u884C\u62FC\u63A5\u8FD9\u6837\u7684\u60C5\u51B5\u4E0B\u907F\u514D\u4E86\u4E0A\u8FF0\u6240\u8BF4\u7684\u60C5\u51B5\u3002\u4E0A\u4F20\u540E\u7684\u6587\u4EF6\u5217\u8868\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="https://oss.oh-undefined.com/image-20230413150258591.png" alt="image-20230413150258591"></p><p>\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6211\u4EEC\u80FD\u591F\u5C06\u6587\u4EF6\u6570\u636E\u4ECE\u5BA2\u6237\u7AEF\u4EE5\u63A5\u53E3\u7684\u65B9\u5F0F\u6765\u4F20\u9012\u5230\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u540E\uFF0C\u53EF\u4EE5\u9009\u62E9\u662F\u5426\u5B58\u5728\u672C\u5730\uFF0C\u6216\u8005\u5C06\u6587\u4EF6\u901A\u8FC7API\u7684\u65B9\u5F0F\u8F6C\u5B58\u5728\u4E91\u5382\u5546\u7684\u5BF9\u8C61\u5B58\u50A8\u4E2D\u53BB\u3002</p>`,12),g=n("\u4E4B\u524D\u5728\u4F7F\u7528Node\u642D\u5EFA\u4E0A\u4F20\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u4FBF\u662F\u901A\u8FC7\u63A5\u5165\u4E86"),b={href:"https://developer.qiniu.com/sdk#official-sdk",target:"_blank",rel:"noopener noreferrer"},h=n("\u4E03\u725B\u4E91"),q=n("\u7684\u65B9\u5F0F\u5C06\u6587\u4EF6\u8F6C\u5B58\u5230\u5BF9\u8C61\u5B58\u50A8\u4E2D\u53BB\uFF0C\u8FD9\u6837\u4E00\u65B9\u9762\u51CF\u5C11\u4E86\u6570\u636E\u4E22\u5931\u7684\u60C5\u51B5\uFF0C\u53E6\u4E00\u65B9\u9762\u4E5F\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u51CF\u5C11\u4E86\u670D\u52A1\u5668\u5E26\u5BBD\u7684\u538B\u529B\u3002\u5177\u4F53\u63A5\u5165\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E91\u670D\u52A1\u5668\u5382\u5546\u6240\u63D0\u4F9B\u7684\u6587\u6863\u3002");function _(x,F){const o=t("RouterLink"),e=t("ExternalLinkIcon");return i(),l("div",null,[k,s("p",null,[r,a(o,{to:"/backEndDev/pages/Golang/14-OS.html"},{default:u(()=>[v]),_:1}),m]),f,s("p",null,[g,s("a",b,[h,a(e)]),q])])}var w=c(d,[["render",_],["__file","05-upload.html.vue"]]);export{w as default};
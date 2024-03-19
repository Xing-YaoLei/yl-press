import{_ as t,o as e,c as o,b as n,a as p,d as i,e as s,r as c}from"./app.89153703.js";const u={},l=i(`<h1 id="\u6A21\u578B\u7684\u7ED1\u5B9A\u548C\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u7684\u7ED1\u5B9A\u548C\u9A8C\u8BC1" aria-hidden="true">#</a> \u6A21\u578B\u7684\u7ED1\u5B9A\u548C\u9A8C\u8BC1</h1><p>\u5728\u6211\u4EEC\u8FDB\u884C\u6570\u636E\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5728\u524D\u7AEF\u53EF\u80FD\u4F1A\u8FDB\u884C\u5B57\u6BB5\u7684\u6821\u9A8C\u4EE5\u53CA\u7EA6\u675F\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6570\u636E\u5B57\u6BB5\u7684\u7EA6\u675F\u4EE5\u53CA\u6821\u9A8C\u540E\u7AEF\u540C\u6837\u662F\u9700\u8981\u8FDB\u884C\u7684\uFF0C\u4EE5\u6B64\u6765\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027\u3002\u5728Gin\u6846\u67B6\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6A21\u578B\u7684\u7ED1\u5B9A\uFF0C\u5C06\u8BF7\u6C42\u4E3B\u4F53\u7ED1\u5B9A\u5230\u7ED3\u6784\u4F53\u4E2D\u3002Gin\u6846\u67B6\u76EE\u524D\u652F\u6301JSON\u3001XML\u3001YAML\u548C\u6807\u51C6\u8868\u5355\u503C\u7684\u7ED1\u5B9A\u3002</p><h3 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h3><p>Gin\u4E00\u5171\u63D0\u4F9B\u4E86\u4E24\u5957\u7ED1\u5B9A\u65B9\u6CD5\uFF1A</p><ul><li>Must bind <ul><li><code>MustBind</code>\u65B9\u6CD5\u7684\u4F7F\u7528\u9700\u8981\u8C28\u614E\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u76F4\u63A5\u629B\u51FApanic\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83\u3002\u6240\u4EE5\u4E00\u822C\u90FD\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u65B9\u6CD5\uFF0C<strong>\u5EFA\u8BAE\u4F7F\u7528<code>Should bind</code></strong></li><li>\u7C7B\u4F3C\u4E8E<code>ShouldBind</code>\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u53C2\u6570\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u7ED3\u6784\u4F53\u4E0A\u3002\u4E0D\u540C\u7684\u662F\uFF0C<code>MustBind</code>\u5728\u53C2\u6570\u7ED1\u5B9A\u5931\u8D25\u65F6\u4F1A\u76F4\u63A5\u629B\u51FApanic\uFF0C\u800C\u4E0D\u662F\u8FD4\u56DE\u9519\u8BEF\u5BF9\u8C61\u3002</li><li>\u4F7F\u7528<code>MustBind</code>\u65B9\u6CD5\u53EF\u4EE5\u7B80\u5316\u4EE3\u7801\uFF0C\u907F\u514D\u5728\u6BCF\u4E2A\u8BF7\u6C42\u5904\u7406\u51FD\u6570\u4E2D\u90FD\u5199\u9519\u8BEF\u68C0\u67E5\u7684\u903B\u8F91\u3002\u5982\u679C\u53C2\u6570\u7ED1\u5B9A\u5931\u8D25\uFF0C\u7A0B\u5E8F\u4F1A\u76F4\u63A5\u9000\u51FA\uFF0C\u5E76\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u3002</li></ul></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> <span class="token string">\`form:&quot;name&quot; binding:&quot;required&quot;\`</span>
    Age  <span class="token builtin">int</span>    <span class="token string">\`form:&quot;age&quot; binding:&quot;required&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    router<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/person&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> person Person
        c<span class="token punctuation">.</span><span class="token function">MustBind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>person<span class="token punctuation">)</span>

        <span class="token comment">// do something with person</span>

        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> person<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span>  person<span class="token punctuation">.</span>Age<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    router<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ShouldBind <ul><li>\u5728 Golang \u4E2D\uFF0C<code>shouldBind</code> \u662F Gin \u6846\u67B6\u4E2D\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06 HTTP \u8BF7\u6C42\u4E2D\u7684\u6570\u636E\u7ED1\u5B9A\u5230\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E2D\uFF0C\u65B9\u4FBF\u5728\u4EE3\u7801\u4E2D\u8FDB\u884C\u5904\u7406\u3002</li><li>\u5177\u4F53\u6765\u8BF4\uFF0C<code>shouldBind</code> \u65B9\u6CD5\u53EF\u4EE5\u5C06 HTTP \u8BF7\u6C42\u7684\u53C2\u6570\u3001\u8868\u5355\u6570\u636E\u3001JSON \u6570\u636E\u7B49\u7ED1\u5B9A\u5230\u4E00\u4E2A\u6307\u5B9A\u7684\u7ED3\u6784\u4F53\u4E2D\uFF0C\u5E76\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u3002</li></ul></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B</span>
<span class="token keyword">type</span> LoginForm <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	userName <span class="token builtin">string</span> <span class="token string">\`json:&quot;userName&quot;  form:&quot;userName&quot; xml:&quot;userName&quot;\`</span>
  <span class="token comment">// \u7528\u6237\u540D \u7C7B\u578B\u4E3Astring\u7C7B\u578B </span>
	password <span class="token builtin">string</span> <span class="token string">\`json:&quot;password&quot; form:&quot;password&quot; xml:&quot;userName&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">loginHandle</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> loginForm LoginForm
	<span class="token comment">//err := ctx.ShouldBindWith(&amp;loginForm, binding.Form)</span>
	err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">ShouldBindUri</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>loginForm<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728\u9519\u8BEF\uFF0C\u5219\u5C06\u9519\u8BEF\u629B\u51FA</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;error&quot;</span><span class="token punctuation">:</span>   err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5426\u5219\u7684\u60C5\u51B5\u4E0B \u5C06loginForm\u7684\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    loginForm<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7ED3\u6784\u4F53LoginForm\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u4E2A\u79C1\u6709\u5B57\u7B26\u4E32\u53D8\u91CFuserName\u4EE5\u53CApassword\uFF0C\u8FD9\u4E24\u4E2A\u53D8\u91CF\u5206\u522B\u5B9A\u4E49\u4E86\u5728<code>json</code>\u3001<code>form</code>\u3001<code>xml</code>\u4E09\u79CD\u6807\u7B7E\u6765\u6307\u5B9A\u5BF9\u5E94\u6570\u636E\u8BF7\u6C42\u683C\u5F0F\u60C5\u51B5\u4E0B\u7684\u6821\u9A8C\u540D\u79F0\u3002</p><p>\u6807\u7B7E\u4F7F\u7528\u4E86\u4E09\u4E2A\u4E0D\u540C\u7684\u952E\u540D\uFF0C\u5206\u522B\u662F <code>json</code>\u3001<code>form</code> \u548C <code>xml</code>\uFF0C\u5206\u522B\u4EE3\u8868\u4E86\u4F7F\u7528 JSON\u3001form \u8868\u5355\u548C XML \u8FDB\u884C\u5E8F\u5217\u5316\u65F6\u7684\u5B57\u6BB5\u540D\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F7F\u7528 JSON \u5E8F\u5217\u5316\u8FD9\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5219\u4F1A\u4F7F\u7528 <code>userName</code> \u4F5C\u4E3A JSON \u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u3002</p><ol><li><p><code>ShouldBind</code>\uFF1A\u7528\u4E8E\u7ED1\u5B9A\u8BF7\u6C42\u4F53\u4E2D\u7684\u6570\u636E\u5230\u7ED3\u6784\u4F53\u3002\u9002\u7528\u4E8E <code>application/json</code>\u3001<code>application/xml</code> \u7B49\u683C\u5F0F\u7684\u8BF7\u6C42\u4F53\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">ShouldBind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>loginForm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>ShouldBindQuery</code>\uFF1A\u7528\u4E8E\u7ED1\u5B9A URL \u67E5\u8BE2\u53C2\u6570\u5230\u7ED3\u6784\u4F53\u3002\u9002\u7528\u4E8E <code>?key=value</code> \u683C\u5F0F\u7684\u67E5\u8BE2\u53C2\u6570\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">ShouldBindQuery</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>loginForm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>ShouldBindUri</code>\uFF1A\u7528\u4E8E\u7ED1\u5B9A URL \u8DEF\u5F84\u53C2\u6570\u5230\u7ED3\u6784\u4F53\u3002\u9002\u7528\u4E8E <code>/user/:id</code> \u683C\u5F0F\u7684\u8DEF\u5F84\u53C2\u6570\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">ShouldBindUri</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>loginForm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>ShouldBindWith</code>\uFF1A\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u7ED1\u5B9A\u7684\u53C2\u6570\u683C\u5F0F\u548C\u7ED1\u5B9A\u89C4\u5219\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">ShouldBindWith</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>loginForm<span class="token punctuation">,</span> binding<span class="token punctuation">.</span>Form<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="\u5FC5\u586B" tabindex="-1"><a class="header-anchor" href="#\u5FC5\u586B" aria-hidden="true">#</a> \u5FC5\u586B</h3><p>\u4EE5\u4E0A\u7684\u9A8C\u8BC1\u53EA\u80FD\u9A8C\u8BC1\u5F53\u6211\u4EEC\u8F93\u5165\u4E86\u5BF9\u5E94\u7684\u503C\u540E\uFF0C\u662F\u5426\u7B26\u5408\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u9664\u4E86\u8FD9\u4E2A\u4EE5\u5916\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u5176\u4ED6\u7EA6\u675F\u7684\u6821\u9A8C\uFF0C\u4F8B\u5982\u5FC5\u586B\u9879\u3002\u6211\u4EEC\u53EA\u9700\u8981\u5728\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6700\u540E\u9762\u8DDF\u968F\u4E00\u4E2A\u952E\u4E3A<code>binding</code>\u7684\u5C5E\u6027\uFF0C\u503C\u4E3A<code>required</code>\u5373\u53EF\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>UserName <span class="token builtin">string</span> <span class="token string">\`json:&quot;userName&quot;  form:&quot;userName&quot; xml:&quot;userName&quot; binding:&quot;required&quot;\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oss.oh-undefined.com/image-20230412153159811.png" alt="image-20230412153159811"></p><p>\u5982\u679C\u6211\u4EEC\u5728\u5B9A\u4E49\u6A21\u578B\u7684\u65F6\u5019\uFF0C\u5B9A\u4E49\u4E86\u5FC5\u586B\u3002\u4F46\u662F\u5F53\u6211\u4EEC\u4F20\u9012\u7684\u53C2\u6570\u4E3A\u7A7A\uFF0C\u6216\u8005\u76F4\u63A5\u4E0D\u4F20\u9012\u67D0\u4E00\u4E2A\u503C\u7684\u65F6\u5019\u3002Gin\u6846\u67B6\u4F1A\u81EA\u52A8\u5C06\u72B6\u6001\u7801\u66F4\u6539\u4E3A400\uFF0C\u5E76\u4E14\u5C06\u9519\u8BEF\u629B\u51FA\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
    <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;error&quot;</span><span class="token punctuation">:</span>   err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
    <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    loginForm<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u54CD\u5E94\u5185\u5BB9\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Key: &#39;LoginForm.Password&#39; Error:Field validation for &#39;Password&#39; failed on the &#39;required&#39; tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219</h2>`,20),d={href:"https://www.kancloud.cn/shuangdeyu/gin_book/949427",target:"_blank",rel:"noopener noreferrer"},r=s("\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219"),k=s("\u76F8\u5BF9\u8F83\u4E3A\u7E41\u7410\uFF0C\u540E\u7EED\u6839\u636E\u5B9E\u9645\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\u6765\u8FDB\u884C\u5B8C\u5584");function v(m,g){const a=c("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",d,[r,p(a)]),k])])}var q=t(u,[["render",v],["__file","04-ShouldBind.html.vue"]]);export{q as default};
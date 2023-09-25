import{_ as o,o as t,c,b as n,a as e,e as s,d as i,r as l}from"./app.165283f2.js";const p={},d=n("h1",{id:"gin\u6846\u67B6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gin\u6846\u67B6","aria-hidden":"true"},"#"),s(" Gin\u6846\u67B6")],-1),r=n("h2",{id:"gin\u7684\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gin\u7684\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" Gin\u7684\u4ECB\u7ECD")],-1),u={href:"https://gin-gonic.com/zh-cn/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"},g=s("Gin"),m=s(" \u662F\u4E00\u4E2A\u7528 Go \u7F16\u5199\u7684 Web \u6846\u67B6\uFF0C \u662F\u4E00\u4E2A\u5FEB\u901F\u3001\u8F7B\u91CF\u7EA7\u3001\u7075\u6D3B\u548C\u6613\u4E8E\u4F7F\u7528\u7684 Web \u6846\u67B6\uFF0C\u975E\u5E38\u9002\u5408\u6784\u5EFA\u5404\u79CD\u7C7B\u578B\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u9700\u8981\u9AD8\u6027\u80FD\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u5B83\u63D0\u4F9B\u4E86\u9AD8\u6027\u80FD\u7684\u8DEF\u7531\u548C\u4E2D\u95F4\u4EF6\u529F\u80FD\uFF0C\u4F7F\u5F97\u5F00\u53D1 Web \u5E94\u7528\u7A0B\u5E8F\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u548C\u5FEB\u901F\u3002"),v=i(`<ul><li>\u5FEB\u901F\uFF1AGin \u6846\u67B6\u5177\u6709\u5353\u8D8A\u7684\u6027\u80FD\uFF0C\u5176\u901F\u5EA6\u6BD4\u5176\u4ED6\u6D41\u884C\u7684 Web \u6846\u67B6\u66F4\u5FEB\u3002</li><li>\u8F7B\u91CF\u7EA7\uFF1AGin \u6846\u67B6\u5177\u6709\u975E\u5E38\u5C0F\u7684\u5185\u5B58\u5360\u7528\u548C\u4E8C\u8FDB\u5236\u6587\u4EF6\u5927\u5C0F\uFF0C\u975E\u5E38\u9002\u5408\u6784\u5EFA\u8F7B\u91CF\u7EA7\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002</li><li>\u8DEF\u7531\uFF1AGin \u6846\u67B6\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5904\u7406\u5404\u79CD HTTP \u8BF7\u6C42\u3002</li><li>\u4E2D\u95F4\u4EF6\uFF1AGin \u6846\u67B6\u652F\u6301\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E2D\u95F4\u4EF6\u6765\u6DFB\u52A0\u5404\u79CD\u529F\u80FD\uFF0C\u4F8B\u5982\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u7F13\u5B58\u7B49\u3002</li><li>\u9519\u8BEF\u5904\u7406\uFF1AGin \u6846\u67B6\u63D0\u4F9B\u4E86\u65B9\u4FBF\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5904\u7406\u5404\u79CD\u9519\u8BEF\u60C5\u51B5\u3002</li><li>\u6A21\u677F\uFF1AGin \u6846\u67B6\u652F\u6301\u6A21\u677F\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5404\u79CD\u6A21\u677F\u5F15\u64CE\u6765\u6E32\u67D3\u89C6\u56FE\u3002</li><li>JSON \u5E8F\u5217\u5316\uFF1AGin \u6846\u67B6\u5185\u7F6E\u4E86 JSON \u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5C06\u6570\u636E\u5E8F\u5217\u5316\u4E3A JSON \u683C\u5F0F\u3002</li><li>\u6587\u4EF6\u4E0A\u4F20\uFF1AGin \u6846\u67B6\u652F\u6301\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D\u64CD\u4F5C\u3002</li><li>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\uFF1AGin \u6846\u67B6\u5141\u8BB8\u5F00\u53D1\u8005\u7F16\u5199\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\uFF0C\u4EE5\u4FBF\u6DFB\u52A0\u81EA\u5B9A\u4E49\u529F\u80FD\u3002</li></ul><h2 id="gin\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#gin\u7684\u4F7F\u7528" aria-hidden="true">#</a> Gin\u7684\u4F7F\u7528</h2><p>\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5728\u9879\u76EE\u4E2D\u4F7F\u7528Gin\u6846\u67B6\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u6211\u4EEC\u7684\u9879\u76EE\u76EE\u5F55\uFF0C\u7136\u540E\u5728\u9879\u76EE\u5185\u521D\u59CB\u5316\u3002\u901A\u8FC7\u4F7F\u7528<code>go mod init projectName</code>\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><p><img src="https://oss.oh-undefined.com/image-20230405221841352.png" alt="image-20230405221841352"></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// go.mod</span>
module <span class="token keyword">go</span><span class="token operator">-</span>WebServer

<span class="token keyword">go</span> <span class="token number">1.20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u5B8C\u6210\u540E\u6211\u4EEC\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\u4F1A\u751F\u6210\u4E00\u4E2A<code>go.mod</code>\u7684\u6587\u4EF6\u8868\u660E\u6211\u4EEC\u7684\u9879\u76EE\u5DF2\u7ECF\u521D\u59CB\u5316\u5B8C\u6210\u3002</p>`,6),h=s("\u521D\u59CB\u5316\u5B8C\u6210\u540E\u6211\u4EEC\u4FBF\u53EF\u4EE5\u6309\u7167Gin"),k={href:"https://gin-gonic.com/zh-cn/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"},b=s("\u5B98\u7F51"),_=s("\u6240\u793A\u7684\u5FEB\u901F\u6D41\u7A0B\u8FDB\u884C\u5BF9\u5E94\u6846\u67B6\u7684\u5B89\u88C5\u3002"),f=i(`<h3 id="\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u8981\u6C42" aria-hidden="true">#</a> \u8981\u6C42</h3><ul><li>Go 1.13 \u53CA\u4EE5\u4E0A\u7248\u672C</li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ol><li><p>\u4E0B\u8F7D\u5E76\u5B89\u88C5 gin\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u8FD0\u884C\u8FD9\u6761\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get -u github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5C06 gin \u5F15\u5165\u5230\u4EE3\u7801\u4E2D\uFF0C\u6211\u8FD9\u91CC\u9ED8\u8BA4\u5C31\u5148\u653E\u5728\u4E86main.go\u6587\u4EF6\u4E2D\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\u4F60\u53EF\u4EE5\u81EA\u884C\u521B\u5EFA\u4E00\u4E2A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5982\u679C\u4E0D\u4F1A\u4F7F\u7528\u7684\u60C5\u51B5\u4E0B\uFF0CGin\u6846\u67B6\u9ED8\u8BA4\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u521D\u59CB\u5316\u7684\u6A21\u677F\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6765\u62F7\u8D1D\u8FDB\u53BB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/gin-gonic/examples/master/basic/main.go <span class="token operator">&gt;</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8FD0\u884C\u9879\u76EE</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> run main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h3>`,5),x=s("\u8FD9\u91CCGin\u7684\u5B98\u7F51\u6709\u63D0\u793A\uFF0C\u5982\u679C\u4E0D\u4F1A\u7684\u7F16\u5199\u6216\u8005\u6267\u884CGo\u7684\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u7ED9\u4E86\u4E00\u4E2A\u94FE\u63A5\uFF0C\u8DF3\u7684\u662FGo\u7684"),G={href:"https://go.dev/doc/code",target:"_blank",rel:"noopener noreferrer"},q=s("\u5B98\u7F51\u{1F923}"),N=s("\u3002"),w=i(`<p>\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>example.go</code> \u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">touch</span> example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u4E66\u5199<code>example.go</code>\u6587\u4EF6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5F15\u5165Gin\u7684\u8DEF\u7531</span>
	router <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u8DEF\u7531\u7684GET\u65B9\u6CD5 \u8BBF\u95EE\u5730\u5740\u4E3Aindex </span>
	router<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span><span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u8FD4\u56DE\u7684\u662F\u4E00\u4E2AJSON\u6570\u636E</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span>gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// gin.H \u662F Gin \u6846\u67B6\u4E2D\u63D0\u4F9B\u7684\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA map \u7684\u7B80\u4FBF\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u66F4\u5FEB\u3001\u66F4\u6709\u6548\u5730\u521B\u5EFA JSON \u54CD\u5E94\u3002</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// \u8DEF\u7531\u76D1\u542C 8080\u7AEF\u53E3</span>
	router<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E, \u6267\u884C <code>go run example.go</code> \u547D\u4EE4\u6765\u8FD0\u884C\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run example.go </span>
<span class="token comment"># [GIN-debug] Listening and serving HTTP on :8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="https://oss.oh-undefined.com/image-20230405223902767.png" alt="image-20230405223902767"></p><p>\u5B8C\u4E8B\uFF01\u6C34\u4E86\u4E00\u7BC7\uFF0C\u56E0\u4E3AGo\u8BED\u8A00\u4E2D\u7684\u90E8\u5206\u57FA\u7840\u77E5\u8BC6\u8FD8\u6CA1\u6709\u641E\u660E\u767D\uFF0C\u6253\u7B97\u901A\u8FC7Web\u6846\u67B6\u5B9E\u9645\u4F7F\u7528\u4E0E\u5B66\u4E60\u57FA\u7840\u77E5\u8BC6\u540C\u6B65\u8FDB\u884C\uFF0C\u5B66\u5230\u54EA\u91CC\u4E0D\u660E\u767D\u4E86\u5C31\u7EE7\u7EED\u56DE\u53BB\u5B66\u5BF9\u5E94\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u795D\u613F\u5927\u5BB6\u53D8\u5F97\u66F4\u5F3A\u3002</p><p><img src="https://oss.oh-undefined.com/image-20230405224400360.png" alt="image-20230405224400360"></p>`,10);function y(W,S){const a=l("ExternalLinkIcon");return t(),c("div",null,[d,r,n("p",null,[n("a",u,[g,e(a)]),m]),v,n("p",null,[h,n("a",k,[b,e(a)]),_]),f,n("p",null,[x,n("a",G,[q,e(a)]),N]),w])}var J=o(p,[["render",y],["__file","01-init.html.vue"]]);export{J as default};

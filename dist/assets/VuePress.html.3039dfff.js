import{_ as r,o as d,c as u,a as s,d as e,w as a,b as n,e as o,r as c}from"./app.ec912b41.js";const p={},v=s("h1",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),n(" VuePress")],-1),m={class:"custom-container tip"},h=s("p",{class:"custom-container-title"},"\u7B80\u4ECB",-1),_=n("VuePress \u662F\u4E00\u4E2A\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),b={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},g=n("Markdown\u5728\u65B0\u7A97\u53E3\u6253\u5F00"),k=n(" \u6765\u4E66\u5199\u5185\u5BB9\uFF08\u5982\u6587\u6863\u3001\u535A\u5BA2\u7B49\uFF09\uFF0C\u7136\u540E VuePress \u4F1A\u5E2E\u52A9\u4F60\u751F\u6210\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\u6765\u5C55\u793A\u5B83\u4EEC\u3002"),f=s("p",null,"VuePress \u8BDE\u751F\u7684\u521D\u8877\u662F\u4E3A\u4E86\u652F\u6301 Vue.js \u53CA\u5176\u5B50\u9879\u76EE\u7684\u6587\u6863\u9700\u6C42\uFF0C\u4F46\u662F\u73B0\u5728\u5B83\u5DF2\u7ECF\u5728\u5E2E\u52A9\u5927\u91CF\u7528\u6237\u6784\u5EFA\u4ED6\u4EEC\u7684\u6587\u6863\u3001\u535A\u5BA2\u548C\u5176\u4ED6\u9759\u6001\u7F51\u7AD9\u3002",-1),x={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},y=n("VuePress2.x"),V={href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},j=n("VuePress1.x"),N={class:"custom-container warning"},E=s("p",{class:"custom-container-title"},"\u63D0\u9192",-1),P=n("VuePress\u63A8\u8350\u4F7F\u7528yarn\u6765\u8FDB\u884C\u5B89\u88C5\u4F9D\u8D56\u9879\u76EE\uFF0C\u5982\u679C\u4F60\u8BBE\u5907\u8FD8\u6CA1\u6709"),q={href:"http://yarnpkg.top/Installation.html",target:"_blank",rel:"noopener noreferrer"},w=n("yarn"),M=n("\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5\u5B83\u3002"),D=o(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li><strong>\u521B\u5EFA\u5E76\u4E14\u8FDB\u5165</strong>\u4E00\u4E2A\u76EE\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter <span class="token comment"># \u521B\u5EFA\u9879\u76EE\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> vuepress-starter <span class="token comment"># \u8FDB\u5165\u8FD9\u4E2A\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FDB\u884C\u9879\u76EE\u7684<strong>\u521D\u59CB\u5316</strong></li></ul>`,4),A=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"git"),n(` init
`),s("span",{class:"token function"},"yarn"),n(` init
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),R=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"git"),n(` init
`),s("span",{class:"token function"},"npm"),n(` init
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("ul",null,[s("li",null,"\u5B89\u88C5VuePress\u7684\u672C\u5730\u4F9D\u8D56")],-1),I=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` -D vuepress@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),z=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(` -D vuepress@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),G=s("ul",null,[s("li",null,"\u521D\u59CB\u5316\u5B8C\u6210\u540E\u4FEE\u6539package.json\u6587\u4EF6\u4E2D\u7684script\u914D\u7F6E\u9879")],-1),Y=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"scripts"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"docs:dev"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vuepress dev docs"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"docs:build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vuepress build docs"'),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"scripts"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"dev"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vuepress dev docs"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vuepress build docs"'),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=o(`<ul><li>\u5C06\u9ED8\u8BA4\u7684\u4E34\u65F6\u76EE\u5F55\u548C\u7F13\u5B58\u76EE\u5F55\u6DFB\u52A0\u5230 <code>.gitignore</code> \u6587\u4EF6\u4E2D,\u9632\u6B62git,\u4EA4\u65F6\u63D0\u4EA4\u7F13\u5B58\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2Adocs\u7684\u76EE\u5F55,\u5E76\u4E14\u5C06\u81EA\u5DF1\u63D0\u524D\u5199\u597D\u7684markdown\u6587\u6863\u653E\u5165\u5176\u4E2D\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9</li></ul>`,5),O=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(" docs:dev "),s("span",{class:"token comment"},"# \u5B98\u65B9\u5B8C\u6574\u7248"),n(`
`),s("span",{class:"token function"},"yarn"),n(" dev "),s("span",{class:"token comment"},"# \u7B80\u5199\u7248"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),H=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(" docs:dev "),s("span",{class:"token comment"},"# \u5B98\u65B9\u5B8C\u6574\u7248"),n(`
`),s("span",{class:"token function"},"npm"),n(" run dev "),s("span",{class:"token comment"},"# \u7B80\u5199\u7248"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=n("VuePress \u4F1A\u5728 "),T={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},F=n("http://localhost:8080"),J=n(" \u542F\u52A8\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002\u5F53\u4F60\u4FEE\u6539\u4F60\u7684 Markdown \u6587\u4EF6\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002"),K=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vite v2.9.15 dev server running at:
<span class="token operator">&gt;</span> Local:    http://localhost:8080/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u76EE\u5F55\u7ED3\u6784</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 README.md
\u2502   \u251C\u2500\u2500 docs
\u2502   \u2502   \u251C\u2500\u2500 README.md
\u2502   \u2502   \u2514\u2500\u2500 pages
\u2502   \u2514\u2500\u2500 document
\u2502       \u251C\u2500\u2500 introduction
\u2502       \u2514\u2500\u2500 tips
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Q=n("\u66F4\u591A\u914D\u7F6E\u8BE6\u60C5\u53EF\u53C2\u8003"),U={href:"https://v2.vuepress.vuejs.org/zh/guide/configuration.html",target:"_blank",rel:"noopener noreferrer"},W=n("\u5B98\u65B9\u6587\u6863"),X=s("li",null,[s("p",null,[n("\u53EF\u80FD\u6211\u4EEC\u6709\u4E9B\u65F6\u5019\u4F1A\u9700\u8981\u6839\u636E\u5177\u4F53\u7684\u5F00\u53D1\u73AF\u5883\u6216\u8005\u751F\u4EA7\u73AF\u5883\u6765\u8FDB\u884C\u9879\u76EE\u7684\u5F00\u53D1\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u63D2\u4EF6"),s("em",null,"cross-env"),n("\u6765\u8FDB\u884C\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u7684\u914D\u7F6E")])],-1),Z=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> cross-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5\u5B8C\u6210\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6Epackage.json\u6587\u4EF6\u6765\u8FDB\u884C\u73AF\u5883\u53D8\u91CF\u7684\u66F4\u6539</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=&#39;/&#39; vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=&#39;/yl-press/&#39; vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>cross-env NODE_ENV=&#39;/yl-press/&#39; \u5F15\u53F7\u5185\u7684\u4E3A\u81EA\u5DF1\u8981\u90E8\u7F72\u7684\u9879\u76EE\u4ED3\u5E93\u7684\u540D\u5B57</li></ul></div><p>\u200B</p>`,5);function $(ss,ns){const t=c("ExternalLinkIcon"),l=c("CodeGroupItem"),i=c("CodeGroup");return d(),u("div",null,[v,s("div",m,[h,s("p",null,[_,s("a",b,[g,e(t)]),k]),f,s("ul",null,[s("li",null,[s("a",x,[y,e(t)])]),s("li",null,[s("a",V,[j,e(t)])])])]),s("div",N,[E,s("p",null,[P,s("a",q,[w,e(t)]),M])]),D,e(i,null,{default:a(()=>[e(l,{title:"YARN"},{default:a(()=>[A]),_:1}),e(l,{title:"NPM"},{default:a(()=>[R]),_:1})]),_:1}),C,e(i,null,{default:a(()=>[e(l,{title:"YARN"},{default:a(()=>[I]),_:1}),e(l,{title:"NPM"},{default:a(()=>[z]),_:1})]),_:1}),G,e(i,null,{default:a(()=>[e(l,{title:"\u5B98\u65B9"},{default:a(()=>[Y]),_:1}),e(l,{title:"\u7B80\u5199"},{default:a(()=>[B]),_:1})]),_:1}),L,e(i,null,{default:a(()=>[e(l,{title:"YARN"},{default:a(()=>[O]),_:1}),e(l,{title:"YARN"},{default:a(()=>[H]),_:1})]),_:1}),s("ul",null,[s("li",null,[S,s("a",T,[F,e(t)]),J])]),K,s("ul",null,[s("li",null,[s("p",null,[Q,s("a",U,[W,e(t)])])]),X]),Z])}var as=r(p,[["render",$],["__file","VuePress.html.vue"]]);export{as as default};

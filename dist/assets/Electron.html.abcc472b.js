import{_ as r,o as i,c as l,b as t,a as s,d as n,e,r as d}from"./app.89153703.js";const c={},o=n('<h1 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> Electron</h1><h2 id="\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5E8F" aria-hidden="true">#</a> \u5E8F</h2><p>\u6700\u8FD1\u516C\u53F8\u5728\u7528Electron\u5F00\u53D1\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5176\u4E2D\u4E5F\u662F\u8E29\u4E86\u4E0D\u5C11\u5751\uFF0C\u4E2D\u95F4\u4E5F\u627E\u4E86\u4E0D\u5C11\u670B\u53CB\u5E2E\u5FD9\u6765\u89E3\u51B3\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\uFF0C\u4E5F\u4E0D\u77E5\u9053Electron\u8FC7\u4E86\u8FD9\u4E48\u4E45\u4E86\u4E3A\u4EC0\u4E48\u8FD8\u662F\u4F1A\u6709\u597D\u591A\u5404\u79CD\u5404\u6837\u7684\u5751\u3002\u7A0D\u5FAE\u8FDB\u884C\u4E00\u90E8\u5206\u7684\u603B\u7ED3\u8BB0\u5F55\u4E00\u4E0B\u672C\u6B21\u5F00\u53D1\u5FC3\u5F97\u5427\u3002</p><h2 id="\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u6808" aria-hidden="true">#</a> \u6280\u672F\u6808</h2>',4),m=e("\u8FD9\u6B21\u7528\u5230\u7684\u6280\u672F\u6808\u5982\u4E0B\u6240\u793A\u57FA\u672C\u90FD\u662F\u524D\u7AEF\u5E38\u7528\u7684\u5185\u5BB9\u3002\u56E0\u4E3A\u524D\u7AEF\u9879\u76EE\u4E00\u76F4\u7528\u7684\u662FVue + Vite\u6240\u4EE5\u5728\u8FD9\u4E2A\u9879\u76EE\u5185\u4E5F\u662F\u4F7F\u7528\u4E86Github\u4E0A\u9762\u5F00\u6E90\u7684\u6846\u67B6\u6765\u5FEB\u901F\u642D\u5EFA\u7684[Electron-Vite)"),p={href:"https://electron-vite.org/",target:"_blank",rel:"noopener noreferrer"},h=e("\u3002"),u=n(`<table><thead><tr><th style="text-align:center;">\u6280\u672F\u6808</th><th style="text-align:center;">\u7248\u672C\u53F7</th></tr></thead><tbody><tr><td style="text-align:center;"><em>Vuejs</em></td><td style="text-align:center;">^3.4.15</td></tr><tr><td style="text-align:center;"><em>Vite</em></td><td style="text-align:center;">^5.0.12</td></tr><tr><td style="text-align:center;"><em>electron</em></td><td style="text-align:center;">^28.2.0</td></tr><tr><td style="text-align:center;"><em>electron-builder</em></td><td style="text-align:center;">^24.9.1</td></tr><tr><td style="text-align:center;"><em>electron-vite</em></td><td style="text-align:center;">^2.0.0</td></tr><tr><td style="text-align:center;"><em>prisma</em></td><td style="text-align:center;">^5.10.2</td></tr><tr><td style="text-align:center;"><em>@prisma/client</em></td><td style="text-align:center;">^5.10.2</td></tr><tr><td style="text-align:center;"><em>vue-router</em></td><td style="text-align:center;">^4.2.5</td></tr></tbody></table><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><p>\u4EE5\u4E0B\u4E3A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u4EE5\u53CA\u5177\u4F53\u7528\u9014</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>- database   <span class="token comment"># \u6B63\u5F0F\u73AF\u5883\u6570\u636E\u5E93\u5B58\u653E\u4F4D\u7F6E</span>
- prisma     <span class="token comment"># prisma\u6587\u4EF6\u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u5F00\u53D1\u6570\u636E\u5E93\u4EE5\u53CAprisma\u6A21\u578B\u6587\u4EF6</span>
- resources  <span class="token comment"># \u9879\u76EE\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B58\u653E\u9879\u76EEicon\u7B49\u5185\u5BB9</span>
- src        <span class="token comment"># \u9879\u76EE\u8D44\u6E90\u6587\u4EF6 </span>
	- main		 <span class="token comment"># \u4E3B\u8FDB\u7A0B\u76EE\u5F55\u6587\u4EF6</span>
	- preload  <span class="token comment"># \u7528\u4E8E\u5B58\u653E\u9884\u52A0\u8F7D\u811A\u672C \u80FD\u591F\u5728\u6E32\u67D3\u8FDB\u7A0B\uFF08web\u9875\u9762\uFF09\u548C\u4E3B\u8FDB\u7A0B\u4E4B\u95F4\u63D0\u4F9B\u4E00\u4E2A\u5B89\u5168\u7684\u6865\u6881 \u907F\u514D\u4E3B\u8FDB\u7A0B\u65B9\u6CD5\u76F4\u63A5\u66B4\u9732\u5728\u6E32\u67D3\u8FDB\u7A0B\u4E2D</span>
	- renderer <span class="token comment"># \u6E32\u67D3\u8FDB\u7A0B\uFF0C\u6211\u4EEC\u6240\u719F\u77E5\u7684\u524D\u7AEF\u9875\u9762\u6570\u636E\u5B58\u653E\u5728\u6B64\u5904</span>
- <span class="token punctuation">..</span>.
- electron-builder.yml <span class="token comment"># 	electron\u7684\u6253\u5305\u914D\u7F6E\u6587\u4EF6 \u5728\u9879\u76EE\u8FDB\u884C\u6253\u5305\u64CD\u4F5C\u7684\u65F6\u5019\u4F1A\u8BFB\u53D6\u6B64\u6587\u4EF6\u6765\u8F7D\u5165\u6253\u5305\u8BBE\u7F6E</span>
- <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h2><h3 id="prisma\u6253\u5305\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#prisma\u6253\u5305\u95EE\u9898" aria-hidden="true">#</a> Prisma\u6253\u5305\u95EE\u9898</h3>`,6),v=e("\u5728\u9879\u76EE\u4E2D\u56E0\u4E3A\u9700\u8981\u4F7F\u7528SQLite\u6570\u636E\u5E93\uFF0C\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\u4F7F\u7528ORM\u6846\u67B6\u662F\u80FD\u591F\u5FEB\u901F\u5F00\u53D1\u5E76\u4E14\u51CF\u5C11\u5B66\u4E60\u6210\u672C\u7684\u4E00\u9879\u6280\u672F\u3002\u6B64\u5904\u6211\u4F7F\u7528\u7684\u662FPrisma\u6765\u4F5C\u4E3A\u6211\u4E3B\u8FDB\u7A0B\u7684ORM\u6846\u67B6\u7684\u3002\u4F46\u662FPrisma\u5728Electron\u6253\u5305\u5B89\u88C5\u7684\u65F6\u5019\u4F1A"),_=t("code",null,"can not find module .prisma/client/index",-1),b=e("\u6587\u4EF6\u5BFC\u81F4\u65E0\u6CD5\u8FD0\u884CPrisma\u7684\u67E5\u8BE2\u7B49\u529F\u80FD\u3002\u540E\u6765\u662F\u901A\u8FC7\u670B\u53CB\u5206\u4EAB\u7684\u535A\u5BA2\u6587\u7AE0\u4E2D\u627E\u5230\u4E86\u53E6\u4E00\u4E2A\u9E3D\u4EEC\u513F\u7684"),x={href:"https://term-inator.github.io/2023/07/23/use-prisma-with-electron/",target:"_blank",rel:"noopener noreferrer"},g=e("\u89E3\u51B3\u65B9\u6848"),y=e("\u3002"),k=n(`<p>\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6CD5\u628A .prisma \u548C @prisma/client \u5F53\u4F5C extraResources \u6253\u5305\u8FDB\u53BB</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># electron-builder.yml</span>
<span class="token key atrule">extraResources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;node_modules/.prisma/**/*&#39;</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;node_modules/@prisma/client/**/*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\u867D\u7136\u6211\u8FD9\u6837\u914D\u7F6E\u4E86\u8FD8\u662F\u6709\u51E0\u7387\u4F1A\u51FA\u73B0\u540C\u6837\u7684\u95EE\u9898\uFF0C\u540E\u6765\u67E5\u4E86\u4E00\u4E0B\u5728\u5B89\u88C5\u5B8C\u6BD5\u4F9D\u8D56\u540E\uFF0C\u9700\u8981\u8FD0\u884C\u4E00\u4E0B<code>npx prisma generate</code>\u6765\u751F\u6210<code>prisma</code>\u7684\u6587\u4EF6\u624D\u884C\u3002</p>`,3);function f(E,V){const a=d("ExternalLinkIcon");return i(),l("div",null,[o,t("p",null,[m,t("a",p,[s(a)]),h]),u,t("p",null,[v,_,b,t("a",x,[g,s(a)]),y]),k])}var P=r(c,[["render",f],["__file","Electron.html.vue"]]);export{P as default};

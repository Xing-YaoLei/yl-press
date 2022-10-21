import{_ as e,o as t,c as p,a as n,d as o,b as s,e as c,r as l}from"./app.c3f42524.js";const i={},r=n("h1",{id:"_7-\u6574\u6570\u53CD\u8F6C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-\u6574\u6570\u53CD\u8F6C","aria-hidden":"true"},"#"),s(" 7. \u6574\u6570\u53CD\u8F6C")],-1),u=s("\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 x \uFF0C\u8FD4\u56DE\u5C06 x \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C\u3002"),d={href:"https://leetcode.cn/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>\u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4 [\u2212231, 231 \u2212 1] \uFF0C\u5C31\u8FD4\u56DE 0\u3002</p><p>\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = 123
\u8F93\u51FA\uFF1A321
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = -123
\u8F93\u51FA\uFF1A-321
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = 120
\u8F93\u51FA\uFF1A21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = 0
\u8F93\u51FA\uFF1A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li><code>-231 &lt;= x &lt;= 231 - 1</code></li></ul><p>\u9898\u89E3\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token operator">-</span>x
        flag <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>flag <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result <span class="token operator">&gt;</span> <span class="token number">2147483647</span> <span class="token operator">||</span> result <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">2147483647</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(m,b){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[u,n("a",d,[o(a)])]),k])}var g=e(i,[["render",v],["__file","2-\u6574\u6570\u53CD\u8F6C.html.vue"]]);export{g as default};

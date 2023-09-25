import{_ as e,o as a,c as n,d as s}from"./app.165283f2.js";const t={},d=s(`<h1 id="html-css-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#html-css-\u9762\u8BD5\u9898" aria-hidden="true">#</a> HTML &amp; CSS \u9762\u8BD5\u9898</h1><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><h3 id="\u5E38\u89C1\u7684\u884C\u5185\u5143\u7D20\u548C\u5757\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u884C\u5185\u5143\u7D20\u548C\u5757\u5143\u7D20" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u884C\u5185\u5143\u7D20\u548C\u5757\u5143\u7D20</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// \u884C\u5185\u5143\u7D20
em\u3001i\u3001span\u3001b\u3001strong
// \u5757\u5143\u7D20
div\u3001h1-h6\u3001ul\u3001ol\u3001dl\u3001header\u3001footer\u3001section\u3001aside\u3001main\u3001artcile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9875\u9762\u5143\u7D20position\u5B9A\u4F4D\u7684\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5143\u7D20position\u5B9A\u4F4D\u7684\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u9875\u9762\u5143\u7D20Position\u5B9A\u4F4D\u7684\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B\uFF1F</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u76F8\u5BF9\u5B9A\u4F4D\uFF1A\u76F8\u5BF9\u5B9A\u4F4D\u7684\u53C2\u7167\u7269\u662F\u81EA\u8EAB\u539F\u672C\u7684\u4F4D\u7F6E */</span>
<span class="token property">position</span><span class="token punctuation">:</span>relative

<span class="token comment">/* \u7EDD\u5BF9\u5B9A\u4F4D\uFF1A\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u53C2\u7167\u7269\u662F\u62E5\u6709\u5B9A\u4F4D\u5C5E\u6027\u7684\u7236\u5143\u7D20\uFF1B
   \u5728\u7236\u5143\u7D20\u6CA1\u6709\u5B9A\u4F4D\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5219\u4F1A\u5411\u5916\u90E8\u5143\u7D20\u67E5\u627E\u6700\u7EC8\u53C2\u7167\u7269\u4E3A\u6D4F\u89C8\u5668
*/</span>
<span class="token property">position</span><span class="token punctuation">:</span>absolute

<span class="token comment">/* \u56FA\u5B9A\u5B9A\u4F4D\uFF1A\u56FA\u5B9A\u5B9A\u4F4D\u53C2\u7167\u7269\u662F\u6D4F\u89C8\u5668\u53EF\u89C6\u7A97\u53E3 */</span>
<span class="token property">position</span><span class="token punctuation">:</span>fixed

<span class="token comment">/* \u9ECF\u6027\u5B9A\u4F4D\uFF1A\u9ECF\u6027\u5B9A\u4F4D\u4F1A\u81EA\u52A8\u5438\u9644\u5728\u53EF\u4EE5\u6EDA\u52A8\u7684\u7236\u5143\u7D20\u9876\u90E8 */</span>
<span class="token property">position</span><span class="token punctuation">:</span>sticky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728\u5F15\u5165css\u6837\u5F0F\u7684\u65F6\u5019\u90FD\u6709\u54EA\u4E9B\u5F15\u5165\u65B9\u5F0F-\u4ED6\u4EEC\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5728\u5F15\u5165css\u6837\u5F0F\u7684\u65F6\u5019\u90FD\u6709\u54EA\u4E9B\u5F15\u5165\u65B9\u5F0F-\u4ED6\u4EEC\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u5728\u5F15\u5165CSS\u6837\u5F0F\u7684\u65F6\u5019\u90FD\u6709\u54EA\u4E9B\u5F15\u5165\u65B9\u5F0F\uFF0C\u4ED6\u4EEC\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><table><thead><tr><th></th><th>link</th><th>@import</th></tr></thead><tbody><tr><td>\u5173\u7CFB</td><td>HTML\u63D0\u4F9B\u7684\u6807\u7B7E</td><td>CSS\u8BED\u6CD5\u89C4\u5219</td></tr><tr><td>\u52A0\u8F7D\u987A\u5E8F</td><td>\u6807\u7B7E\u52A0\u8F7D\u7684\u540C\u65F6CSS\u8FDB\u884C\u52A0\u8F7D</td><td>\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u540E\u8FDB\u884C\u52A0\u8F7D</td></tr><tr><td>\u517C\u5BB9</td><td>HTML\u6807\u51C6\u6807\u7B7E\u65E0\u517C\u5BB9\u95EE\u9898</td><td>CSS2.1\u8BED\u6CD5 IE5+\u53EF\u4EE5\u4F7F\u7528</td></tr></tbody></table><hr><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><h3 id="\u7B80\u8FF0\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u8FF0\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u7684\u533A\u522B" aria-hidden="true">#</a> \u7B80\u8FF0\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u7684\u533A\u522B</h3><table><thead><tr><th></th><th>\u4F5C\u7528</th><th>\u8868\u73B0\u5F62\u5F0F</th></tr></thead><tbody><tr><td>\u4F2A\u7C7B\u9009\u62E9\u5668</td><td>\u4F5C\u7528\u4E8E\u88AB\u9009\u4E2D\u7684\u5143\u7D20</td><td>: (\u4F8B\u5982<code>:hover</code>)</td></tr><tr><td>\u4F2A\u5143\u7D20\u9009\u62E9\u5668</td><td>\u521B\u5EFA\u4E00\u4E2A\u53EA\u5B58\u5728\u4E8ECSS\u4E2D\u7684\u5143\u7D20</td><td>::(\u4F8B\u5982<code>::after</code>) \u4E5F\u53EF\u4F7F\u7528\u5355\u5192\u53F7CSS3\u5355\u72EC\u5212\u5206\u51FA\u6765</td></tr></tbody></table>`,12),i=[d];function r(l,c){return a(),n("div",null,i)}var h=e(t,[["render",r],["__file","HTML.html.vue"]]);export{h as default};

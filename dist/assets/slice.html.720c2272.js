import{_ as n,o as s,c as a,d as t}from"./app.f4b4efec.js";const e={},p=t(`<h1 id="go\u7684\u6570\u7EC4\u4EE5\u53CA\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#go\u7684\u6570\u7EC4\u4EE5\u53CA\u5207\u7247" aria-hidden="true">#</a> Go\u7684\u6570\u7EC4\u4EE5\u53CA\u5207\u7247</h1><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><h3 id="\u6570\u7EC4\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u521B\u5EFA" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u521B\u5EFA</h3><p>\u5728Go\u4E2D\uFF0C\u5982\u679C\u60F3\u8981\u7B80\u5355\u7406\u89E3\uFF0C\u53EF\u4EE5\u5C06\u6570\u7EC4\u4EE5\u53CA\u5207\u7247\u7406\u89E3\u4E3A\u540C\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u5219\u662F\uFF0C\u6570\u7EC4\u662F\u56FA\u5B9A\u957F\u5EA6\u7684\u3001\u800C\u5207\u7247\u5219\u662F\u52A8\u6001\u957F\u5EA6\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u9996\u5148\u4E86\u89E3\u4E00\u4E0B\u6570\u7EC4\u7684\u57FA\u672C\u4F7F\u7528\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> arrayName <span class="token punctuation">[</span>arrayLength<span class="token punctuation">]</span>dataType  <span class="token comment">// \u521B\u5EFA\u6570\u7EC4\u7684\u65B9\u6CD5</span>
<span class="token comment">// \u4EE5\u4E0B\u4E3A\u5B9E\u9645\u521B\u5EFA\u793A\u4F8B</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> strArray <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A3\u7684\u5B57\u7B26\u4E32\u6570\u7EC4 \u4F46\u6CA1\u6709\u8D4B\u503C</span>
  <span class="token keyword">var</span> intArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A5\uFF0C\u4E14\u503C\u4E3A1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\u7684\u6574\u578B\u6570\u7EC4</span>
	customArray <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u957F\u5EA6\u4E3A4\uFF0C\u4E14\u524D\u4E09\u4E2A\u503C\u4E3A1\uFF0C2\uFF0C3</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;strArray=%v\\n&quot;</span><span class="token punctuation">,</span> strArray<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intArray=%v\\n&quot;</span><span class="token punctuation">,</span> intArray<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;customArray=%v\\n&quot;</span><span class="token punctuation">,</span> customArray<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run index.go                                                                             </span>
<span class="token comment"># strArray=[  ]</span>
<span class="token comment"># intArray=[1 2 3 4 5]</span>
<span class="token comment"># customArray=[1 2 3 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u63D0\u4F9B\u4E86\u4E09\u79CD\u521B\u5EFA\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u7B2C\u4E00\u79CD\u4E3A\u666E\u901A\u7684\u521B\u5EFA\u65B9\u6CD5\uFF0C\u7B2C\u4E8C\u79CD\u4E3A\u521B\u5EFA\u5E76\u4E14\u8D4B\u503C\u7684\u521B\u5EFA\u65B9\u6CD5\uFF0C\u7B2C\u4E09\u79CD\u5219\u662F\u901A\u8FC7\u4F7F\u7528\u77ED\u53E5\u7684\u65B9\u5F0F\u7701\u7565\u4E86<code>var</code>\u5173\u952E\u5B57\u6765\u8FDB\u884C\u6570\u7EC4\u7684\u521B\u5EFA\u3002</p><p>\u5728\u521B\u5EFA\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u9009\u62E9\u7ED9\u6570\u7EC4<strong>\u8BBE\u7F6E\u9ED8\u8BA4\u503C</strong>\u6216\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5219\u9700\u8981\u5728\u5B9A\u4E49\u7C7B\u578B\u540E\u8FFD\u52A0\u4F7F\u7528<code>{}</code>\u6765\u4E3A\u6570\u7EC4\u6DFB\u52A0\u7B26\u5408\u6761\u4EF6\u7684\u503C\u3002\u5982\u679C<strong>\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u503C</strong>\uFF0CGo\u4F1A\u6839\u636E\u6570\u636E\u7C7B\u578B\u6765<strong>\u81EA\u52A8\u586B\u5145</strong>\u5BF9\u5E94\u7684\u5185\u5BB9\uFF08\u4F8B\u5982Int\u7C7B\u578B\u4F1A\u81EA\u52A8\u586B\u51450\uFF0Cstring\u7C7B\u578B\u6570\u7EC4\u4F1A\u81EA\u52A8\u586B\u5145\u7A7A\u5B57\u7B26\u4E32\uFF09</p><h3 id="\u6570\u7EC4\u7684\u5FAA\u73AF\u904D\u5386\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u5FAA\u73AF\u904D\u5386\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u5FAA\u73AF\u904D\u5386\u7684\u65B9\u5F0F</h3><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h4><p>\u5982\u679C\u60F3\u8981\u8BBF\u95EE\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528for\u5FAA\u73AF\u6765\u5B8C\u6210\u8FD9\u4E00\u64CD\u4F5C\uFF0C\u5177\u4F53\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> intArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>
  <span class="token comment">// len\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5230\u6570\u7EC4\u5BF9\u5E94\u7684\u957F\u5EA6\uFF0C\u540CJs\u4E2D\u7684length\u76F8\u540C</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>intArray<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h4><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7<code>range</code>\u5173\u952E\u5B57\u6765\u8FDB\u884C\u5FAA\u73AF\u904D\u5386\u3002\u5176\u4E2Di\uFF08index\uFF09\u662F\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\uFF0C\u800Cv\uFF08value\uFF09\u5219\u662F\u7D22\u5F15\u6240\u5BF9\u5E94\u7684\u503C\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>	<span class="token keyword">for</span> index<span class="token punctuation">,</span>value <span class="token operator">:=</span> <span class="token keyword">range</span> intArray <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;item=&quot;</span><span class="token punctuation">,</span>index<span class="token punctuation">,</span><span class="token string">&quot;value = &quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="range-\u7701\u7565index\u6216\u8005value" tabindex="-1"><a class="header-anchor" href="#range-\u7701\u7565index\u6216\u8005value" aria-hidden="true">#</a> Range(\u7701\u7565index\u6216\u8005value)</h4><p>\u5728\u4F7F\u7528range\u7684\u65F6\u5019\uFF0C\u5076\u5C14\u6709\u4E9B\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u80FD\u53EA\u9700\u8981\u5176\u4E2D\u7684index\u7D22\u5F15\u6216\u8005\u5176\u4E2D\u7684value\u503C\uFF0C\u90A3\u4E48\u6211\u4EEC\u5219\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\u3002\uFF08<code>_</code>\u533F\u540D\u53D8\u91CF\uFF0C\u6211\u4EEC\u5728\u5305\u5F15\u5165\u7684\u65F6\u5019\u4E5F\u6709\u7528\u5230\u8FC7\u8FD9\u4E2A<code>_</code>\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5982\u679C\u6211\u4EEC\u9700\u8981\u7701\u7565\u4E0B\u6807\uFF0C\u53EA\u62FF\u6570\u7EC4\u4E2D\u7684\u503C\u53EF\u4EE5\u4F7F\u7528\u533F\u540D\u53D8\u91CF\u6765\u63A5\u53D7\u7D22\u5F15</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> intArray<span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;item=&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5982\u679C\u6211\u4EEC\u9700\u8981\u7701\u7565\u503C\uFF0C\u53EA\u662F\u62FF\u4E0B\u6807\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7701\u7565\u6389v\u8FD9\u4E00\u53D8\u91CF</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> intArray<span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;item=&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\u4E2D\uFF0C<code>v</code>\u548C<code>i</code>\u53EA\u662F\u4E00\u4E2A\u53D8\u91CF\u7684\u547D\u540D\u800C\u5DF2\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u573A\u666F\u6216\u8005\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4E60\u60EF\u4F7F\u7528\u4EFB\u4F55\u7684\u53D8\u91CF\u540D\u6765\u63A5\u6536\u3002</p><h3 id="\u4FEE\u6539\u6570\u7EC4\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6570\u7EC4\u7684\u503C" aria-hidden="true">#</a> \u4FEE\u6539\u6570\u7EC4\u7684\u503C</h3><p>\u5047\u5982\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\u6765\u8FDB\u884C\u6570\u7EC4\u6570\u636E\u7684\u4FEE\u6539\u3002\u6BD4\u5982\u4FEE\u6539\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u9879\u7684\u503C\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>changeArray</code>\u7684\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\u957F\u5EA6\u4E3A5\u7684\u6574\u578B\u6570\u7EC4\uFF0C\u5E76\u4E14\u5728\u65B9\u6CD5\u4E2D\u4FEE\u6539\u4E86\u6570\u7EC4\u4E2D\u7684\u7B2C0\u9879\u7684\u503C\uFF0C\u5C06\u5176\u4FEE\u6539\u4E3A\u4E86100\u3002\u5177\u4F53\u4F8B\u5B50\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u6570\u7EC4\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">changeArray</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E3B\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> intArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token function">changeArray</span><span class="token punctuation">(</span>intArray<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intArray<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA\u7ED3\u679C\u4F1A\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run index.go                                                                            </span>
<span class="token comment"># [1 2 3 4 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u6240\u793A\uFF0C\u6570\u7EC4\u7684\u503C\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u4E3A\u5728\u6570\u7EC4\u4E2D\u7684\u64CD\u4F5C\u4E2D\uFF0C\u5C5E\u4E8E<strong>\u503C\u4F20\u9012</strong>\uFF0C\u53EA\u662F\u5C06<strong>\u6570\u7EC4\u4E2D\u7684\u503C\u4F20\u9012\u7ED9\u4E86\u65B9\u6CD5</strong>\uFF0C\u800C\u65B9\u6CD5\u5219\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u6765\u63A5\u53D7\uFF0C\u4E24\u4E2A\u6570\u7EC4\u6240\u5B58\u50A8\u7684<strong>\u5B58\u50A8\u7A7A\u95F4\u4E0D\u662F\u540C\u4E00\u4E2A\u7A7A\u95F4</strong>\u3002\u6240\u4EE5\u6CA1\u6709\u529E\u6CD5\u4FEE\u6539\u539F\u6570\u7EC4\u3002</p><h2 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h2><div class="custom-container tip"><p class="custom-container-title">\u5207\u7247\u4E0E\u6570\u7EC4</p><p>\u5207\u7247\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A<strong>\u6307\u5411\u6570\u7EC4\u7684\u6307\u9488</strong>\uFF0C\u52A0\u4E0A\u4E00\u4E2A<strong>\u957F\u5EA6</strong>\u548C<strong>\u5BB9\u91CF\uFF08capacity\uFF09<strong>\u4FE1\u606F\u3002\u5BB9\u91CF\u6307\u5B9A\u4E86\u8BE5\u5207\u7247\u53EF\u4EE5\u5BB9\u7EB3\u7684\u5143\u7D20\u7684\u6700\u5927\u6570\u91CF\uFF0C\u5B83\u53EF\u80FD\u5927\u4E8E\u6216\u7B49\u4E8E\u957F\u5EA6\u3002\u5F53\u5207\u7247</strong>\u9700\u8981\u6269\u5C55\u65F6</strong>\uFF0C\u5B83\u4F1A<strong>\u5206\u914D\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4</strong>\uFF0C\u5C06\u539F\u6765\u7684\u5143\u7D20\u590D\u5236\u5230\u65B0\u7684\u6570\u7EC4\u4E2D\uFF0C\u5E76\u66F4\u65B0\u5207\u7247\u7684\u6307\u9488\u3001\u957F\u5EA6\u548C\u5BB9\u91CF\u3002</p><p>\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5C06\u5207\u7247\u770B\u4F5C\u662F\u4E00\u4E2A<strong>\u52A8\u6001\u957F\u5EA6\u7684\u6570\u7EC4\u7684\u7A97\u53E3</strong>\uFF0C\u5B83\u63D0\u4F9B\u4E86\u5BF9<strong>\u5E95\u5C42\u6570\u7EC4\u7684\u8BBF\u95EE\u548C\u64CD\u4F5C</strong>\u3002</p><p>\u867D\u7136\u6570\u7EC4\u548C\u5207\u7247\u5728\u67D0\u4E9B\u65B9\u9762\u7C7B\u4F3C\uFF0C\u4F46\u5B83\u4EEC\u5728\u4F7F\u7528\u548C\u8BED\u6CD5\u4E0A\u6709\u5F88\u5927\u7684\u4E0D\u540C\u3002\u4F8B\u5982\uFF0C<strong>\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u56FA\u5B9A\u7684</strong>\uFF0C<strong>\u4E0D\u80FD\u66F4\u6539</strong>\uFF0C\u800C<strong>\u5207\u7247\u7684\u957F\u5EA6\u53EF\u4EE5\u968F\u65F6\u66F4\u6539</strong>\u3002<strong>\u6570\u7EC4\u7684\u58F0\u660E\u65B9\u5F0F\u662F\u5728\u53D8\u91CF\u540D\u540E\u9762\u8DDF\u6570\u7EC4\u957F\u5EA6\u548C\u5143\u7D20\u7C7B\u578B</strong>\uFF0C\u800C<strong>\u5207\u7247\u7684\u58F0\u660E\u65B9\u5F0F\u662F\u4F7F\u7528make\u51FD\u6570\u6216\u5207\u7247\u5B57\u9762\u91CF</strong>\u3002</p></div><p>\u6211\u4EEC\u56DE\u5230\u521A\u624D\u7684\u95EE\u9898\u4E2D\uFF0C\u521A\u624D\u6211\u4EEC\u901A\u8FC7\u5C01\u88C5\u4E86\u4E00\u4E2A<code>changeArray</code>\u7684\u65B9\u6CD5\u6765\u66F4\u6539\u6570\u7EC4\u4E2D\u7B2C\u4E00\u9879\u7684\u503C\uFF0C\u4F46\u662F\u53D1\u73B0\u56E0\u4E3A\u6570\u7EC4\u662F\u5C5E\u4E8E\u503C\u4F20\u9012\uFF0C\u76F8\u5F53\u4E8E\u7CFB\u7EDF\u5F00\u8F9F\u4E86\u4E00\u4E2A\u65B0\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6765\u5B58\u653E\u65B0\u7684\u53D8\u91CF\uFF0C\u4FEE\u6539\u7684\u503C\u4E5F\u662F\u65B0\u6570\u7EC4\u7684\u503C\uFF0C\u6240\u4EE5\u539F\u672C\u7684\u6570\u7EC4\u6CA1\u6709\u53D1\u751F\u53D8\u5316\u3002\u6211\u4EEC\u901A\u8FC7\u5B9A\u4E49\u4E00\u4E2A\u5207\u7247\uFF0C\u6765\u67E5\u770B\u4E24\u8005\u7684\u533A\u522B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">changeArray</span><span class="token punctuation">(</span>array <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	intArray <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
	<span class="token function">changeArray</span><span class="token punctuation">(</span>intArray<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intArray=%v\\n&quot;</span><span class="token punctuation">,</span>intArray<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u80FD\u8BF4\u662F\u5F88\u50CF\uFF0C\u57FA\u672C\u662F\u4E00\u6A21\u4E00\u6837\uFF0C\u8FD9\u73A9\u610F\u5BF9\u6BD4\u4E4B\u524D\u4EE3\u7801\u5927\u5BB6\u5E94\u8BE5\u5927\u81F4\u80FD\u591F\u53D1\u73B0\uFF0C\u6211\u4EEC\u6CA1\u6709\u53BB\u5B9A\u4E49\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u4FBF\u662F\u5207\u7247\uFF08slice\uFF09\uFF08<strong>\u672C\u8D28\u4E0D\u76F8\u540C</strong>\uFF0C\u5927\u5BB6\u4E0D\u8981\u88AB\u6211\u8BEF\u5BFC\uFF09</p><p>\u56DE\u5230\u521A\u624D\u7684\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002\u6211\u4EEC\u80FD\u591F\u53D1\u73B0\u6700\u521D\u5B9A\u4E49\u7684\u52A8\u6001\u6570\u7EC4<code>intArray</code>\u5728\u8C03\u7528\u4E86<code>changeArray</code>\u65B9\u6CD5\u540E\uFF0C\u539F\u6570\u7EC4\u53D1\u751F\u4E86\u53D8\u5316\u3002\u56E0\u4E3A\u5207\u7247\u662F<strong>\u5F15\u7528\u4F20\u9012</strong>\uFF0C\u4FEE\u6539\u5185\u5BB9\u7684\u65F6\u5019\u662F\u76F4\u63A5<strong>\u4FEE\u6539\u5BF9\u5E94\u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run slice.go                   </span>
<span class="token comment"># intArray=[100 2 3 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","slice.html.vue"]]);export{r as default};

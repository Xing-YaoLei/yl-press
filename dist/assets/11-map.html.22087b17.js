import{_ as n,o as s,c as a,d as p}from"./app.045f05a1.js";const t={},e=p(`<h1 id="go\u4E2D\u7684map" tabindex="-1"><a class="header-anchor" href="#go\u4E2D\u7684map" aria-hidden="true">#</a> Go\u4E2D\u7684Map</h1><h2 id="map\u7684\u57FA\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#map\u7684\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a> Map\u7684\u57FA\u672C\u4FE1\u606F</h2><p>Go\u8BED\u8A00\u4E2D\u7684map\u662F\u4E00\u79CD\u952E\u503C\u5BF9\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7C7B\u4F3C\u4E8E\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u54C8\u5E0C\u8868\u6216\u5B57\u5178\u3002\uFF08\u4F60\u53EF\u4EE5\u76F4\u63A5\u7406\u89E3\u4E3A\u4ED6\u662FJs\u4E2D\u7684Map\u6216\u8005\u5BF9\u8C61\uFF09\u5B83\u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u4E00\u7EC4\u65E0\u5E8F\u7684\u952E\u503C\u5BF9\u3002\u5728map\u4E2D\uFF0C<strong>\u952E\u5FC5\u987B\u662F\u552F\u4E00</strong>\u7684\uFF0C\u800C<strong>\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B</strong>\u7684\u3002</p><h2 id="\u521B\u5EFAmap" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmap" aria-hidden="true">#</a> \u521B\u5EFAMap</h2><ul><li>\u7B2C\u4E00\u79CD\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A<code>myMap</code>\u7684<code>map</code>\u5BF9\u8C61\uFF0C<code>key</code>\u4E3A<code>string</code>\u7C7B\u578B\uFF0C<code>value</code>\u4E3A<code>string</code>\u7C7B\u578B</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u79CD\u65B9\u6CD5\uFF0C\u4F7F\u7528<code>make()</code>\u51FD\u6570\u521B\u5EFAmap\uFF0CkeyType\u4E3A\u952E\u7684\u7C7B\u578B\uFF0CvalueType\u4E3A\u503C\u7684\u7C7B\u578B</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E09\u79CD\u65B9\u6CD5\uFF0C\u4F7F\u7528<code>make()</code>\u51FD\u6570\u521B\u5EFAmap\uFF0C\u5E76\u4E14\u5206\u914D\u6570\u636E\u7A7A\u95F4\u3002\u8FD9\u91CC\u7684\u6570\u636E\u7A7A\u95F4\u4E0E\u5207\u7247\u4E2D\u7684\u5BB9\u91CF\u76F8\u540C\u3002\u5F53\u65E0\u6CD5\u627F\u8F7D\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u6269\u5BB9\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u56DB\u79CD\u65B9\u6CD5\uFF0C\u4F7F\u7528<code>make()</code>\u51FD\u6570\u521B\u5EFAmap\uFF0C\u5E76\u4E14\u9884\u8BBE\u521D\u59CB\u503C\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>myMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token string">&quot;TypeScript&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3</span> <span class="token punctuation">:</span> <span class="token string">&quot;Golang&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539map\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539map\u7684\u503C" aria-hidden="true">#</a> \u4FEE\u6539Map\u7684\u503C</h2><p>\u5982\u679C\u6211\u4EEC\u60F3\u8981\u4FEE\u6539map\u4E2D\u7684\u67D0\u4E00\u9879\u503C\u53EF\u4EE5\u901A\u8FC7\u952E\u6765\u8FDB\u884C\u8BBF\u95EE\u4E14\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;AMD&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;YES&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4F8B\u5B50\u80FD\u591F\u53D1\u73B0\u6211\u662F\u76F4\u63A5\u4F7F\u7528\u7B2C\u4E8C\u79CD\u521B\u5EFA\u65B9\u6CD5\u6765\u8FDB\u884Cmap\u5BF9\u8C61\u7684\u521B\u5EFA\u5E76\u4E14\u4FEE\u6539\u7684\u3002</p><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\u76F8\u5BF9\u6765\u8BF4\u4E0D\u592A\u5E38\u7528\uFF0C\u56E0\u4E3A\u521B\u5EFA\u7684\u662F\u4E00\u4E2A\u503C\u4E3Anil\u7684map\u5BF9\u8C61\uFF0C\u5E76\u4E14\u6CA1\u6709\u7ED9\u5B83\u5206\u914D\u7A7A\u95F4\uFF0C\u6240\u4EE5\u6211\u4EEC\u5982\u679C\u60F3\u8981\u901A\u8FC7<code>myMap[&quot;AMD&quot;] = &quot;YES&quot;</code>\u8FD9\u79CD\u65B9\u5F0F\u6765\u76F4\u63A5\u5728map\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u6570\u636E\u662F\u4E0D\u6B63\u786E\u7684\u3002\u4F1A\u62A5\u9519<code>assignment to nil map (SA5000)go-staticcheck</code>\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u8FD9\u4E2A\u8B66\u544A\u662FGo\u9759\u6001\u5206\u6790\u5DE5\u5177<code>staticcheck</code>\u68C0\u6D4B\u5230\u7684\u4E00\u79CD\u5E38\u89C1\u9519\u8BEF\uFF0C\u5B83\u8868\u793A\u5C1D\u8BD5\u5728\u4E00\u4E2A<code>nil</code>\u7684map\u4E0A\u8FDB\u884C\u8D4B\u503C\u64CD\u4F5C\u3002</p><p>\u5728Go\u4E2D\uFF0C\u5982\u679C\u521B\u5EFA\u4E00\u4E2Amap\u4F46\u6CA1\u6709\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5B83\u7684\u503C\u5C06\u4E3A<code>nil</code>\u3002\u8FD9\u65F6\uFF0C\u5982\u679C\u5C1D\u8BD5\u5728\u8FD9\u4E2Amap\u4E0A\u8FDB\u884C\u8D4B\u503C\u64CD\u4F5C\uFF0C\u5C31\u4F1A\u5BFC\u81F4<code>assignment to nil map</code>\u9519\u8BEF\u3002</p></div><h2 id="map\u7684\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#map\u7684\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> Map\u7684\u589E\u5220\u6539\u67E5</h2><h4 id="\u589E" tabindex="-1"><a class="header-anchor" href="#\u589E" aria-hidden="true">#</a> \u589E</h4><p>map\u7684\u589E\u52A0\u64CD\u4F5C\u5728\u4E0A\u4E00\u6BB5\u6F14\u793A\u7684\u65F6\u5019\u5DF2\u7ECF\u64CD\u4F5C\u8FC7\u4E86\uFF0C\u5728\u4E0B\u9762\u7684\u8BDD\u518D\u8FDB\u884C\u4E00\u4E2A\u7B80\u5355\u7684\u64CD\u4F5C\u5C1D\u8BD5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	f <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;ChatGPT&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">1</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;NewBing&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">2</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span>
  f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
  <span class="token comment">// key= ChatGPT value= 1</span>
	<span class="token comment">// key= NewBing value= 2</span>
	<span class="token comment">// key= Baidu value= 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220" tabindex="-1"><a class="header-anchor" href="#\u5220" aria-hidden="true">#</a> \u5220</h4><p>map\u7684\u5220\u9664\u64CD\u4F5C\u548CJs\u57FA\u672C\u76F8\u540C\uFF0C\u901A\u8FC7\u4F7F\u7528delete\u65B9\u6CD5\u6765\u64CD\u4F5C\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8981\u5220\u9664\u5185\u5BB9\u7684map\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5220\u9664\u7684\u952E\uFF0C\u5177\u4F53\u64CD\u4F5C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">deleteMap</span><span class="token punctuation">(</span>myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>myMap<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;ChatGPT&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">1</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;NewBing&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">2</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span>
  f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
	<span class="token function">deleteMap</span><span class="token punctuation">(</span>myMap<span class="token punctuation">,</span> <span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---------\u5220\u9664\u540E----------&quot;</span><span class="token punctuation">)</span>
  f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># key= ChatGPT value= 1</span>
<span class="token comment"># key= NewBing value= 2</span>
<span class="token comment"># key= Baidu value= 3</span>
<span class="token comment"># ---------\u5220\u9664\u540E----------</span>
<span class="token comment"># key= ChatGPT value= 1</span>
<span class="token comment"># key= NewBing value= 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6539" tabindex="-1"><a class="header-anchor" href="#\u6539" aria-hidden="true">#</a> \u6539</h4><p>\u6539\u7684\u64CD\u4F5C\u4E0E\u521B\u5EFA\u7684\u64CD\u4F5C\u76F8\u540C\uFF0C\u5982\u679C\u5B58\u5728\u8FD9\u4E2A\u503C\uFF0C\u90A3\u4E48\u5219\u4FEE\u6539\u5B83\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u5219\u521B\u5EFA\u5B83\u3002\u57FA\u672C\u64CD\u4F5C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;ChatGPT&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">1</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;NewBing&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">2</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;----- \u4FEE\u6539\u540E ------&quot;</span><span class="token punctuation">)</span>
	f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># map[Baidu:3 ChatGPT:1 NewBing:2]</span>
<span class="token comment"># ----- \u4FEE\u6539\u540E ------</span>
<span class="token comment"># map[Baidu:5 ChatGPT:1 NewBing:2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5" tabindex="-1"><a class="header-anchor" href="#\u67E5" aria-hidden="true">#</a> \u67E5</h4><p>\u4E4B\u524D\u6211\u4EEC\u4F7F\u7528\u7684<code>range</code>\u65B9\u6CD5\u540C\u6837\u80FD\u591F\u7528\u5728<code>map</code>\u5BF9\u8C61\u4E2D\u6765\u904D\u5386\u67E5\u8BE2\u5176\u4E2D\u7684\u952E\u503C\u5BF9\u3002\u6211\u4EEC\u7B80\u5355\u5C01\u88C5\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u5185\uFF0C\u6211\u4EEC\u4F20\u5165\u4E00\u4E2AmyMap\u7684map\u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7<code>for range</code>\u7684\u65B9\u6CD5\u6765\u5FAA\u73AF\u8F93\u51FA\u4ED6\u4EEC\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">viewMap</span><span class="token punctuation">(</span>myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> myMap <span class="token punctuation">{</span>
		f<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;key=&quot;</span><span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token string">&quot;value=&quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// key= ChatGPT value= 1</span>
<span class="token comment">// key= NewBing value= 2</span>
<span class="token comment">// key= Baidu value= 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u9012\u53C2\u6570\u4FEE\u6539\u503C" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u53C2\u6570\u4FEE\u6539\u503C" aria-hidden="true">#</a> \u4F20\u9012\u53C2\u6570\u4FEE\u6539\u503C</h2><p>\u4E4B\u524D\u6211\u4EEC\u5728\u4F7F\u7528\u6570\u7EC4\u7684\u65F6\u5019\u6709\u8FC7\u7C7B\u4F3C\u7684\u573A\u666F\u3002</p><ul><li>\u6570\u7EC4\u5728\u901A\u8FC7\u65B9\u6CD5\u63A5\u6536\u540E\uFF0C\u539F\u672C\u7684\u6570\u7EC4\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u53EA\u662F\u5728\u5185\u5B58\u5730\u5740\u5F00\u8F9F\u4E86\u65B0\u7684\u7A7A\u95F4\u6765\u5B58\u653E\u65B0\u7684\u6570\u7EC4\u3002</li><li>\u52A8\u6001\u6570\u7EC4\uFF08\u5207\u7247\uFF09\uFF0C\u5728\u4F20\u5165\u52A8\u6001\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4FEE\u6539\u52A8\u6001\u6570\u7EC4\uFF0C\u539F\u672C\u7684\u52A8\u6001\u6570\u7EC4\u4E5F\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u56E0\u4E3A\u52A8\u6001\u6570\u7EC4\u4F20\u9012\u7684\u503C\uFF0C\u5176\u5B9E\u662F\u5C06\u5BF9\u5E94\u6570\u636E\u7684\u6307\u9488\u4F20\u9012\u4E86\u8FC7\u53BB\u3002\u5982\u679C\u4E0D\u60F3\u540C\u65F6\u53D8\u5316\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528copy\u65B9\u6CD5\u6765\u62F7\u8D1D\u4E00\u4E2A\u65B0\u7684\u5207\u7247\u518D\u8FDB\u884C\u64CD\u4F5C\u3002</li><li>\u5728Go\u8BED\u8A00\u4E2D\uFF0Cmap\u4E5F\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u56E0\u6B64\uFF0C\u5C06map\u4F5C\u4E3A\u53C2\u6570\u662F\u4F20\u9012\u7ED9\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u5185\u90E8\u5BF9map\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u539F\u59CB\uFF08\u6EE1\u8111\u5B50\u90FD\u662F\u539F\u77F3\uFF09\u7684\u503C\u3002</li></ul><p>\u5177\u4F53\u64CD\u4F5C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">editMap</span><span class="token punctuation">(</span>myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Tencent&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;ChatGPT&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">1</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;NewBing&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">2</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Baidu&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span>
	myMap<span class="token punctuation">[</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">4</span>
	<span class="token function">editMap</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
	<span class="token function">viewMap</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># key= Baidu value= 3</span>
<span class="token comment"># key= Google value= 4</span>
<span class="token comment"># key= Tencent value= 0</span>
<span class="token comment"># key= ChatGPT value= 1</span>
<span class="token comment"># key= NewBing value= 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://oss.oh-undefined.com/c0cc7eb2fuf12154383b7e8e567c8ad4.jpeg" alt="img"></p>`,40),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","11-map.html.vue"]]);export{d as default};
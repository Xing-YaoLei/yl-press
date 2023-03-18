import{_ as n,o as s,c as a,d as e}from"./app.096448e8.js";const t={},i=e(`<h1 id="go-\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#go-\u7684\u53D8\u91CF" aria-hidden="true">#</a> Go \u7684\u53D8\u91CF</h1><h2 id="\u53D8\u91CF\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5B9A\u4E49" aria-hidden="true">#</a> \u53D8\u91CF\u5B9A\u4E49</h2><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3><p>Go\u8BED\u8A00\u7684\u53D8\u91CF\u5728\u4F7F\u7528\u4E2D\u4E0EJavaScript\u3001Typescript\u7684\u4F7F\u7528\u7C7B\u4F3C\u3002</p><p>\u901A\u8FC7<code>var</code>\u6765\u8FDB\u884C\u53D8\u91CF\u7684\u5B9A\u4E49\uFF0C\u5728\u5B9A\u4E49\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49\u3002\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Alanguage\u7684\u53D8\u91CF \u8BE5\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u4E3Astring\u5B57\u7B26\u4E32\u7C7B\u578B \u6700\u540E\u901A\u8FC7\u7B49\u53F7\u8FDB\u884C\u8D4B\u503C</span>
	<span class="token keyword">var</span> language <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Javascript&quot;</span>
	<span class="token keyword">var</span> level <span class="token operator">=</span> <span class="token string">&quot;\u725B\u903C&quot;</span>
  <span class="token comment">// \u6216\u8005 \u9996\u5148\u5B9A\u4E49\u53D8\u91CF \u5E76\u4E14\u58F0\u660E\u6570\u636E\u7C7B\u578B  </span>
  <span class="token comment">// var language string</span>
	<span class="token comment">// language = &quot;Golang&quot; \u6700\u540E\u8FDB\u884C\u8BE5\u53D8\u91CF\u7684\u8D4B\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F&quot;</span><span class="token punctuation">,</span>language<span class="token punctuation">,</span> level<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># \u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F Javascript \u725B\u903C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6821\u9A8C" aria-hidden="true">#</a> \u7C7B\u578B\u6821\u9A8C</h3><div class="custom-container warning"><p class="custom-container-title">\u53D8\u91CF\u7C7B\u578B</p><p>\u5728\u53D8\u91CF\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u53D8\u91CF\u8D4B\u503C\u5185\u5BB9\u9700\u8981\u4E0E\u5B9A\u4E49\u53D8\u91CF\u65F6\u7684\u7C7B\u578B\u76F8\u540C\u3002</p></div><p>\u4F8B\u5982\uFF0C\u5728\u5B9A\u4E49\u53D8\u91CFa\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8D4B\u4E88\u53D8\u91CFInt\u7C7B\u578B\u3002\u4F46\u662F\u6211\u4EEC\u5728\u8D4B\u503C\u7684\u65F6\u5019\u8D4B\u503C\u4E00\u4E2A\u5C0F\u6570\u6570\u503C\u6267\u884C\u4EE3\u7801\u5219\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">12.23</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># command-line-arguments</span>
<span class="token comment"># cannot use 12.23 (untyped float constant) as int value in variable declaration (truncated)</span>
<span class="token comment"># \u7FFB\u8BD1\uFF1A\u4E0D\u80FD\u5728\u53D8\u91CF\u58F0\u660E\u4E2D\u4F7F\u752812.23(\u672A\u7C7B\u578B\u5316\u6D6E\u70B9\u5E38\u91CF)\u4F5C\u4E3Aint\u503C(\u622A\u65AD)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h3><div class="custom-container warning"><p class="custom-container-title">\u7C7B\u578B\u8F6C\u6362</p><p>\u5728Go\u4E2D\u4E0D\u5141\u8BB8\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u3002</p></div><p>\u4F8B\u5982\u5B9A\u4E49\u53D8\u91CFa\uFF0C\u4F46\u662F\u5E76<strong>\u672A\u8D4B\u4E88\u6570\u636E\u7C7B\u578B</strong>\uFF0C\u4F46\u662F<strong>\u8D4B\u503C</strong>\u4E3A&quot;Never give Up&quot;\uFF0C\u90A3\u4E48\u53D8\u91CFa\u7684\u6570\u636E\u7C7B\u578B\u5219\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u540E\u7EED\u8D4B\u503C<strong>\u4E0D\u5141\u8BB8\u8D4B\u503C\u4E3A\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u7684\u503C</strong>\uFF0C\u5982\u679C\u8FDB\u884C\u4E86\u8BE5\u64CD\u4F5C\uFF0C\u5219\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;Never give Up&quot;</span> <span class="token comment">// \u6839\u636E\u7B49\u53F7\u540E\u7684\u6570\u636E \u81EA\u52A8\u786E\u5B9A\u6570\u636E\u7C7B\u578B</span>
	a  <span class="token operator">=</span> <span class="token number">1234</span> <span class="token comment">// \u8FD9\u91CC\u662F\u9519\u7684 \u5B9E\u9645\u4EE3\u7801\u4E0D\u8981\u6A21\u4EFF</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Lihua:&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># command-line-arguments</span>
<span class="token comment"># cannot use 1234 (untyped int constant) as string value in assignment</span>
<span class="token comment"># \u7FFB\u8BD1\uFF1A\u4E0D\u80FD\u5728\u8D4B\u503C\u65F6\u4F7F\u75281234(\u672A\u7C7B\u578B\u5316int\u5E38\u91CF)\u4F5C\u4E3A\u5B57\u7B26\u4E32\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u590D\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u5B9A\u4E49" aria-hidden="true">#</a> \u91CD\u590D\u5B9A\u4E49</h3><div class="custom-container warning"><p class="custom-container-title">\u91CD\u590D\u5B9A\u4E49</p><p>Go\u4E2D\u4E0D\u5141\u8BB8\u53D8\u91CF\u91CD\u590D\u5B9A\u4E49\u3002\uFF08\u4E0EJavaScript\u4E2D<code>const</code>\u5B9A\u4E49\u76F8\u540C\uFF09</p></div><p>\u4F8B\u5982\u5B9A\u4E49\u53D8\u91CFa\uFF0C\u5E76\u4E14\u8D4B\u503C\uFF0C\u540E\u7EED\u518D\u6B21\u8FDB\u884C\u53D8\u91CF\u7684\u5B9A\u4E49\uFF0C\u5219\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;Never give Up&quot;</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;keep on fighting&quot;</span> <span class="token comment">// \u91CD\u590D\u5B9A\u4E49\u5728\u8FD9\u91CC</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Lihua:&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># command-line-arguments</span>
<span class="token comment"># a redeclared in this block \u4F1A\u63D0\u9192\u5728\u8FD9\u4E00\u884C\u518D\u4E00\u6B21\u5B9A\u4E49\u4E86\u53D8\u91CF</span>
<span class="token comment"># other declaration of a \u6700\u5F00\u59CB\u5B9A\u4E49\u662F\u5728\u8FD9\u4E2A\u4F4D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u53D8\u91CF\u9ED8\u8BA4\u503C</h3><div class="custom-container tip"><p class="custom-container-title">\u9ED8\u8BA4\u503C</p><p>\u53D8\u91CF\u5B9A\u4E49\u540E\u6CA1\u6709\u8D4B\u503C\uFF0C\u53D8\u91CF\u62E5\u6709\u9ED8\u8BA4\u503C</p></div><p>\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3Astduy\u7684\u53D8\u91CF\uFF0C\u5E76\u4E14\u8D4B\u4E88\u7C7B\u578B\u4E3Astring\u6216\u8005Int\u8FDB\u884C\u5C1D\u8BD5\uFF0C\u5982\u4E0B\u6240\u793A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> study <span class="token builtin">string</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>study<span class="token punctuation">)</span>  <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32 \u8FD9\u91CC\u5199\u4E00\u4E0B</span>
  <span class="token keyword">var</span> study <span class="token builtin">int</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>study<span class="token punctuation">)</span>  <span class="token comment">// 0 int\u7C7B\u578B\u672A\u8D4B\u503C \u9ED8\u8BA4\u503C\u5219\u4E3A0</span>
  <span class="token keyword">var</span> study <span class="token builtin">bool</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>study<span class="token punctuation">)</span>  <span class="token comment">// false \u5E03\u5C14\u7C7B\u578B\u672A\u8D4B\u503C \u9ED8\u8BA4\u503C\u4E3Afalse</span>
  <span class="token keyword">var</span> study <span class="token builtin">float32</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>study<span class="token punctuation">)</span>  <span class="token comment">// 0  \u6D6E\u70B9\u578B\u6570\u5B57 \u9ED8\u8BA4\u503C\u4E5F\u4E3A0</span>
  <span class="token comment">// ... \u5176\u4F59\u7559\u5230\u6570\u636E\u7C7B\u578B\u4E00\u8D77\u5B66\u4E60</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5199\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u7B80\u5199\u5B9A\u4E49\u53D8\u91CF</h3><p>\u5728\u53D8\u91CF\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8FDB\u884C\u7B80\u5199\u53EF\u4EE5\u7701\u7565<code>var</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  result <span class="token operator">:=</span> <span class="token number">123</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540C\u65F6\u5B9A\u4E49\u591A\u4E2A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u5B9A\u4E49\u591A\u4E2A\u53D8\u91CF" aria-hidden="true">#</a> \u540C\u65F6\u5B9A\u4E49\u591A\u4E2A\u53D8\u91CF</h3><p>\u5728\u53D8\u91CF\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u5BF9\u591A\u4E2A\u53D8\u91CF\u8FDB\u884C\u5B9A\u4E49\uFF08\u6709\u70B9\u50CF\u662F\u89E3\u6784\u8D4B\u503C\u90A3\u5473\u513F\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token builtin">string</span>
	a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token operator">=</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;four&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span>  <span class="token comment">// one two three four</span>
 
	time<span class="token punctuation">,</span>day<span class="token punctuation">,</span>week<span class="token punctuation">,</span>month <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span>day<span class="token punctuation">,</span>week<span class="token punctuation">,</span>month<span class="token punctuation">)</span> <span class="token comment">// 1,2,3,4</span>
  
	<span class="token keyword">var</span> q<span class="token punctuation">,</span>w<span class="token punctuation">,</span>e<span class="token punctuation">,</span>r <span class="token operator">=</span> <span class="token string">&quot;\u8F66\u8F6E\u6EDA\u6EDA&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;\u731B\u6376\u5730\u677F&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5171\u4EAB\u5927\u8111&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span> q<span class="token punctuation">,</span>w<span class="token punctuation">,</span>e<span class="token punctuation">,</span>r <span class="token punctuation">)</span>  <span class="token comment">// \u8F66\u8F6E\u6EDA\u6EDA 2 \u731B\u6376\u5730\u677F \u5171\u4EAB\u5927\u8111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><p>Go\u5728\u65B9\u6CD5\u5916\u90E8\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u6765\u4F9B\u6240\u6709\u65B9\u6CD5\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u4E00\u4E2A\u4E00\u4E2A\u5B9A\u4E49\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5FEB\u901F\u5B9A\u4E49\u591A\u4E2A\u5168\u5C40\u53D8\u91CF</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5728\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u65E0\u6CD5\u4F7F\u7528<code>\u53D8\u91CF\u540D := 10</code>\u7684\u8FD9\u79CD\u5B9A\u4E49\u65B9\u6CD5\u6765\u5B9A\u4E49\u3002</p></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	a <span class="token operator">=</span> <span class="token number">1</span>
	b <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
	c <span class="token operator">=</span> <span class="token string">&quot;666&quot;</span>
	d <span class="token operator">=</span> <span class="token number">12.55</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># 1 abc 666 12.55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5E38\u91CF" aria-hidden="true">#</a> \u5B9A\u4E49\u5E38\u91CF</h2><p>\u5728Go\u4E2D\u5B9A\u4E49\u5E38\u91CF\u7684\u65B9\u5F0F\u4E0EJavaScript\u76F8\u540C\uFF0C\u901A\u8FC7\u4F7F\u7528<code>const</code>\u8FDB\u884C\u5B9A\u4E49\uFF0C\u5B9A\u4E49\u540E\u7684\u6570\u636E\u65E0\u6CD5\u91CD\u65B0\u8D4B\u503C\u4EE5\u53CA\u4FEE\u6539\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main
import &quot;fmt&quot;
func main(){
	const a  = 1
	a += 2
	fmt.Println(a)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go run .\\index.go</span>
<span class="token comment"># command-line-arguments</span>
<span class="token comment"># cannot assign to a (untyped int constant 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h2><p>\u5BFC\u5165\u7684<code>fmt</code>\u5305\u5728Go\u4E2D\u901A\u5E38\u7528\u4E8E\u6253\u5370\u6570\u636E\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> language <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Javascript&quot;</span>
	<span class="token comment">// \u6216\u8005</span>
	<span class="token comment">// var language string</span>
	<span class="token comment">// language = &quot;Golang&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F&quot;</span><span class="token punctuation">,</span> language<span class="token punctuation">)</span>
  <span class="token comment">// go run index.go \u6267\u884C\u6587\u4EF6</span>
  <span class="token comment">// \u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F Javascript  // \u6267\u884C\u7ED3\u679C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F&quot;</span><span class="token punctuation">,</span> language<span class="token punctuation">)</span>
  <span class="token comment">// go run index.go \u6267\u884C\u6587\u4EF6</span>
  <span class="token comment">// \u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F%!(EXTRA string=Javascript)%   </span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662F&quot;</span><span class="token punctuation">,</span> language<span class="token punctuation">)</span>
  <span class="token comment">// go run index.go \u6267\u884C\u6587\u4EF6</span>
  <span class="token comment">// \u4E16\u754C\u4E0A\u6700\u597D\u7684\u7F16\u7A0B\u8BED\u8A00\u662FJavascript%   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>Println</code>\u4F1A\u8FDB\u884C\u6362\u884C\u8F93\u51FA\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	a <span class="token operator">=</span> <span class="token number">1</span>
	b <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
	c <span class="token operator">=</span> <span class="token string">&quot;666&quot;</span>
	d <span class="token operator">=</span> <span class="token number">12.55</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># 1</span>
<span class="token comment"># abc</span>
<span class="token comment"># 666</span>
<span class="token comment"># 12.55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>Print</code>\u5219\u4F1A\u539F\u6837\u8F93\u51FA\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	a <span class="token operator">=</span> <span class="token number">1</span>
	b <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
	c <span class="token operator">=</span> <span class="token string">&quot;666&quot;</span>
	d <span class="token operator">=</span> <span class="token number">12.55</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u25B6 go run index.go</span>
<span class="token comment"># 1abc66612.55% </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>Printf</code>\u4F1A\u8FDB\u884C\u683C\u5F0F\u5316\u8F93\u51FA\u3002</p>`,54),p=[i];function o(c,l){return s(),a("div",null,p)}var d=n(t,[["render",o],["__file","variable.html.vue"]]);export{d as default};
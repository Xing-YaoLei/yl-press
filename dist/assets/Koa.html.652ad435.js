import{_ as t,o as p,c as e,b as n,a as o,d as c,e as s,r as l}from"./app.72791054.js";const i={},u=c(`<h1 id="koa-\u7684\u670D\u52A1\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#koa-\u7684\u670D\u52A1\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> Koa \u7684\u670D\u52A1\u7AEF\u5F00\u53D1</h1><h3 id="\u4F7F\u7528koa\u5F00\u53D1\u4EE3\u7406\u8F6C\u53D1\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528koa\u5F00\u53D1\u4EE3\u7406\u8F6C\u53D1\u63A5\u53E3" aria-hidden="true">#</a> \u4F7F\u7528Koa\u5F00\u53D1\u4EE3\u7406\u8F6C\u53D1\u63A5\u53E3</h3><p>\u5728\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5E38\u5E38\u80FD\u591F\u9047\u5230\u4E00\u4E2A\u573A\u666F\u5C31\u662F\u53EF\u80FD\u524D\u540E\u7AEF\u6570\u636E\u4EA4\u4E92\u7684\u65F6\u5019\u4F1A\u9047\u5230\u8DE8\u57DF\u95EE\u9898\u3002</p><p>\u6700\u7B80\u5355\u7684\u89E3\u51B3\u8DE8\u57DF\u7684\u65B9\u5F0F\u5C31\u662F\u8BA9\u540E\u7AEF\u7684\u540C\u5B66\u89E3\u9664\u8DE8\u57DF\u8D44\u6E90\u8BBF\u95EE\u7684\u914D\u7F6E\u3002\u4F46\u662F\u5982\u679C\u540E\u7AEF\u540C\u5B66\u6CA1\u6709\u529E\u6CD5\u89E3\u51B3\u7684\u60C5\u51B5\u4E0B\u3002\u6211\u4EEC\u4F5C\u4E3A\u524D\u7AEF\u7684\u540C\u5B66\u4E5F\u4E0D\u80FD\u53EA\u4E86\u89E3\u4E00\u4E2AJSONP\u3002</p><h4 id="jsonp\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#jsonp\u7684\u7F3A\u70B9" aria-hidden="true">#</a> JSONP\u7684\u7F3A\u70B9</h4><p>\u867D\u7136JSONP\u5B9E\u73B0\u65B9\u5F0F\u7B80\u5355\uFF0C\u4F46\u662F\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u4F8B\u5982\uFF1A\u53EA\u80FD\u5B9E\u73B0GET\u8BF7\u6C42\uFF08\u56E0\u4E3AJSONP\u662F\u901A\u8FC7\u52A8\u6001\u63D2\u5165<code>script</code>\u6807\u7B7E\u6765\u5B9E\u73B0\u7684\uFF09\u3001JSONP\u53EA\u80FD\u7531\u670D\u52A1\u5668\u7AEF\u63D0\u4F9B\u652F\u6301\uFF0C\u5982\u679C\u670D\u52A1\u5668\u4E0D\u652F\u6301JSONP\uFF0C\u90A3\u4E48\u4F9D\u65E7\u662F\u6CA1\u8F99\u3001JSONP\u5B89\u5168\u6027\u8F83\u5DEE\uFF0C\u654F\u611F\u4FE1\u606F\u4F20\u8F93\u66F4\u5BB9\u6613\u51FA\u73B0\u95EE\u9898\u3002</p><p>\u65E2\u7136\u8981\u89E3\u51B3\u8DE8\u57DF\uFF0C\u5C31\u9700\u8981\u77E5\u9053\u8DE8\u57DF\u662F\u4EC0\u4E48\uFF0C\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u51FA\u73B0</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8DE8\u57DF\uFF08Cross-Origin Resource Sharing\uFF0C\u7B80\u79F0 CORS\uFF09\u662F\u6307\u6D4F\u89C8\u5668\u5B9E\u73B0\u7684\u4E00\u79CD\u5B89\u5168\u673A\u5236\uFF0C\u5B83\u9650\u5236\u4E86\u6765\u81EA\u4E0D\u540C\u6E90\u7684\u811A\u672C\u5BF9\u672C\u5730\u8D44\u6E90\u7684\u8BBF\u95EE\u3002</p><p>\u6240\u8C13\u6E90\uFF08Origin\uFF09\uFF0C\u6307\u7684\u662F\u57DF\u540D\u3001\u534F\u8BAE\u3001\u7AEF\u53E3\u53F7\u4E09\u8005\u7684\u7EC4\u5408\u3002\u5982\u679C\u4E24\u4E2A URL \u7684\u6E90\u76F8\u540C\uFF0C\u5219\u8868\u793A\u5B83\u4EEC\u5C5E\u4E8E\u540C\u4E00\u4E2A\u6E90\uFF1B\u5982\u679C\u4E24\u4E2A URL \u7684\u6E90\u4E0D\u540C\uFF0C\u5219\u8868\u793A\u5B83\u4EEC\u5C5E\u4E8E\u4E0D\u540C\u7684\u6E90\u3002</p><p>... \u5269\u4E0B\u7684\u53EF\u4EE5\u81EA\u884C\u767E\u5EA6\u4E86</p></div><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u5BA2\u6237\u7AEF\u53BB\u670D\u52A1\u7AEF\u8BF7\u6C42\u6570\u636E\uFF0C\u5982\u679C\u7AEF\u53E3\u3001\u57DF\u540D\u3001\u534F\u8BAE\u4E0D\u540C\u5C31\u4F1A\u4EA7\u751F\u8DE8\u57DF\u95EE\u9898\uFF0C\u4F46\u662F\u670D\u52A1\u7AEF\u5230\u670D\u52A1\u7AEF\u5219\u4E0D\u4F1A\uFF0C\u4F8B\u5982Vue\u4E2D\u914D\u7F6EProxy\u4EE3\u7406\u670D\u52A1\u5668\u539F\u7406\u76F8\u540C\u3002</p><h4 id="\u8DE8\u57DF\u63A5\u53E3\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u63A5\u53E3\u5F00\u53D1" aria-hidden="true">#</a> \u8DE8\u57DF\u63A5\u53E3\u5F00\u53D1</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&quot;koa-router&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// request\u63D2\u4EF6\u7528\u4E8E\u53D1\u9001\u6570\u636E\u8BF7\u6C42</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;request-promise-native&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// successResponse\u4E3A\u6210\u529F\u8FD4\u56DE\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u7684\u7EDF\u4E00\u6027</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> successResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../utils/common&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u8DEF\u7531\u7684\u524D\u7F00</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;/api/v1/proxy&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// router.all \u7528\u6765\u63A5\u53D7\u6240\u6709\u7C7B\u578B\u7684\u8BF7\u6C42\uFF0C\u4E0B\u65B9\u5C01\u88C5\u4EC5\u4EC5\u4F7F\u7528get\u3001post\u3001put\u3001delete\u56DB\u79CDRESTfull\u98CE\u683C\u7684API</span>
router<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u7684\u5730\u5740\u4EE5\u53CA\u8BF7\u6C42\u65B9\u6CD5</span>
  <span class="token keyword">const</span> method <span class="token operator">=</span> ctx<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53D1\u9001\u6570\u636E\u8BF7\u6C42</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u65B9\u6CD5\u4E3Aget\u8BF7\u6C42\u5219\u83B7\u53D6get\u8BF7\u6C42\u4E2D\u7684params\u53C2\u6570</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
    <span class="token comment">// \u901A\u8FC7\u8C03\u7528\u53C2\u6570\u4E2D\u7684URL\u4EE5\u53CA\u5176\u4ED6\u53C2\u6570</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uri</span><span class="token operator">:</span> params<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u7528\u6237</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">successResponse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u65B9\u6CD5\u4E3Apost\u8BF7\u6C42\u5219\u83B7\u53D6post\u8BF7\u6C42\u4E2D\u7684body\u8BF7\u6C42\u4F53\u5185\u7684\u53C2\u6570</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token comment">// \u5C06\u53C2\u6570\u4E2D\u7684\u6570\u636E\u653E\u5165\u6570\u636E\u8BF7\u6C42\u4E2D</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uri</span><span class="token operator">:</span> data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5C06\u6570\u636E\u653E\u5165\u54CD\u5E94\u4F53\u5185\u8FD4\u56DE\u7ED9\u7528\u6237</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">successResponse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4E3Aput\u8BF7\u6C42\uFF0C\u5219\u83B7\u53D6\u8BF7\u6C42\u4F53\u4E2D\u7684query</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
    <span class="token comment">// \u53D1\u9001\u8BF7\u6C42\u62FF\u5230\u8BF7\u6C42\u540E\u7684\u6570\u636E</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uri</span><span class="token operator">:</span> params<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u7ED9\u7528\u6237\u6570\u636E</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">successResponse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">==</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4E3Adelete\u6570\u636E\u8BF7\u6C42</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> ctx<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u53D6params\u53C2\u6570 URL\u540E\u8DDF\u7684\u53C2\u6570id</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u7ED9\u7528\u6237</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">successResponse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u9645\u8C03\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9645\u8C03\u7528\u6848\u4F8B" aria-hidden="true">#</a> \u5B9E\u9645\u8C03\u7528\u6848\u4F8B</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src -&gt; api -&gt; proxy.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/service&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">proxyGetAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;http://www.oh-undefined.com/api/v1/proxy&quot;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    params
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// views -&gt; xxx.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> proxyGetAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/proxy&quot;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">proxyGetAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;http:///test.cn/api/getlist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6B64\u5904\u4F1A\u62FF\u5230\u5BF9\u5E94\u63A5\u53E3\u7684\u6570\u636E</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r={class:"custom-container warning"},k=n("p",{class:"custom-container-title"},"WARNING",-1),d=s("Koa-body \u5728\u914D\u7F6E\u5B8C\u6210\u4E0A\u4F20\u56FE\u7247\u7684\u529F\u80FD\u540E\uFF0C\u53EF\u80FD\u4F1A\u5F15\u53D1\u6240\u6709\u7684\u8BF7\u6C42\u51FA\u73B0 415 \u7684\u60C5\u51B5\u3002 \u914D\u7F6E\u9636\u6BB5\u8BF7\u5173\u95ED encoding \u7684 gzip \u9009\u9879 "),v={href:"https://github.com/koajs/koa-body/issues/185",target:"_blank",rel:"noopener noreferrer"},m=s("issues"),b=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[n("code",null,"koa2-connect-history-api-fallback"),s("\u63D2\u4EF6\u7684\u4F7F\u7528\u4F1A\u9020\u6210get\u8BF7\u6C42\u5168\u90E8\u88AB\u62E6\u622A\u6CA1\u6709\u54CD\u5E94\u3002")])],-1);function y(h,g){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,n("div",r,[k,n("p",null,[d,n("a",v,[m,o(a)])])]),b])}var f=t(i,[["render",y],["__file","Koa.html.vue"]]);export{f as default};
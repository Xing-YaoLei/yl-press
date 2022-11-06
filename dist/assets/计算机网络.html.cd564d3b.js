import{_ as i,o as a,c as t,e}from"./app.d426f740.js";const l={},h=e('<h1 id="\u8BA1\u7B97\u673A\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u7F51\u7EDC" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u7F51\u7EDC</h1><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="http\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#http\u7684\u6982\u5FF5" aria-hidden="true">#</a> HTTP\u7684\u6982\u5FF5</h3><p>http\u5168\u540D\u4E3A\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u7528\u4E8E\u5C06\u8D85\u6587\u672C\u4ECE\u670D\u52A1\u5668\u7AEF\u4F20\u9012\u5230\u672C\u5730\u6D4F\u89C8\u5668\u7684\u534F\u8BAE\u3002</p><h3 id="http\u7684\u8BF7\u6C42\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#http\u7684\u8BF7\u6C42\u65B9\u5F0F" aria-hidden="true">#</a> HTTP\u7684\u8BF7\u6C42\u65B9\u5F0F</h3><ul><li>Get - \u901A\u5E38\u4E3A\u83B7\u53D6\u8D44\u6E90</li><li>Post - \u901A\u5E38\u4E3A\u4F20\u9012\u8D44\u6E90</li><li>Put - \u66F4\u65B0\u8D44\u6E90</li><li>Delete - \u5220\u9664\u8D44\u6E90</li><li>Head - \u83B7\u53D6\u62A5\u6587\u5934\u90E8</li></ul><h3 id="get-\u4E0E-post\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#get-\u4E0E-post\u7684\u533A\u522B" aria-hidden="true">#</a> Get \u4E0E Post\u7684\u533A\u522B</h3><ol><li>\u6D4F\u89C8\u5668\u56DE\u9000 - Get\u5728\u6D4F\u89C8\u5668\u56DE\u9000\u65F6\u662F\u65E0\u5BB3\u7684\uFF0CPost\u5219\u4F1A\u518D\u6B21\u63D0\u4EA4\u8BF7\u6C42\u3002</li><li>\u53C2\u6570 - \u53C2\u6570\u65B9\u9762Get\u8BF7\u6C42\u4F1A\u663E\u793A\u5728URL\u4E2D\u8FDB\u884C\u62FC\u63A5\u7684\u5F62\u5F0F\u5B58\u5728\uFF0CPost\u8BF7\u6C42\u5219\u5728\u6570\u636E\u8BF7\u6C42\u7684\u8BF7\u6C42\u4F53\u4E2D\u3002</li><li>\u5B89\u5168 - \u5B89\u5168\u65B9\u9762\uFF0C\u7531\u4E8EGet\u8BF7\u6C42\u53C2\u6570\u901A\u8FC7URL\u4F20\u9012\uFF0C\u6240\u4EE5\u76F8\u5BF9\u4E0D\u5B89\u5168\u3002Post\u8BF7\u6C42\u662F\u653E\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u76F8\u5BF9\u66F4\u52A0\u5B89\u5168\u4E00\u70B9\u3002</li><li>\u7F13\u5B58 - Get\u8BF7\u6C42\u7684\u6570\u636E\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8\u7F13\u5B58\uFF0CPost\u5219\u4E0D\u4F1A</li><li>\u610F\u4E49- \u6839\u636E\u8BED\u4E49\u8BDD\u6216\u8005\u8BBE\u8BA1\u89C4\u8303\u6765\u8BF4\uFF0CGet\u662F\u7528\u4E8E\u8FDB\u884C\u83B7\u53D6\u6570\u636E\uFF08\u8BFB\uFF09\uFF0CPost\u8BF7\u6C42\u7528\u4E8E\u66F4\u6539\u6570\u636E\u6216\u8005\u63D0\u4EA4\u6570\u636E\uFF08\u5199\uFF09\u867D\u7136\u672C\u8D28\u4E0AGet\u4E5F\u53EF\u4EE5\u8FDB\u884C\u6570\u636E\u7684\u4FEE\u6539\u6216\u8005\u63D0\u4EA4\uFF0CPost\u4E5F\u53EF\u4EE5\u7528\u4E8E\u6570\u636E\u7684\u83B7\u53D6\u3002</li></ol><h3 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h3><p>HTTPS\u662F\u4EE5\u5B89\u5168\u4E3A\u76EE\u6807\u7684HTTP\u901A\u9053\uFF0C\u5728HTTP\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86SSL\u52A0\u5BC6</p><p>SSL\u9700\u8981\u7533\u8BF7CA\u8BC1\u4E66\uFF0C\u6839\u636E\u529F\u80FD\u4EE5\u53CA\u9762\u5411\u7684\u7528\u6237\u7FA4\u4F53\u4E0D\u540C\u8D39\u7528\u4E0D\u540C\u3002</p><h3 id="http\u4E0Ehttps\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#http\u4E0Ehttps\u7684\u533A\u522B" aria-hidden="true">#</a> HTTP\u4E0EHTTPS\u7684\u533A\u522B</h3><p>HTTPS\u5728HTTP\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86SSL\u52A0\u5BC6\u8BC1\u4E66</p><p>HTTP\u9ED8\u8BA4\u7AEF\u53E3\u53F7\u4E3A80\uFF0CHTTPS\u9ED8\u8BA4\u7AEF\u53E3\u53F7\u4E3A443</p><h3 id="tcp-ip\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#tcp-ip\u534F\u8BAE" aria-hidden="true">#</a> TCP/IP\u534F\u8BAE</h3><p>TCP/IP\u534F\u8BAE\u662F\u7531FTP\u3001SMTP\u3001TCP\u3001UDP\u3001IP\u7B49\u534F\u8BAE\u6784\u6210\u7684\u534F\u8BAE\u7C07\uFF0C\u5176\u4E2DTCP\u534F\u8BAE\u4EE5\u53CAIP\u534F\u8BAE\u6700\u5177\u4EE3\u8868\u6027\u3002\u6240\u4EE5\u88AB\u79F0\u4E3ATCP/IP\u534F\u8BAE\u3002</p><h3 id="tcp-ip\u7F51\u7EDC\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#tcp-ip\u7F51\u7EDC\u6A21\u578B" aria-hidden="true">#</a> TCP/IP\u7F51\u7EDC\u6A21\u578B</h3><ul><li>OSI\u4E03\u5C42\u53C2\u8003\u6A21\u578B <ul><li>\u5E94\u7528\u5C42 -&gt; \u8868\u793A\u5C42 -&gt; \u4F1A\u8BDD\u5C42 -&gt; \u4F20\u8F93\u5C42 -&gt; \u7F51\u7EDC\u5C42 -&gt; \u6570\u636E\u94FE\u8DEF\u5C42 -&gt; \u7269\u7406\u5C42</li><li>\u4F20\u8F93\u5C42\u4E3B\u8981\u4E3A\u7AEF\u5230\u7AEF\u7684\u53EF\u9760\u8FDE\u63A5</li><li>\u7F51\u7EDC\u5C42\u4E3A\u6570\u636E\u5305\u7684\u5C01\u5305\u4EE5\u53CA\u8DEF\u7531</li><li>\u6570\u636E\u94FE\u8DEF\u5C42\u4E3B\u8981\u4E3A\u6570\u636E\u5E27\u7684\u4F20\u8F93</li><li>\u7269\u7406\u5C42\u4E3B\u8981\u4E3A\u6BD4\u7279\u7684\u4F20\u8F93</li></ul></li></ul><h3 id="tcp\u4E09\u6B21\u63E1\u624B" tabindex="-1"><a class="header-anchor" href="#tcp\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a> TCP\u4E09\u6B21\u63E1\u624B</h3><ol><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u53D1\u9001SYN\u7801\uFF08\u81EA\u6211\u4ECB\u7ECD\uFF09\u5230\u670D\u52A1\u5668\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u786E\u8BA4\u3002</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A\u670D\u52A1\u5668\u6536\u5230SYN\u7801\u540E\u8FD4\u56DEACK\u7801\u8BE5ACK\u4E3A\u5BA2\u6237\u7AEF\u7684\u81EA\u6211\u4ECB\u7ECD+1 \u7528\u4E8E\u786E\u8BA4\u5EFA\u7ACB\u8FDE\u63A5\u5E76\u4E14\u8FD4\u56DE\u3002\u7136\u540E\u518D\u53D1\u9001\u4E00\u4E2A\u670D\u52A1\u5668\u7684\u81EA\u6211\u4ECB\u7ECD\u5230\u5BA2\u6237\u7AEF\u3002</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u670D\u52A1\u5668\u7684\u786E\u8BA4\u4FE1\u606F\u4EE5\u53CA\u81EA\u6211\u4ECB\u7ECD\u540E\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u670D\u52A1\u5668\u4FE1\u606F+1\u7684\u786E\u8BA4\u7801\uFF0C\u53D1\u9001\u5B8C\u6BD5\u540E\u8FDB\u884C\u94FE\u63A5\u7684\u5EFA\u7ACB\u3002</li></ol><h3 id="tcp\u4E0Eudp" tabindex="-1"><a class="header-anchor" href="#tcp\u4E0Eudp" aria-hidden="true">#</a> TCP\u4E0EUDP</h3><ol><li>TCP\u9762\u5411\u8FDE\u63A5\u7684\u4F20\u8F93\u534F\u8BAE\uFF0CUDP\u5219\u4E3A\u65E0\u8FDE\u63A5</li><li>TCP\u7528\u4E8E\u7AEF\u5230\u7AEF\u7684\u53EF\u9760\u8FDE\u63A5\uFF0CUDP\u5219\u53EF\u4EE5\u8FDB\u884C\u5E7F\u64AD\u7B49\u529F\u80FD</li><li>TCP\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\u8FDB\u884C\u53EF\u9760\u8FDE\u63A5\uFF0CUDP\u65E0\u8FDE\u63A5\uFF0C\u65E0\u9700\u786E\u8BA4\u5373\u53EF\u53D1\u9001</li><li>UDP\u5F00\u9500\u8F83\u5C0F\uFF0C\u4F20\u8F93\u901F\u7387\u4F1A\u66F4\u9AD8\uFF0C\u591A\u4E3A\u5185\u7F51\u4F20\u8F93\u6570\u636E</li><li>UDP\u56E0\u4E3A\u5E7F\u64AD\u7684\u539F\u56E0\u5BF9\u4E0E\u5B89\u5168\u65B9\u9762\uFF0C\u66F4\u5BB9\u6613\u88AB\u8FDB\u884C\u7BE1\u6539\u6216\u52AB\u6301</li></ol><h3 id="http\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#http\u72B6\u6001\u7801" aria-hidden="true">#</a> HTTP\u72B6\u6001\u7801</h3><ul><li>1xx\uFF1A\u4FE1\u606F\u7C7B</li><li>2xx\uFF1A\u6210\u529F\u7C7B</li><li>3xx\uFF1A\u91CD\u5B9A\u5411</li><li>4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF</li><li>5xx\uFF1A\u670D\u52A1\u7AEF\u9519\u8BEF</li></ul>',24),r=[h];function d(s,P){return a(),t("div",null,r)}var n=i(l,[["render",d],["__file","\u8BA1\u7B97\u673A\u7F51\u7EDC.html.vue"]]);export{n as default};

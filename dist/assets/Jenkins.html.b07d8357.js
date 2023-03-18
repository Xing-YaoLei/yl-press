import{_ as o,o as t,c as p,b as n,a,e as s,d as i,r as c}from"./app.096448e8.js";const d={},l=n("h1",{id:"\u524D\u7AEF\u81EA\u52A8\u5316\u90E8\u7F72\u4E4B-jenkins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u81EA\u52A8\u5316\u90E8\u7F72\u4E4B-jenkins","aria-hidden":"true"},"#"),s(" \u524D\u7AEF\u81EA\u52A8\u5316\u90E8\u7F72\u4E4B Jenkins")],-1),r=n("h2",{id:"\u5B89\u88C5-java-\u73AF\u5883\u4EE5\u53CA-jdk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5-java-\u73AF\u5883\u4EE5\u53CA-jdk","aria-hidden":"true"},"#"),s(" \u5B89\u88C5 Java \u73AF\u5883\u4EE5\u53CA JDK")],-1),u=s("\u670D\u52A1\u5668\u4E3A ubuntu\uFF0C\u4E0B\u8F7D Jenkins \u6B65\u9AA4\u53C2\u8003\u8BE6\u89C1"),m={href:"https://www.jenkins.io/zh/download/",target:"_blank",rel:"noopener noreferrer"},h=s("\u5B98\u65B9\u6587\u6863"),g=i(`<p>\u9996\u5148\u9700\u8981\u8BBE\u7F6E Jenkins \u7684\u8F6F\u4EF6\u5305\u5B58\u50A8\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
    /usr/share/keyrings/jenkins-keyring.asc <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0 Jenkins apt \u7684\u4ED3\u5E93\u5165\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> deb <span class="token punctuation">[</span>signed-by<span class="token operator">=</span>/usr/share/keyrings/jenkins-keyring.asc<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
    https://pkg.jenkins.io/debian-stable binary/ <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
    /etc/apt/sources.list.d/jenkins.list <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u672C\u5730\u7684\u5305\uFF0C\u4E4B\u540E\u8FDB\u884C Jenkins \u7684\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> fontconfig openjdk-11-jre
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=s("\u5728\u8F93\u5165\u5B8C\u6700\u540E\u4EE3\u7801\u540E\u53EF\u80FD\u4F1A\u51FA\u73B0\u62A5\u9519"),v=n("code",null,"Errors were encountered while processing",-1),b=s("\u7684\u76F8\u5173\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5F1F\u5144\u4EEC\u4E5F\u4E0D\u4F1A\uFF0C\u95FB\u9053\u6709\u5148\u540E\uFF0C\u672F\u4E1A\u6709\u4E13\u653B\uFF0C\u767E\u5EA6\u5F97\u5230"),f={href:"https://blog.csdn.net/qingfengxiaosong/article/details/87889995",target:"_blank",rel:"noopener noreferrer"},_=s("\u89E3\u51B3\u65B9\u6848"),j=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u51B3\u65B9\u6CD5</span>
<span class="token builtin class-name">cd</span> /var/lib/dpkg
<span class="token function">sudo</span> <span class="token function">mv</span> info info.bak
<span class="token function">sudo</span> <span class="token function">mkdir</span> info
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u89E3\u51B3\u5B8C\u6BD5\u4E4B\u540E\u91CD\u65B0\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> y<span class="token operator">|</span><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6BD5\u4E4B\u540E\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B\u7248\u672C\u53F7\u786E\u5B9A\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u65B0\u7248\u672C\u7684 jenkins \u9700\u8981\u4F7F\u7528<strong>JDK11</strong>\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -version
<span class="token comment"># openjdk version &quot;11.0.16&quot; 2022-07-19</span>
<span class="token comment"># OpenJDK Runtime Environment (build 11.0.16+8-post-Ubuntu-0ubuntu118.04)</span>
<span class="token comment"># OpenJDK 64-Bit Server VM (build 11.0.16+8-post-Ubuntu-0ubuntu118.04, mixed mode, sharing)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u884C-jenkins" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-jenkins" aria-hidden="true">#</a> \u8FD0\u884C Jenkins</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FDB\u5165-jenkins" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165-jenkins" aria-hidden="true">#</a> \u8FDB\u5165 Jenkins</h2><p>\u9996\u5148\u9700\u8981\u653E\u884C\u670D\u52A1\u5668\u7684 8080 \u7AEF\u53E3\uFF0C\u7136\u540E\u901A\u8FC7\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE<code>http://id\u5730\u5740:8080</code>\u5373\u53EF\u8FDB\u5165 Jenkins</p><p>\u8FDB\u5165\u4E4B\u540E\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u51FA\u73B0\u767B\u9646\u754C\u9762\uFF0C\u9700\u8981\u63D0\u4EA4\u5BC6\u7801\uFF0C\u5BC6\u7801\u6240\u5728\u8DEF\u5F84<code>/var/lib/jenkins/secrets</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /var/lib/jenkins/secrets/initialAdminPassword
<span class="token comment"># \u67E5\u770B\u9ED8\u8BA4\u5BC6\u7801\u586B\u5165\u5176\u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7D27\u63A5\u7740 Jenkins \u4F1A\u8BA9\u7528\u6237\u9009\u62E9\u5B89\u88C5\u63D2\u4EF6\uFF0C\u672C\u4EBA\u9009\u62E9\u63A8\u8350\u7684\u63D2\u4EF6\u5373\u53EF\u3002\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u5B89\u88C5\u5B8C\u6BD5\u540E\u3002\u9700\u8981\u521B\u5EFA\u7528\u6237\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 admin \u8D26\u6237\u767B\u9646\uFF0C\u4F46\u662F\u524D\u63D0\u4F60\u9700\u8981\u8BB0\u4F4F<code>initialAdminPassword</code>\u624D\u884C\u3002\u5426\u5219\u8FD8\u662F\u8001\u8001\u5B9E\u5B9E\u914D\u7F6E\u4E00\u4E2A\u81EA\u5DF1\u7684\u8D26\u6237\u5427\uFF5E</p><p><img src="https://oss.oh-undefined.com/202210220155811.png" alt="\u914D\u7F6E\u5B8C\u6210"></p><h2 id="\u4F7F\u7528-jenkins" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-jenkins" aria-hidden="true">#</a> \u4F7F\u7528 Jenkins</h2><p>\u9996\u9875\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u53EF\u80FD\u6839\u636E\u7248\u672C\u4E0D\u540C\u4F1A\u6709\u7EC6\u5FAE\u7684\u51FA\u5165\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022015735400.png" alt="image-20221022015735400"></p><p>\u5728\u521B\u5EFA\u4EFB\u52A1\u4E4B\u524D\u6211\u4EEC\u53EF\u4EE5\u63D0\u524D\u5148\u5C06\u4F9D\u8D56\u8FDB\u884C\u5B89\u88C5\u4E00\u4E0B\uFF0C\u9009\u62E9 Manage Jenkins\uFF0C\u7136\u540E\u9009\u62E9\u53F3\u4FA7\u83DC\u5355\u4E2D\u7684 Manager Plugins \u641C\u7D22\u6211\u4EEC\u9700\u8981\u7684\u63D2\u4EF6\u3002\u6211\u8FD9\u91CC\u5B89\u88C5\u4E86 nodejs\u3001nvm wrapper\uFF08\u63A7\u5236 nodejs \u7248\u672C\uFF09\u4EE5\u53CA Generic Webhook Trigger\uFF08\u7528\u4E8E\u89E6\u53D1\u81EA\u52A8\u90E8\u7F72\u7684\u63D2\u4EF6\uFF09</p><p><img src="https://oss.oh-undefined.com/image-20221022021326481.png" alt="image-20221022021326481"></p><p>\u5728\u5B89\u88C5\u5B8C\u6BD5\u63D2\u4EF6\u4E4B\u540E\u6211\u4EEC\u8FDB\u5165\u4EEA\u8868\u76D8 -&gt; \u7CFB\u7EDF\u7BA1\u7406 -&gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E\u4E0B\u53EF\u4EE5\u9009\u62E9 Nodejs \u7684\u5B89\u88C5\u7248\u672C\u6765\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022022705038.png" alt="image-20221022022705038"></p><p>\u7D27\u63A5\u7740\u6211\u4EEC\u56DE\u5230\u9996\u9875\u9009\u62E9\u65B0\u5EFA Item -&gt; \u586B\u5199\u4E00\u4E2A\u4F60\u89C9\u5F97\u5408\u9002\u7684\u4EFB\u52A1\u540D\u79F0 -&gt; Freestyle Project \u70B9\u51FB\u786E\u8BA4\u8FDB\u5165\u4E0B\u4E00\u6B65\u914D\u7F6E</p><p><img src="https://oss.oh-undefined.com/image-20221022020152876.png" alt="image-20221022020152876"></p><p>\u5728\u63CF\u8FF0\u7684\u680F\u76EE\u4E2D\u9488\u5BF9\u8FD9\u4E2A\u9879\u76EE\u53EF\u4EE5\u8FDB\u884C\u7B80\u5355\u7684\u63CF\u8FF0\uFF0C\u5728\u540E\u671F\u9879\u76EE\u90E8\u7F72\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8FDB\u884C\u6709\u6548\u7684\u533A\u5206\u3002</p><p>\u7EE7\u7EED\u5F80\u4E0B\u6211\u4EEC\u53EF\u4EE5\u53EF\u4EE5\u770B\u5230\u6E90\u7801\u7BA1\u7406\u9009\u62E9 Git \u540E\uFF0C\u5728 Repository URL \u4E2D\u586B\u5165\u4F60\u7684\u4EE3\u7801\u4ED3\u5E93\u5E76\u4E14\u5728 Credentials \u4E2D\u9009\u62E9\u4F60\u7684\u8D26\u53F7\u5BC6\u7801\u7B49\uFF0C\u5982\u679C\u6CA1\u6709\u53EF\u4EE5\u8FDB\u884C\u6DFB\u52A0\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022020413682.png" alt="image-20221022020413682"></p><p>\u5728\u4E0B\u65B9\u6784\u5EFA\u89E6\u53D1\u5668\u4E2D\u52FE\u9009 Generic Webhook Trigger \u7528\u6765\u642D\u914D\u63D0\u4EA4\u4E8B\u4EF6\u8FDB\u884C\u9879\u76EE\u7684\u540C\u6B65\u66F4\u65B0\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022022924306.png" alt="image-20221022022924306"></p><p>\u518D\u5F80\u4E0B\u53EF\u4EE5\u52FE\u9009<code>Provide Node &amp; npm bin/folder to Path</code>\u9009\u9879\u7528\u6765\u9009\u62E9 nodejs \u7248\u672C</p><p><img src="https://oss.oh-undefined.com/image-20221022023017034.png" alt="image-20221022023017034"></p><p>\u5728 Build Steps \u4E2D\u6211\u4EEC\u9009\u62E9\u6267\u884C shell \u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
<span class="token function">node</span> -v
<span class="token comment"># \u67E5\u770Bnode\u7248\u672C</span>
<span class="token function">npm</span> -v
<span class="token comment"># \u67E5\u770Bnpm\u7248\u672C</span>

<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># \u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</span>
<span class="token builtin class-name">pwd</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u6784\u5EFA\u5B8C\u6210&#39;</span>
<span class="token comment"># \u91CD\u542Fpm2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u91CD\u542F\u5B8C\u6210&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u76EE\u524D\u6211\u5728\u4F7F\u7528\u7684\u662F pm2 \u8FDB\u884C\u9879\u76EE\u7684\u81EA\u52A8\u66F4\u65B0\uFF0C\u5F53\u4EE3\u7801\u62C9\u53D6\u4E0B\u6765\u4E4B\u540E pm2 \u4F1A\u81EA\u52A8\u8FD0\u884C\u66F4\u65B0\u7A0B\u5E8F\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u672C\u4EBA\u53EA\u662F\u8FDB\u884C\u4E86\u524D\u7AEF\u9879\u76EE\u4F9D\u8D56\u7684\u5B89\u88C5\u5E76\u6CA1\u6709\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p><p>\u7406\u8BBA\u4E0A\u8FD9\u91CC\u672C\u6765\u662F\u60F3\u8981\u8DD1 pm2 restart all \u6765\u91CD\u542F\u7A0B\u5E8F\u7684\uFF0C\u4F46\u662F Jenkins \u4F1A\u81EA\u52A8\u7ED9\u6740\u9664\u884D\u751F\u7A0B\u5E8F\u3002</p><p>\u5F53\u7136\u9996\u5148\u662F\u767E\u5EA6\u7684\uFF0C\u76EE\u524D\u767E\u5EA6\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u6CD5\u3002\u7B2C\u4E00\u79CD\u5219\u662F\u914D\u7F6E<strong>BUILD_ID</strong>\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u5219\u662F\u5168\u5C40\u914D\u7F6E\u3002\u4E24\u79CD\u65B9\u6CD5\u90FD\u6709\u5C1D\u8BD5\u8FC7\uFF0C\u5728 shell \u4E2D\u8FD0\u884C pm2 \u4F9D\u65E7\u662F\u6CA1\u6709\u663E\u793A\u4EFB\u4F55\u7684\u7A0B\u5E8F\u8FD0\u884C\u3002</p><p>\u4F3C\u4E4E\u662F\u4E0D\u80FD\u5C06\u9879\u76EE\u5B58\u653E\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u56E0\u4E3A\u5B83\u662F\u6CA1\u6709\u6743\u9650\u7684\uFF0C\u6240\u4EE5\u6211\u5728\u8FD9\u91CC\u5C06\u76EE\u5F55\u79FB\u51FAroot\u8DEF\u5F84\u4E0B\uFF0C\u89E3\u51B3\u4E86\u8BE5\u95EE\u9898\u3002</p><p>\u8FD9\u91CC\u5341\u5206\u611F\u8C22\u5F1F\u5144\u4EEC\u7684\u4E00\u4E2A\u8FD0\u7EF4\u670B\u53CB&quot;&quot;\u5A18\u6F2B&quot;\uFF0C\u5E2E\u52A9\u4E86\u81EA\u5DF1\u89E3\u51B3\u4E86\u5F88\u591AJenkins\u76F8\u5173\u7684\u95EE\u9898\u3002</p></div><p>\u914D\u7F6E WebHooks\uFF0C\u8FDB\u5165 Gitee \u7684\u9879\u76EE\u4E2D\uFF0C\u9009\u62E9\u7BA1\u7406 -&gt; WebHooks -&gt; \u586B\u5165 URL URL \u7684\u7EC4\u6210\u4E3A <code>http://\u7528\u6237\u540D:userId@\u670D\u52A1\u5668IP:Jenkins\u7AEF\u53E3/generic-webhook-trigger/invoke</code></p><p><img src="https://oss.oh-undefined.com/image-20221023012505990.png" alt="image-20221023012505990"></p><p>\u7528\u6237\u540D\u7684\u67E5\u770B\u65B9\u5F0F\u9700\u8981\u8FDB\u5165\u7528\u6237\u5217\u8868\uFF0C\u70B9\u51FB\u6240\u8981\u67E5\u770B\u7684\u7528\u6237\uFF0C\u7136\u540E\u751F\u6210\u7528\u6237 ID \u5373\u53EF\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022024230224.png" alt="image-20221022024230224"></p><p>\u6DFB\u52A0\u5B8C\u6210\u540E\u4F8B\u5B50\uFF1A<code>http://UserName:userId@ip:port/generic-webhook-trigger/invoke</code>\u7136\u540E\u70B9\u51FB\u6D4B\u8BD5\u53EF\u4EE5\u770B\u5230 Jenkins \u7684\u770B\u677F\u662F\u6709\u90E8\u7F72\u9879\u76EE\u7684\u8FDB\u5EA6\u5B58\u5728\u7684\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221022024427094.png" alt="image-20221022024427094"></p><h2 id="\u4FEE\u6539\u9ED8\u8BA4\u5B58\u50A8\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u5B58\u50A8\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u5B58\u50A8\u6587\u4EF6\u5939</h2><p>\u867D\u7136 Jenkins \u4E0A\u9762\u5DF2\u7ECF\u5F00\u59CB\u90E8\u7F72\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C\u9879\u76EE\u90E8\u7F72\u5230\u4E86<code>/var/lib/jenkins/workspace/\u9879\u76EE</code>\u4E2D\uFF0C\u4F46\u662F\u6211\u4EEC\u7684\u9879\u76EE\u53EF\u80FD\u4F1A\u5B58\u653E\u5728\u5176\u4ED6\u6587\u4EF6\u5939\u4E2D\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9879\u76EE\u914D\u7F6E\u7684 General \u4E2D\u9009\u62E9\u9AD8\u7EA7-&gt;\u52FE\u9009\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5DE5\u4F5C\u7A7A\u95F4</p><p><img src="https://oss.oh-undefined.com/image-20221022191043881.png" alt="image-20221022191043881"></p>`,41),J={class:"custom-container tip"},S=n("p",{class:"custom-container-title"},"\u6743\u9650",-1),x=s("\u5728\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u7A7A\u95F4\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u9047\u5230\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u6587\u4EF6\u5939\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528"),w=n("code",null,"chmod 777",-1),P=s("\u6765\u5C06\u6587\u4EF6\u5939\u8D4B\u4E88\u8BFB\u5199\u6743\u9650\u3002\u5177\u4F53\u8BE5\u547D\u4EE4\u5982\u4F55"),R={href:"https://www.baidu.com/s?wd=chmod",target:"_blank",rel:"noopener noreferrer"},U=s("\u4F7F\u7528"),I=s("\u3002"),G=i('<p>\u8BBE\u7F6E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u9879\u76EE\u5373\u53EF\u81EA\u52A8\u62C9\u53D6\u5230\u670D\u52A1\u5668\u4E2D\u3002</p><h2 id="\u591A\u9879\u76EE\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u591A\u9879\u76EE\u90E8\u7F72" aria-hidden="true">#</a> \u591A\u9879\u76EE\u90E8\u7F72</h2><p>\u5C1D\u8BD5\u8FC7\u90E8\u7F72\u7684\u540C\u5B66\u53EF\u80FD\u5DF2\u7ECF\u53D1\u73B0\u4E86\uFF0C\u6211\u4EEC\u5728\u90E8\u7F72\u4E00\u4E2A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u80FD\u591F\u6B63\u5E38\u89E6\u53D1\uFF0C\u4F46\u662F\u90E8\u7F72\u4E24\u4E2A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5728\u8BBE\u7F6E WeHooks \u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u9879\u76EE\u5728\u540C\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u6240\u4EE5 WeHooks \u662F\u4E00\u6837\u7684\uFF0C\u5F53\u4E00\u4E2A\u9879\u76EE\u63D0\u4EA4<code>Commit</code>\u7684\u65F6\u5019\uFF0C<strong>\u6240\u6709\u9879\u76EE\u90FD\u4F1A\u91CD\u65B0\u90E8\u7F72</strong>\uFF0C\u8FD9\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u3002</p><p>\u90A3\u6211\u4EEC\u56DE\u5230\u9879\u76EE\u7684\u914D\u7F6E\u7BA1\u7406\u4E2D\u53BB\uFF0C\u627E\u5230 Generic Webhook Trigger \u4E0B\u65B9\u7684 token \u9009\u9879\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221026114051300.png" alt="image-20221026114051300"></p><p>\u5728\u8FD9\u4E2A\u4F4D\u7F6E\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u672C\u9879\u76EE\u7684 Token \u4F5C\u4E3A\u9879\u76EE\u4E2D\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u5730\u65B9\u6211\u90E8\u7F72\u7684\u662F\u4E2A\u4EBA\u7684 VuePress \u535A\u5BA2\u9879\u76EE\uFF0C\u6240\u4EE5\u6211\u5C31\u7B80\u5355\u4F7F\u7528 VuePress \u6765\u4F5C\u4E3A\u9879\u76EE\u7684 Token \u4E86\u3002</p><p>\u8BBE\u7F6E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u6211\u4EEC\u5E94\u7528\u5E76\u4E14\u4FDD\u5B58\uFF0C\u56DE\u5230\u6211\u4EEC\u7684 Gitee \u6216\u8005\u662F\u5176\u4ED6\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0\uFF0C\u8FDB\u5165\u9879\u76EE -&gt; \u7BA1\u7406 -&gt; Wehooks\uFF0C\u5728\u6211\u4EEC\u539F\u672C\u7684 URL \u4E2D\uFF0C\u91CD\u65B0\u914D\u7F6E<code>http://JENKINS_URL@IPADDRESS:PORT/generic-webhook-trigger/invoke?token=vuepress</code>\u5373\u53EF\u3002<code>JENKINS_URL</code>\u4EE5\u53CA<code>IPADDRESS:PORT</code>\u540C\u4E0A\u65B9\u914D\u7F6E\u6559\u7A0B\u4E00\u81F4\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221026114525492.png" alt="image-20221026114525492"></p><p>\u8FD9\u6837\u6211\u4EEC\u7684 Jenkins \u5728\u63A5\u6536\u5230\u9879\u76EE\u7684\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u4FBF\u4E0D\u4F1A\u89E6\u53D1\u4E24\u4E2A\u9879\u76EE\u6216\u8005\u591A\u4E2A\u9879\u76EE\u7684\u94A9\u5B50\u8FDB\u884C\u5168\u90E8\u90E8\u7F72\u4E86\u3002</p><h2 id="\u901A\u8FC7-ssh-\u6765\u5B8C\u6210\u670D\u52A1\u5668\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-ssh-\u6765\u5B8C\u6210\u670D\u52A1\u5668\u90E8\u7F72" aria-hidden="true">#</a> \u901A\u8FC7 SSH \u6765\u5B8C\u6210\u670D\u52A1\u5668\u90E8\u7F72</h2><p>\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u5B89\u88C5\u8FC7 Jenkins \u4E4B\u540E\u53D1\u73B0\u670D\u52A1\u5668\u597D\u50CF\u5E26\u4E0D\u52A8\u4E86\uFF0C\u518D\u901A\u8FC7 SSH \u8BBF\u95EE\u6211\u7684\u670D\u52A1\u5668\u7684\u65F6\u5019\u5C31\u4F1A\u5F88\u5361\u987F\uFF0C\u4E2A\u4EBA\u670D\u52A1\u5668\u914D\u7F6E\u4E3A\u963F\u91CC\u4E91<code>ecs.t6</code> 2 \u6838 CPU\u30012G \u5185\u5B58\u4EE5\u53CA 40G \u786C\u76D8\uFF0C\u8D77\u521D\u4EE5\u4E3A\u662F\u5BB6\u91CC\u9762\u7F51\u7EDC\u95EE\u9898\uFF0C\u6253\u6E38\u620F\u90FD\u4E0D\u5361\u5C31\u7ED9\u5B83\u6392\u9664\u4E86\uFF0C\u540E\u6765\u963F\u91CC\u4E91\u63D0\u9192\u6027\u80FD\u53D7\u9650\uFF0C\u5F00\u542F\u65E0\u6027\u80FD\u7EA6\u675F\u540E\uFF0C\u560E\u560E\u8D39\u94B1\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221104115230302.png" alt="image-20221104115230302"></p><p>\u7136\u540E\u6211\u53C8\u53BB\u4E70\u4E86\u4E2A\u534E\u4E3A\u4E91\u7684\u670D\u52A1\u5668\uFF0C100 \u5757\u94B1 2 \u6838 4G \u5185\u5B58\u4EE5\u53CA 40G \u786C\u76D8\u5F53\u4F5C Jenkisn \u670D\u52A1\u5668\uFF0C\u7136\u540E\u901A\u8FC7 SSH \u5DE5\u5177<code>Publish Over SSH</code>\u6765\u63A7\u5236\u6211\u7684\u963F\u91CC\u4E91\u670D\u52A1\u5668\u8FDB\u884C\u9879\u76EE\u90E8\u7F72\uFF08\u6B64\u5904\u7701\u7565\u4E86\u5728\u534E\u4E3A\u4E91\u670D\u52A1\u5668\u4E0A\u5B89\u88C5 Jenkins \u7684\u6B65\u9AA4\uFF0C\u7167\u7740\u4E0A\u9762\u6765\u5C31\u884C\u4E86\uFF09\uFF0C\u5B89\u88C5\u5B8C\u4E4B\u540E\uFF0C\u5728\u63D2\u4EF6\u5E02\u573A\u5B89\u88C5<code>Publish Over SSH</code></p><p><img src="https://oss.oh-undefined.com/image-20221104115536760.png" alt="image-20221104115536760"></p><p>\u8FDB\u5165\u7CFB\u7EDF\u8BBE\u7F6E\u627E\u5230\u6211\u4EEC\u521A\u624D\u5B89\u88C5\u7684 Publish over SSH \u63D2\u4EF6\u7684\u914D\u7F6E\u4F4D\u7F6E\u8FDB\u884C\u914D\u7F6E\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221104123010429.png" alt="image-20221104123010429"></p><p>\u5728\u7BAD\u5934\u6307\u5411\u65B9\u4F4D\u6DFB\u52A0\u5BF9\u5E94\u7684\u540D\u79F0\u3001IP \u5730\u5740\u3001\u7528\u6237\u540D\u3001\u8FDC\u7A0B\u7684\u76EE\u5F55\uFF0C\u6DFB\u52A0\u5B8C\u6210\u540E\u9009\u62E9\u9AD8\u7EA7\uFF0C\u9009\u62E9 Use password authentication, or use a different key \u9009\u9879\u8F93\u5165\u670D\u52A1\u5668\u7684\u5BC6\u7801\uFF0C\u70B9\u51FB Test configuration \u6D4B\u8BD5\u6210\u529F\u4E0E\u5426\u3002</p><blockquote><p>\u6574\u4E2A\u601D\u8DEF\u5927\u81F4\u662F\u8FD9\u6837\u7684\uFF1A\u4E00\u4E2A\u670D\u52A1\u5668\u4E13\u95E8\u7528\u6765\u5B58\u653E\u4E2A\u4EBA\u7684\u4E00\u4E9B\u7F51\u7AD9\u4EE5\u53CA\u535A\u5BA2\u7684\u9879\u76EE\uFF0C\u7136\u540E\u53E6\u4E00\u4E2A\u670D\u52A1\u5668\u5B89\u88C5Jenkins\u901A\u8FC7\u4ED3\u5E93\u7684webhooks\u6765\u89E6\u53D1\u94A9\u5B50\uFF0C\u7136\u540E\u901A\u8FC7SSH\u6765\u63A5\u5165\u9879\u76EE\u7684\u4ED3\u5E93\u5730\u5740\uFF0C\u6267\u884C\u4E00\u7CFB\u5217\u90E8\u7F72\u7684\u64CD\u4F5C\u3002</p></blockquote><p>\u4F9D\u65E7\u662F\u6309\u7167\u4E0A\u65B9\u521B\u5EFA\u4E00\u4E2A\u6D41\u6C34\u7EBF\u9879\u76EE\uFF08\u56E0\u4E3Agitee\u7684\u4ED3\u5E93\u90E8\u5206\u529F\u80FD\u4E0D\u5B8C\u5584\uFF0C\u6240\u4EE5\u6211\u5C06\u4ED3\u5E93\u6362\u5230\u4E86github\u4E0A\u9762\uFF09</p><p><img src="https://oss.oh-undefined.com/image-20221123104119979.png" alt="image-20221123104119979"></p><p>\u521D\u59CB\u5316\u7684\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u52FE\u9009github\u4ED3\u5E93\uFF0C\u7136\u540E\u5C06\u9879\u76EE\u7684\u4ED3\u5E93URL\u653E\u5165\u8F93\u5165\u6846\u5185\uFF08<strong>\u6CE8\u610F \u662F\u4ED3\u5E93\u7684URL\uFF0C\u4E0D\u662F\u4ED3\u5E93\u7684Git\u7684URL</strong>\uFF09\u653E\u5165\u540E\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u50CF\u4EE5\u524D\u4E00\u6837\uFF0C\u52FE\u9009\u4E0B\u65B9\u7684\u6E90\u4EE3\u7801\u7BA1\u7406\u4E86</p><p><img src="https://oss.oh-undefined.com/image-20221123104246038.png" alt="image-20221123104246038"></p><p>\u4F9D\u65E7\u662F\u52FE\u9009Generic Webhook Trigger\u6765\u89E6\u53D1\u4ED3\u5E93\u53D8\u52A8\u7684\u94A9\u5B50\u{1FA9D}\u3002\u7136\u540E\u7EE7\u7EED\u5411\u4E0B\u6ED1\uFF0C\u5230Build Steps\u7684\u9009\u9879\u4E2D\u53BB\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221123104407867.png" alt="image-20221123104407867"></p><p>\u56E0\u4E3A\u4E4B\u524D\u5DF2\u7ECF\u914D\u7F6E\u8FC7SSH\u670D\u52A1\u5668\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u5728\u8FD9\u4E2A\u5730\u65B9\u586B\u4E0A\u5BF9\u5E94\u7684\u540D\u5B57\uFF0C\u7136\u540E\u5728\u4E0B\u65B9\u7684Exec Command \u8F93\u5165\u6211\u4EEC\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u540E\u7684\u64CD\u4F5C\u5373\u53EF\uFF0C\u6700\u540E\u70B9\u51FB\u5E94\u7528\u4EE5\u53CA\u4FDD\u5B58\u5373\u53EF\u8FD4\u56DE\u5230\u9879\u76EE\u9875\u9762\u3002\u7136\u540E\u6211\u4EEC\u5C1D\u8BD5\u70B9\u51FB\u7ACB\u5373\u6784\u5EFA\u8BD5\u8BD5\u770B\u3002</p><p><img src="https://oss.oh-undefined.com/image-20221123104549963.png" alt="image-20221123104549963"></p><p>\u6210\u529F\u4E86\uFF0C\u7136\u540E\u6211\u4EEC\u901A\u8FC7\u70B9\u51FB\u6B64\u9879\u76EE\u53EF\u4EE5\u8FDB\u5165\u6B64\u6B21\u6784\u5EFA\u7684\u8BE6\u60C5\u4EE5\u53CA\u67E5\u770B\u6784\u5EFA\u65F6\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u5185\u5BB9\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA\u6765\u5224\u65AD\u662F\u5426\u9879\u76EE\u8FD0\u884C\u6210\u529F\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u8BBF\u95EE\u81EA\u5DF1\u7684\u7F51\u7AD9\u67E5\u770B\u662F\u5426\u66F4\u65B0\u4E5F\u53EF\u4EE5\u{1F389}\u3002</p>',27);function L(y,H){const e=c("ExternalLinkIcon");return t(),p("div",null,[l,r,n("p",null,[u,n("a",m,[h,a(e)])]),g,n("p",null,[k,v,b,n("a",f,[_,a(e)])]),j,n("div",J,[S,n("p",null,[x,w,P,n("a",R,[U,a(e)]),I])]),G])}var N=o(d,[["render",L],["__file","Jenkins.html.vue"]]);export{N as default};
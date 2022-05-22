import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as c,c as l,a as e,b as s,F as a,e as o,d}from"./app.9c037f97.js";var i="/assets/1.844da2bf.png",_="/assets/2.cea1c99e.png",u="/assets/3.3b11bef3.png";const h={},k=e("p",null,"Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u57FA\u4E8E Go \u8BED\u8A00 \u5E76\u9075\u4ECE Apache2.0 \u534F\u8BAE\u5F00\u6E90\u3002Docker \u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u3001\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\u3002\u5BB9\u5668\u662F\u5B8C\u5168\u4F7F\u7528\u6C99\u7BB1\u673A\u5236\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u63A5\u53E3\uFF08\u7C7B\u4F3C iPhone \u7684 app\uFF09,\u66F4\u91CD\u8981\u7684\u662F\u5BB9\u5668\u6027\u80FD\u5F00\u9500\u6781\u4F4E\u3002Docker \u4ECE 17.03 \u7248\u672C\u4E4B\u540E\u5206\u4E3A CE\uFF08Community Edition: \u793E\u533A\u7248\uFF09 \u548C EE\uFF08Enterprise Edition: \u4F01\u4E1A\u7248\uFF09\uFF0C\u6211\u4EEC\u7528\u793E\u533A\u7248\u5C31\u53EF\u4EE5\u4E86\u3002",-1),p=e("h2",{id:"docker-\u67B6\u6784",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-\u67B6\u6784","aria-hidden":"true"},"#"),o(" Docker \u67B6\u6784")],-1),m=e("p",null,"Docker \u4F7F\u7528\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668 (C/S) \u67B6\u6784\u6A21\u5F0F\uFF0C\u4F7F\u7528\u8FDC\u7A0BAPI\u6765\u7BA1\u7406\u548C\u521B\u5EFADocker\u5BB9\u5668\u3002Docker \u5BB9\u5668\u901A\u8FC7 Docker \u955C\u50CF\u6765\u521B\u5EFA\u3002\u5BB9\u5668\u4E0E\u955C\u50CF\u7684\u5173\u7CFB\u7C7B\u4F3C\u4E8E\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\u7684\u5BF9\u8C61\u4E0E\u7C7B\u3002",-1),D=e("p",null,"Docker\u7684\u4E09\u4E2A\u57FA\u672C\u6982\u5FF5:",-1),g=e("ul",null,[e("li",null,"\u955C\u50CF\uFF08Image\uFF09\uFF1ADocker \u955C\u50CF\uFF08Image\uFF09\uFF0C\u5C31\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A root \u6587\u4EF6\u7CFB\u7EDF\u3002\u6BD4\u5982\u5B98\u65B9\u955C\u50CF ubuntu:16.04 \u5C31\u5305\u542B\u4E86\u5B8C\u6574\u7684\u4E00\u5957 Ubuntu16.04 \u6700\u5C0F\u7CFB\u7EDF\u7684 root \u6587\u4EF6\u7CFB\u7EDF\u3002"),e("li",null,"\u5BB9\u5668\uFF08Container\uFF09\uFF1A\u955C\u50CF\uFF08Image\uFF09\u548C\u5BB9\u5668\uFF08Container\uFF09\u7684\u5173\u7CFB\uFF0C\u5C31\u50CF\u662F\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1\u4E2D\u7684\u7C7B\u548C\u5B9E\u4F8B\u4E00\u6837\uFF0C\u955C\u50CF\u662F\u9759\u6001\u7684\u5B9A\u4E49\uFF0C\u5BB9\u5668\u662F\u955C\u50CF\u8FD0\u884C\u65F6\u7684\u5B9E\u4F53\u3002\u5BB9\u5668\u53EF\u4EE5\u88AB\u521B\u5EFA\u3001\u542F\u52A8\u3001\u505C\u6B62\u3001\u5220\u9664\u3001\u6682\u505C\u7B49\u3002"),e("li",null,"\u4ED3\u5E93\uFF08Repository\uFF09\uFF1A\u4ED3\u5E93\u53EF\u770B\u6210\u4E00\u4E2A\u4EE3\u7801\u63A7\u5236\u4E2D\u5FC3\uFF0C\u7528\u6765\u4FDD\u5B58\u955C\u50CF\u3002")],-1),b=e("p",null,[e("img",{src:i,alt:"",loading:"lazy"})],-1),f=e("thead",null,[e("tr",null,[e("th",null,"\u6982\u5FF5"),e("th",null,"\u8BF4\u660E")])],-1),x=e("tr",null,[e("td",null,"Docker \u955C\u50CF(Images)"),e("td",null,"Docker \u955C\u50CF\u662F\u7528\u4E8E\u521B\u5EFA Docker \u5BB9\u5668\u7684\u6A21\u677F\uFF0C\u6BD4\u5982 Ubuntu \u7CFB\u7EDF\u3002")],-1),y=e("tr",null,[e("td",null,"Docker \u5BB9\u5668(Container)"),e("td",null,"\u5BB9\u5668\u662F\u72EC\u7ACB\u8FD0\u884C\u7684\u4E00\u4E2A\u6216\u4E00\u7EC4\u5E94\u7528\uFF0C\u662F\u955C\u50CF\u8FD0\u884C\u65F6\u7684\u5B9E\u4F53\u3002")],-1),C=e("tr",null,[e("td",null,"Docker \u5BA2\u6237\u7AEF(Client)"),e("td",null,"Docker \u5BA2\u6237\u7AEF\u901A\u8FC7\u547D\u4EE4\u884C\u6216\u8005\u5176\u4ED6\u5DE5\u5177\u4F7F\u7528 Docker SDK (https://docs.docker.com/develop/sdk/) \u4E0E Docker \u7684\u5B88\u62A4\u8FDB\u7A0B\u901A\u4FE1\u3002")],-1),E=e("tr",null,[e("td",null,"Docker \u4E3B\u673A(Host)"),e("td",null,"\u4E00\u4E2A\u7269\u7406\u6216\u8005\u865A\u62DF\u7684\u673A\u5668\u7528\u4E8E\u6267\u884C Docker \u5B88\u62A4\u8FDB\u7A0B\u548C\u5BB9\u5668\u3002")],-1),v=e("td",null,"Docker Registry",-1),I=o("Docker \u4ED3\u5E93\u7528\u6765\u4FDD\u5B58\u955C\u50CF\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4EE3\u7801\u63A7\u5236\u4E2D\u7684\u4EE3\u7801\u4ED3\u5E93\u3002 Docker Hub("),V={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},z=o("https://hub.docker.com"),A=o(") \u63D0\u4F9B\u4E86\u5E9E\u5927\u7684\u955C\u50CF\u96C6\u5408\u4F9B\u4F7F\u7528\u3002 \u4E00\u4E2A Docker Registry \u4E2D\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u4ED3\u5E93\uFF08Repository\uFF09\uFF1B\u6BCF\u4E2A\u4ED3\u5E93\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u6807\u7B7E\uFF08Tag\uFF09\uFF1B\u6BCF\u4E2A\u6807\u7B7E\u5BF9\u5E94\u4E00\u4E2A\u955C\u50CF\u3002 \u901A\u5E38\uFF0C\u4E00\u4E2A\u4ED3\u5E93\u4F1A\u5305\u542B\u540C\u4E00\u4E2A\u8F6F\u4EF6\u4E0D\u540C\u7248\u672C\u7684\u955C\u50CF\uFF0C\u800C\u6807\u7B7E\u5C31\u5E38\u7528\u4E8E\u5BF9\u5E94\u8BE5\u8F6F\u4EF6\u7684\u5404\u4E2A\u7248\u672C\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <\u4ED3\u5E93\u540D>:<\u6807\u7B7E> \u7684\u683C\u5F0F\u6765\u6307\u5B9A\u5177\u4F53\u662F\u8FD9\u4E2A\u8F6F\u4EF6\u54EA\u4E2A\u7248\u672C\u7684\u955C\u50CF\u3002\u5982\u679C\u4E0D\u7ED9\u51FA\u6807\u7B7E\uFF0C\u5C06\u4EE5 "),B=e("strong",null,"latest",-1),M=o(" \u4F5C\u4E3A\u9ED8\u8BA4\u6807\u7B7E\u3002"),N=e("tr",null,[e("td",null,"Docker Machine"),e("td",null,"Docker Machine\u662F\u4E00\u4E2A\u7B80\u5316Docker\u5B89\u88C5\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u547D\u4EE4\u884C\u5373\u53EF\u5728\u76F8\u5E94\u7684\u5E73\u53F0\u4E0A\u5B89\u88C5Docker\uFF0C\u6BD4\u5982VirtualBox\u3001 Digital Ocean\u3001Microsoft Azure\u3002")],-1),R=d('<h2 id="\u5B89\u88C5docker-mac" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker-mac" aria-hidden="true">#</a> \u5B89\u88C5docker(MAC)</h2><p>\u4E0B\u8F7DDocker.dmg http://mirrors.aliyun.com/docker-toolbox/mac/docker-for-mac/stable/</p><p><img src="'+_+'" alt="" loading="lazy"></p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="docker\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> Docker\u955C\u50CF\u52A0\u901F</h2>',5);function L(S,F){const t=n("ExternalLinkIcon");return c(),l(a,null,[k,p,m,D,g,b,e("table",null,[f,e("tbody",null,[x,y,C,E,e("tr",null,[v,e("td",null,[I,e("a",V,[z,s(t)]),A,B,M])]),N])]),R],64)}var T=r(h,[["render",L],["__file","docker\u4ECB\u7ECD.html.vue"]]);export{T as default};

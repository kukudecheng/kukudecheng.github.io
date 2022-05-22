import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.9c037f97.js";const s={},n=e(`<h2 id="_1\u3001\u5220\u9664\u539F\u6709\u7684yum" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5220\u9664\u539F\u6709\u7684yum" aria-hidden="true">#</a> 1\u3001\u5220\u9664\u539F\u6709\u7684yum</h2><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>rpm <span class="token operator">-</span>aq<span class="token punctuation">|</span>grep yum<span class="token punctuation">|</span>xargs rpm <span class="token operator">-</span>e <span class="token operator">--</span>nodeps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2\u3001\u6839\u636E\u7CFB\u7EDF\u7248\u672C-\u4E0B\u8F7D\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6839\u636E\u7CFB\u7EDF\u7248\u672C-\u4E0B\u8F7D\u5B89\u88C5\u5305" aria-hidden="true">#</a> 2\u3001\u6839\u636E\u7CFB\u7EDF\u7248\u672C\uFF0C\u4E0B\u8F7D\u5B89\u88C5\u5305</h2><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 http://mirrors.163.com/centos/7/os/x86_64/Packages/ \uFF0C\u627E\u5230\u4EE5\u4E0B\u56DB\u4E2A\u6587\u4EF6\uFF1A</p><ul><li>yum-*.rpm</li><li>yum-metadata-parser-*.rpm</li><li>yum-plugin-fastestmirror-*.rpm</li><li>python-iniparse-*.rpm</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>wget http:<span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>163<span class="token punctuation">.</span>com/centos/7/os/x86_64/Packages/<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3\u3001\u5B89\u88C5yum" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5B89\u88C5yum" aria-hidden="true">#</a> 3\u3001\u5B89\u88C5yum</h2><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>rpm <span class="token operator">-</span>ivh http:<span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>163<span class="token punctuation">.</span>com/centos/7/os/x86_64/Packages/python-iniparse-0<span class="token punctuation">.</span>4-9<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>noarch<span class="token punctuation">.</span>rpm
rpm <span class="token operator">-</span>ivh <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5B89\u88C5\u5305\u76F8\u4E92\u6709\u4F9D\u8D56\uFF0C\u5B89\u88C5\u65F6\u9700\u8981\u6CE8\u610F\u987A\u5E8F\uFF1A</p><ol><li>\u5B89\u88C5python-iniparse</li><li>\u5B89\u88C5yum-metadata-parser</li><li>yum\u548Cyum-plugin-fastestmirror\u4E00\u8D77\u5B89\u88C5</li></ol></blockquote><h2 id="_4\u3001\u8FD0\u884Cmakecache-\u751F\u6210\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u8FD0\u884Cmakecache-\u751F\u6210\u7F13\u5B58" aria-hidden="true">#</a> 4\u3001\u8FD0\u884Cmakecache \u751F\u6210\u7F13\u5B58</h2><p>\u547D\u4EE4\uFF1A<code>yum makecache</code></p><h2 id="_5\u3001\u8FD0\u884Cyum-clean-all" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u8FD0\u884Cyum-clean-all" aria-hidden="true">#</a> 5\u3001\u8FD0\u884Cyum clean all</h2><p>\u547D\u4EE4\uFF1A<code>yum clean all</code></p><h2 id="_6\u3001\u66F4\u65B0yum\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u66F4\u65B0yum\u6587\u4EF6" aria-hidden="true">#</a> 6\u3001\u66F4\u65B0yum\u6587\u4EF6</h2><p>\u547D\u4EE4\uFF1A<code>yum update</code></p>`,15);function p(r,o){return n}var c=a(s,[["render",p],["__file","\u5B89\u88C5yum.html.vue"]]);export{c as default};

import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{d as a}from"./app.9c037f97.js";const n={},t=a(`<ol><li>\u3010\u5F3A\u5236\u3011\u5728\u8868\u67E5\u8BE2\u4E2D\uFF0C\u4E00\u5F8B\u4E0D\u8981\u4F7F\u7528 * \u4F5C\u4E3A\u67E5\u8BE2\u7684\u5B57\u6BB5\u5217\u8868\uFF0C\u9700\u8981\u54EA\u4E9B\u5B57\u6BB5\u5FC5\u987B\u660E\u786E\u5199\u660E\u3002</li></ol><div class="custom-container warning"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>1\uFF09\u589E\u52A0\u67E5\u8BE2\u5206\u6790\u5668\u89E3\u6790\u6210\u672C\u3002</li><li>2\uFF09\u589E\u51CF\u5B57\u6BB5\u5BB9\u6613\u4E0E resultMap \u914D\u7F6E\u4E0D\u4E00\u81F4\u3002</li><li>3\uFF09\u65E0\u7528\u5B57\u6BB5\u589E\u52A0\u7F51\u7EDC\u6D88\u8017\uFF0C\u5C24\u5176\u662F text \u7C7B\u578B\u7684\u5B57\u6BB5\u3002</li></ul></div><ol start="2"><li>\u3010\u5F3A\u5236\u3011POJO \u7C7B\u7684\u5E03\u5C14\u5C5E\u6027\u4E0D\u80FD\u52A0 is\uFF0C\u800C\u6570\u636E\u5E93\u5B57\u6BB5\u5FC5\u987B\u52A0 is_\uFF0C\u8981\u6C42\u5728 resultMap \u4E2D\u8FDB\u884C\u5B57\u6BB5\u4E0E\u5C5E\u6027\u4E4B\u95F4\u7684\u6620\u5C04\u3002</li></ol><div class="custom-container warning"><p class="custom-container-title">\u8BF4\u660E</p><p>\u53C2\u89C1\u5B9A\u4E49 POJO \u7C7B\u4EE5\u53CA\u6570\u636E\u5E93\u5B57\u6BB5\u5B9A\u4E49\u89C4\u5B9A\uFF0C\u5728 sql.xml \u589E\u52A0\u6620\u5C04\uFF0C\u662F\u5FC5\u987B\u7684\u3002</p></div><ol start="3"><li>\u3010\u5F3A\u5236\u3011\u4E0D\u8981\u7528 resultClass \u5F53\u8FD4\u56DE\u53C2\u6570\uFF0C\u5373\u4F7F\u6240\u6709\u7C7B\u5C5E\u6027\u540D\u4E0E\u6570\u636E\u5E93\u5B57\u6BB5\u4E00\u4E00\u5BF9\u5E94\uFF0C\u4E5F\u9700\u8981\u5B9A\u4E49<code>&lt;resultMap&gt;\uFF1B</code>\u53CD\u8FC7\u6765\uFF0C\u6BCF\u4E00\u4E2A\u8868\u4E5F\u5FC5\u7136\u6709\u4E00\u4E2A<code>&lt;resultMap&gt;</code>\u4E0E\u4E4B\u5BF9\u5E94\u3002</li></ol><div class="custom-container warning"><p class="custom-container-title">\u8BF4\u660E</p><p>\u914D\u7F6E\u6620\u5C04\u5173\u7CFB\uFF0C\u4F7F\u5B57\u6BB5\u4E0E DO \u7C7B\u89E3\u8026\uFF0C\u65B9\u4FBF\u7EF4\u62A4\u3002</p></div><ol start="4"><li>\u3010\u5F3A\u5236\u3011sql.xml \u914D\u7F6E\u53C2\u6570\u4F7F\u7528\uFF1A#{}\uFF0C#param# \u4E0D\u8981\u4F7F\u7528\${} \u6B64\u79CD\u65B9\u5F0F\u5BB9\u6613\u51FA\u73B0 SQL \u6CE8\u5165\u3002</li><li>\u3010\u5F3A\u5236\u3011iBATIS \u81EA\u5E26\u7684 queryForList(String statementName,int start,int size)\u4E0D\u63A8\u8350\u4F7F\u7528\u3002</li></ol><div class="custom-container warning"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5176\u5B9E\u73B0\u65B9\u5F0F\u662F\u5728\u6570\u636E\u5E93\u53D6\u5230 statementName \u5BF9\u5E94\u7684 SQL \u8BED\u53E5\u7684\u6240\u6709\u8BB0\u5F55\uFF0C\u518D\u901A\u8FC7 subList \u53D6start,size \u7684\u5B50\u96C6\u5408\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u6B63\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ol start="6"><li>\u3010\u5F3A\u5236\u3011\u4E0D\u5141\u8BB8\u76F4\u63A5\u62FF HashMap \u4E0E Hashtable \u4F5C\u4E3A\u67E5\u8BE2\u7ED3\u679C\u96C6\u7684\u8F93\u51FA\u3002</li></ol><div class="custom-container danger"><p class="custom-container-title">\u53CD\u4F8B</p><p>\u67D0\u540C\u5B66\u4E3A\u907F\u514D\u5199\u4E00\u4E2A<code>&lt;resultMap\\&gt;</code>\uFF0C\u76F4\u63A5\u4F7F\u7528 HashTable \u6765\u63A5\u6536\u6570\u636E\u5E93\u8FD4\u56DE\u7ED3\u679C\uFF0C\u7ED3\u679C\u51FA\u73B0\u65E5\u5E38\u662F\u628A bigint \u8F6C\u6210 Long \u503C\uFF0C\u800C\u7EBF\u4E0A\u7531\u4E8E\u6570\u636E\u5E93\u7248\u672C\u4E0D\u4E00\u6837\uFF0C\u89E3\u6790\u6210 BigInteger\uFF0C\u5BFC\u81F4\u7EBF\u4E0A\u95EE\u9898\u3002</p></div><ol start="7"><li>\u3010\u5F3A\u5236\u3011\u66F4\u65B0\u6570\u636E\u8868\u8BB0\u5F55\u65F6\uFF0C\u5FC5\u987B\u540C\u65F6\u66F4\u65B0\u8BB0\u5F55\u5BF9\u5E94\u7684 gmt_modified \u5B57\u6BB5\u503C\u4E3A\u5F53\u524D\u65F6\u95F4\u3002</li><li>\u3010\u63A8\u8350\u3011\u4E0D\u8981\u5199\u4E00\u4E2A\u5927\u800C\u5168\u7684\u6570\u636E\u66F4\u65B0\u63A5\u53E3\u3002\u4F20\u5165\u4E3A POJO \u7C7B\uFF0C\u4E0D\u7BA1\u662F\u4E0D\u662F\u81EA\u5DF1\u7684\u76EE\u6807\u66F4\u65B0\u5B57\u6BB5\uFF0C\u90FD\u8FDB\u884C update table set c1=value1,c2=value2,c3=value3; \u8FD9\u662F\u4E0D\u5BF9\u7684\u3002\u6267\u884C SQL \u65F6\uFF0C\u4E0D\u8981\u66F4\u65B0\u65E0\u6539\u52A8\u7684\u5B57\u6BB5\uFF0C\u4E00\u662F\u6613\u51FA\u9519\uFF1B\u4E8C\u662F\u6548\u7387\u4F4E\uFF1B\u4E09\u662F\u589E\u52A0 binlog \u5B58\u50A8\u3002</li><li>\u3010\u53C2\u8003\u3011@Transactional \u4E8B\u52A1\u4E0D\u8981\u6EE5\u7528\u3002\u4E8B\u52A1\u4F1A\u5F71\u54CD\u6570\u636E\u5E93\u7684 QPS\uFF0C\u53E6\u5916\u4F7F\u7528\u4E8B\u52A1\u7684\u5730\u65B9\u9700\u8981\u8003\u8651\u5404\u65B9\u9762\u7684\u56DE\u6EDA\u65B9\u6848\uFF0C\u5305\u62EC\u7F13\u5B58\u56DE\u6EDA\u3001\u641C\u7D22\u5F15\u64CE\u56DE\u6EDA\u3001\u6D88\u606F\u8865\u507F\u3001\u7EDF\u8BA1\u4FEE\u6B63\u7B49\u3002</li><li>\u3010\u53C2\u8003\u3011<code>&lt;isEqual&gt;</code>\u4E2D\u7684 compareValue \u662F\u4E0E\u5C5E\u6027\u503C\u5BF9\u6BD4\u7684\u5E38\u91CF\uFF0C\u4E00\u822C\u662F\u6570\u5B57\uFF0C\u8868\u793A\u76F8\u7B49\u65F6\u5E26\u4E0A\u6B64\u6761\u4EF6\uFF1B<code>&lt;isNotEmpty&gt;</code>\u8868\u793A\u4E0D\u4E3A\u7A7A\u4E14\u4E0D\u4E3A null \u65F6\u6267\u884C\uFF1B<code>&lt;isNotNull&gt;</code>\u8868\u793A\u4E0D\u4E3A null \u503C\u65F6\u6267\u884C\u3002</li></ol>`,12);function l(e,i){return t}var p=s(n,[["render",l],["__file","19-ORM\u6620\u5C04.html.vue"]]);export{p as default};

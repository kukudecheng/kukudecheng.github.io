const e={key:"v-5471cf47",path:"/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/06-Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html",title:"Java\u5185\u5B58\u6A21\u578B\u57FA\u7840\u77E5\u8BC6",lang:"zh-CN",frontmatter:{title:"Java\u5185\u5B58\u6A21\u578B\u57FA\u7840\u77E5\u8BC6",date:"2020-12-06T00:00:00.000Z",category:["\u6DF1\u5165\u6D45\u51FAJava\u591A\u7EBF\u7A0B"],summary:"6.1 \u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u7684\u4E24\u4E2A\u5173\u952E\u95EE\u9898 \u7EBF\u7A0B\u95F4\u5982\u4F55\u901A\u4FE1\uFF1F\u5373\uFF1A\u7EBF\u7A0B\u4E4B\u95F4\u4EE5\u4F55\u79CD\u673A\u5236\u6765\u4EA4\u6362\u4FE1\u606F; \u7EBF\u7A0B\u95F4\u5982\u4F55\u540C\u6B65\uFF1F\u5373\uFF1A\u7EBF\u7A0B\u4EE5\u4F55\u79CD\u673A\u5236\u6765\u63A7\u5236\u4E0D\u540C\u7EBF\u7A0B\u95F4\u64CD\u4F5C\u53D1\u751F\u7684\u76F8\u5BF9\u987A\u5E8F; \u6709\u4E24\u79CD\u5E76\u53D1\u6A21\u578B\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E24\u4E2A\u95EE\u9898\uFF1A \u6D88\u606F\u4F20\u9012\u5E76\u53D1\u6A21\u578B; \u5171\u4EAB\u5185\u5B58\u5E76\u53D1\u6A21\u578B ; \u8FD9\u4E24\u79CD\u6A21\u578B\u4E4B\u95F4\u7684\u533A\u522B\u5982\u4E0B\u8868\u6240\u793A\uFF1A \u5728Java\u4E2D\uFF0C\u4F7F\u7528\u7684\u662F\u5171\u4EAB\u5185\u5B58\u5E76\u53D1\u6A21\u578B\u3002 6.2 Java\u5185\u5B58\u6A21\u578B\u7684\u62BD\u8C61\u7ED3\u6784 6.2.1",head:[["meta",{property:"og:url",content:"https://zhangchengk.github.io/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/06-Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"}],["meta",{property:"og:site_name",content:"Panda\u8BDA\u7684\u535A\u5BA2"}],["meta",{property:"og:title",content:"Java\u5185\u5B58\u6A21\u578B\u57FA\u7840\u77E5\u8BC6"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zhangchengk.github.io/"}],["meta",{property:"og:updated_time",content:"2023-07-19T12:37:43.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"Java\u5185\u5B58\u6A21\u578B\u57FA\u7840\u77E5\u8BC6"}],["meta",{property:"article:published_time",content:"2020-12-06T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2023-07-19T12:37:43.000Z"}]]},excerpt:"",headers:[{level:2,title:"6.1 \u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u7684\u4E24\u4E2A\u5173\u952E\u95EE\u9898",slug:"_6-1-\u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u7684\u4E24\u4E2A\u5173\u952E\u95EE\u9898",children:[]},{level:2,title:"6.2 Java\u5185\u5B58\u6A21\u578B\u7684\u62BD\u8C61\u7ED3\u6784",slug:"_6-2-java\u5185\u5B58\u6A21\u578B\u7684\u62BD\u8C61\u7ED3\u6784",children:[{level:3,title:"6.2.1  \u8FD0\u884C\u65F6\u5185\u5B58\u7684\u5212\u5206",slug:"_6-2-1-\u8FD0\u884C\u65F6\u5185\u5B58\u7684\u5212\u5206",children:[]},{level:3,title:"6.2.2 \u65E2\u7136\u5806\u662F\u5171\u4EAB\u7684\uFF0C\u4E3A\u4EC0\u4E48\u5728\u5806\u4E2D\u4F1A\u6709\u5185\u5B58\u4E0D\u53EF\u89C1\u95EE\u9898\uFF1F",slug:"_6-2-2-\u65E2\u7136\u5806\u662F\u5171\u4EAB\u7684-\u4E3A\u4EC0\u4E48\u5728\u5806\u4E2D\u4F1A\u6709\u5185\u5B58\u4E0D\u53EF\u89C1\u95EE\u9898",children:[]},{level:3,title:"6.2.3 JMM\u4E0EJava\u5185\u5B58\u533A\u57DF\u5212\u5206\u7684\u533A\u522B\u4E0E\u8054\u7CFB",slug:"_6-2-3-jmm\u4E0Ejava\u5185\u5B58\u533A\u57DF\u5212\u5206\u7684\u533A\u522B\u4E0E\u8054\u7CFB",children:[]}]}],git:{createdTime:1689770263e3,updatedTime:1689770263e3,contributors:[{name:"zhangcheng",email:"zhangchengk@foxmail.com",commits:1}]},readingTime:{minutes:4.42,words:1327},filePathRelative:"\u6DF1\u5165\u6D45\u51FAJava\u591A\u7EBF\u7A0B/06-Java\u5185\u5B58\u6A21\u578B\u57FA\u7840\u77E5\u8BC6.md"};export{e as data};

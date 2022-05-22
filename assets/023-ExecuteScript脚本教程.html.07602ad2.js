const e={key:"v-5fe3fa75",path:"/ApacheNIFI%E6%95%99%E7%A8%8B/023-ExecuteScript%E8%84%9A%E6%9C%AC%E6%95%99%E7%A8%8B.html",title:"ExecuteScript\u7EC4\u4EF6\u811A\u672C\u4F7F\u7528\u6559\u7A0B",lang:"zh-CN",frontmatter:{title:"ExecuteScript\u7EC4\u4EF6\u811A\u672C\u4F7F\u7528\u6559\u7A0B",date:"2020-05-21T00:00:00.000Z",category:["ApacheNIFI\u6559\u7A0B"],summary:`\u672C\u6587\u901A\u8FC7Groovy\uFF0CJython\uFF0CJavascript(Nashorn)\u548CJRuby\u4E2D\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u4ECB\u7ECD\u4E86\u6709\u5173\u5982\u4F55\u4F7F\u7528Apache NiFi\u5904\u7406\u5668ExecuteScript\u5B8C\u6210\u67D0\u4E9B\u4EFB\u52A1\u7684\u5404\u79CD\u65B9\u6CD5\u3002\u672C\u6587\u4E2D\u7684\u5185\u5BB9\u5305\u62EC\uFF1A
`,head:[["meta",{property:"og:url",content:"https://zhangchengk.github.io/ApacheNIFI%E6%95%99%E7%A8%8B/023-ExecuteScript%E8%84%9A%E6%9C%AC%E6%95%99%E7%A8%8B.html"}],["meta",{property:"og:site_name",content:"Panda\u8BDA\u7684\u535A\u5BA2"}],["meta",{property:"og:title",content:"ExecuteScript\u7EC4\u4EF6\u811A\u672C\u4F7F\u7528\u6559\u7A0B"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zhangchengk.github.io/"}],["meta",{property:"og:updated_time",content:"2022-05-21T17:05:16.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"ExecuteScript\u7EC4\u4EF6\u811A\u672C\u4F7F\u7528\u6559\u7A0B"}],["meta",{property:"article:published_time",content:"2020-05-21T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-21T17:05:16.000Z"}]]},excerpt:`<p>\u672C\u6587\u901A\u8FC7Groovy\uFF0CJython\uFF0CJavascript(Nashorn)\u548CJRuby\u4E2D\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u4ECB\u7ECD\u4E86\u6709\u5173\u5982\u4F55\u4F7F\u7528Apache NiFi\u5904\u7406\u5668ExecuteScript\u5B8C\u6210\u67D0\u4E9B\u4EFB\u52A1\u7684\u5404\u79CD\u65B9\u6CD5\u3002\u672C\u6587\u4E2D\u7684\u5185\u5BB9\u5305\u62EC\uFF1A</p>
`,headers:[{level:2,title:"Introduction to the NiFi API and FlowFiles",slug:"introduction-to-the-nifi-api-and-flowfiles",children:[{level:3,title:"\u4ECEsession\u4E2D\u83B7\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6",slug:"\u4ECEsession\u4E2D\u83B7\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6",children:[]},{level:3,title:"\u4ECE\u4F1A\u8BDD\u4E2D\u83B7\u53D6\u591A\u4E2A\u6D41\u6587\u4EF6",slug:"\u4ECE\u4F1A\u8BDD\u4E2D\u83B7\u53D6\u591A\u4E2A\u6D41\u6587\u4EF6",children:[]},{level:3,title:"\u521B\u5EFA\u4E00\u4E2A\u6D41\u6587\u4EF6",slug:"\u521B\u5EFA\u4E00\u4E2A\u6D41\u6587\u4EF6",children:[]},{level:3,title:"\u7EE7\u627F\u7236FlowFIle\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684FlowFIle",slug:"\u7EE7\u627F\u7236flowfile\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684flowfile",children:[]},{level:3,title:"\u4E3A\u6D41\u6587\u4EF6\u589E\u52A0\u4E00\u4E2A\u5C5E\u6027",slug:"\u4E3A\u6D41\u6587\u4EF6\u589E\u52A0\u4E00\u4E2A\u5C5E\u6027",children:[]},{level:3,title:"\u4E3A\u6D41\u6587\u4EF6\u6DFB\u52A0\u591A\u4E2A\u5C5E\u6027",slug:"\u4E3A\u6D41\u6587\u4EF6\u6DFB\u52A0\u591A\u4E2A\u5C5E\u6027",children:[]},{level:3,title:"\u4ECE\u6D41\u6587\u4EF6\u8BFB\u53D6\u4E00\u4E2A\u5C5E\u6027",slug:"\u4ECE\u6D41\u6587\u4EF6\u8BFB\u53D6\u4E00\u4E2A\u5C5E\u6027",children:[]},{level:3,title:"\u83B7\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6\u7684\u6240\u6709\u5C5E\u6027",slug:"\u83B7\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6\u7684\u6240\u6709\u5C5E\u6027",children:[]},{level:3,title:"\u5C06FlowFIle\u8DEF\u7531\u4F20\u9001\u5230\u4E00\u4E2ARelationShip",slug:"\u5C06flowfile\u8DEF\u7531\u4F20\u9001\u5230\u4E00\u4E2Arelationship",children:[]},{level:3,title:"\u8BBE\u7F6E\u65E5\u5FD7\u7EA7\u522B\uFF0C\u6253\u5370\u65E5\u5FD7",slug:"\u8BBE\u7F6E\u65E5\u5FD7\u7EA7\u522B-\u6253\u5370\u65E5\u5FD7",children:[]}]},{level:2,title:"Introduction to FlowFile I/O",slug:"introduction-to-flowfile-i-o",children:[{level:3,title:"\u4F7F\u7528\u56DE\u8C03\u8BFB\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6\u7684\u5185\u5BB9",slug:"\u4F7F\u7528\u56DE\u8C03\u8BFB\u53D6\u4E00\u4E2A\u6D41\u6587\u4EF6\u7684\u5185\u5BB9",children:[]},{level:3,title:"\u4F7F\u7528\u56DE\u8C03\u5411\u6D41\u6587\u4EF6\u5199\u5185\u5BB9",slug:"\u4F7F\u7528\u56DE\u8C03\u5411\u6D41\u6587\u4EF6\u5199\u5185\u5BB9",children:[]},{level:3,title:"\u4F7F\u7528\u56DE\u8C03\u4FEE\u6539\u6D41\u6587\u4EF6\u5185\u5BB9",slug:"\u4F7F\u7528\u56DE\u8C03\u4FEE\u6539\u6D41\u6587\u4EF6\u5185\u5BB9",children:[]},{level:3,title:"\u5904\u7406\u811A\u672C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7684\u9519\u8BEF",slug:"\u5904\u7406\u811A\u672C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7684\u9519\u8BEF",children:[]}]},{level:2,title:"Advanced Features",slug:"advanced-features",children:[{level:3,title:"\u52A8\u6001\u5C5E\u6027",slug:"\u52A8\u6001\u5C5E\u6027",children:[]},{level:3,title:"\u83B7\u53D6\u4E00\u4E2A\u52A8\u6001\u5C5E\u6027\u7684\u503C",slug:"\u83B7\u53D6\u4E00\u4E2A\u52A8\u6001\u5C5E\u6027\u7684\u503C",children:[]},{level:3,title:"\u8BA1\u7B97NIFI\u8868\u8FBE\u5F0F\u8BED\u8A00\u540E\u83B7\u53D6\u52A8\u6001\u5C5E\u6027\u7684\u503C",slug:"\u8BA1\u7B97nifi\u8868\u8FBE\u5F0F\u8BED\u8A00\u540E\u83B7\u53D6\u52A8\u6001\u5C5E\u6027\u7684\u503C",children:[]},{level:3,title:"\u6DFB\u52A0\u7B2C\u4E09\u65B9\u5E93",slug:"\u6DFB\u52A0\u7B2C\u4E09\u65B9\u5E93",children:[]},{level:3,title:"State Management",slug:"state-management",children:[]},{level:3,title:"\u8BBF\u95EEController Services",slug:"\u8BBF\u95EEcontroller-services",children:[]}]}],git:{createdTime:1653141484e3,updatedTime:1653152716e3,contributors:[{name:"zhangcheng",email:"zhangchengk@foxmail.com",commits:2}]},readingTime:{minutes:26.9,words:8071},filePathRelative:"ApacheNIFI\u6559\u7A0B/023-ExecuteScript\u811A\u672C\u6559\u7A0B.md"};export{e as data};

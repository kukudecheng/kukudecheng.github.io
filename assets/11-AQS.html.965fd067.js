const e={key:"v-3bedae98",path:"/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/11-AQS.html",title:"AQS",lang:"zh-CN",frontmatter:{title:"AQS",date:"2020-12-08T00:00:00.000Z",category:["\u6DF1\u5165\u6D45\u51FAJava\u591A\u7EBF\u7A0B"],summary:"11.1 AQS\u7B80\u4ECB AQS\u662FAbstractQueuedSynchronizer\u7684\u7B80\u79F0\uFF0C\u5373\u62BD\u8C61\u961F\u5217\u540C\u6B65\u5668\uFF0C\u4ECE\u5B57\u9762\u610F\u601D\u4E0A\u7406\u89E3: \u62BD\u8C61\uFF1A\u62BD\u8C61\u7C7B\uFF0C\u53EA\u5B9E\u73B0\u4E00\u4E9B\u4E3B\u8981\u903B\u8F91\uFF0C\u6709\u4E9B\u65B9\u6CD5\u7531\u5B50\u7C7B\u5B9E\u73B0\uFF1B; \u961F\u5217\uFF1A\u4F7F\u7528\u5148\u8FDB\u5148\u51FA\uFF08FIFO\uFF09\u961F\u5217\u5B58\u50A8\u6570\u636E\uFF1B; \u540C\u6B65\uFF1A\u5B9E\u73B0\u4E86\u540C\u6B65\u7684\u529F\u80FD\u3002; \u90A3AQS\u6709\u4EC0\u4E48\u7528\u5462\uFF1FAQS\u662F\u4E00\u4E2A\u7528\u6765\u6784\u5EFA\u9501\u548C\u540C\u6B65\u5668\u7684\u6846\u67B6\uFF0C\u4F7F\u7528AQS\u80FD\u7B80\u5355\u4E14\u9AD8\u6548\u5730\u6784\u9020\u51FA\u5E94\u7528\u5E7F\u6CDB\u7684",head:[["meta",{property:"og:url",content:"https://zhangchengk.github.io/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/11-AQS.html"}],["meta",{property:"og:site_name",content:"Panda\u8BDA\u7684\u535A\u5BA2"}],["meta",{property:"og:title",content:"AQS"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zhangchengk.github.io/"}],["meta",{property:"og:updated_time",content:"2022-05-21T17:05:16.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"AQS"}],["meta",{property:"article:published_time",content:"2020-12-08T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-21T17:05:16.000Z"}]]},excerpt:"",headers:[{level:2,title:"11.1 AQS\u7B80\u4ECB",slug:"_11-1-aqs\u7B80\u4ECB",children:[]},{level:2,title:"11.2 AQS\u7684\u6570\u636E\u7ED3\u6784",slug:"_11-2-aqs\u7684\u6570\u636E\u7ED3\u6784",children:[]},{level:2,title:"11.3 \u8D44\u6E90\u5171\u4EAB\u6A21\u5F0F",slug:"_11-3-\u8D44\u6E90\u5171\u4EAB\u6A21\u5F0F",children:[]},{level:2,title:"11.4 AQS\u7684\u4E3B\u8981\u65B9\u6CD5\u6E90\u7801\u89E3\u6790",slug:"_11-4-aqs\u7684\u4E3B\u8981\u65B9\u6CD5\u6E90\u7801\u89E3\u6790",children:[{level:3,title:"11.4.1 \u83B7\u53D6\u8D44\u6E90",slug:"_11-4-1-\u83B7\u53D6\u8D44\u6E90",children:[]},{level:3,title:"11.4.2 \u91CA\u653E\u8D44\u6E90",slug:"_11-4-2-\u91CA\u653E\u8D44\u6E90",children:[]}]}],git:{createdTime:1653141484e3,updatedTime:1653152716e3,contributors:[{name:"zhangcheng",email:"zhangchengk@foxmail.com",commits:2}]},readingTime:{minutes:7.77,words:2332},filePathRelative:"\u8BFB\u4E66\u7B14\u8BB0/\u6DF1\u5165\u6D45\u51FAJava\u591A\u7EBF\u7A0B/11-AQS.md"};export{e as data};

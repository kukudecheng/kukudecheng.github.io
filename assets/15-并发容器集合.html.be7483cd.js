import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as i,c as u,a as n,b as a,w as c,F as r,d as o,e as s}from"./app.9c037f97.js";var d="/assets/1.ec5ad183.png",k="/assets/2.f8b468ac.png";const v={},m=o(`<h2 id="_15-1-\u540C\u6B65\u5BB9\u5668\u4E0E\u5E76\u53D1\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_15-1-\u540C\u6B65\u5BB9\u5668\u4E0E\u5E76\u53D1\u5BB9\u5668" aria-hidden="true">#</a> 15.1 \u540C\u6B65\u5BB9\u5668\u4E0E\u5E76\u53D1\u5BB9\u5668</h2><p>\u6211\u4EEC\u77E5\u9053\u5728java.util\u5305\u4E0B\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5BB9\u5668\u7C7B\uFF0C\u800CVector\u548CHashTable\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u5BB9\u5668\u7C7B\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5BB9\u5668\u5B9E\u73B0\u540C\u6B65\u7684\u65B9\u5F0F\u662F\u901A\u8FC7\u5BF9\u65B9\u6CD5\u52A0\u9501(sychronized)\u65B9\u5F0F\u5B9E\u73B0\u7684\uFF0C\u8FD9\u6837\u8BFB\u5199\u5747\u9700\u8981\u9501\u64CD\u4F5C\uFF0C\u5BFC\u81F4\u6027\u80FD\u4F4E\u4E0B\u3002</p><p>\u800C\u5373\u4F7F\u662FVector\u8FD9\u6837\u7EBF\u7A0B\u5B89\u5168\u7684\u7C7B\uFF0C\u5728\u9762\u5BF9\u591A\u7EBF\u7A0B\u4E0B\u7684\u590D\u5408\u64CD\u4F5C\u7684\u65F6\u5019\u4E5F\u662F\u9700\u8981\u901A\u8FC7\u5BA2\u6237\u7AEF\u52A0\u9501\u7684\u65B9\u5F0F\u4FDD\u8BC1\u539F\u5B50\u6027\u3002\u5982\u4E0B\u9762\u4F8B\u5B50\u8BF4\u660E:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestVector</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> vector<span class="token punctuation">;</span>

    <span class="token comment">//\u65B9\u6CD5\u4E00</span>
    <span class="token keyword">public</span>  <span class="token class-name">Object</span> <span class="token function">getLast</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> vector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> lastIndex <span class="token operator">=</span> vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> vector<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u65B9\u6CD5\u4E8C</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">deleteLast</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> vector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> lastIndex <span class="token operator">=</span> vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        vector<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u65B9\u6CD5\u4E09</span>
    <span class="token keyword">public</span>  <span class="token class-name">Object</span> <span class="token function">getLastSysnchronized</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> vector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> lastIndex <span class="token operator">=</span> vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> vector<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u65B9\u6CD5\u56DB</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">deleteLastSysnchronized</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> vector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>vector<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> lastIndex <span class="token operator">=</span> vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            vector<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u65B9\u6CD5\u4E00\u548C\u65B9\u6CD5\u4E8C\u4E3A\u4E00\u4E2A\u7EC4\u5408\u7684\u8BDD\u3002\u90A3\u4E48\u5F53\u65B9\u6CD5\u4E00\u83B7\u53D6\u5230\u4E86<code>vector</code>\u7684size\u4E4B\u540E\uFF0C\u65B9\u6CD5\u4E8C\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\uFF0C\u8FD9\u6837\u5C31\u5BFC\u81F4\u7A0B\u5E8F\u7684\u9519\u8BEF\u3002</p><p>\u5982\u679C\u65B9\u6CD5\u4E09\u4E0E\u65B9\u6CD5\u56DB\u7EC4\u5408\u7684\u8BDD\u3002\u901A\u8FC7\u9501\u673A\u5236\u4FDD\u8BC1\u4E86\u5728<code>vector</code>\u4E0A\u7684\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u3002</p><p>\u5E76\u53D1\u5BB9\u5668\u662FJava 5 \u63D0\u4F9B\u7684\u5728\u591A\u7EBF\u7A0B\u7F16\u7A0B\u4E0B\u7528\u4E8E\u4EE3\u66FF\u540C\u6B65\u5BB9\u5668\uFF0C\u9488\u5BF9\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F\u8FDB\u884C\u8BBE\u8BA1\uFF0C\u63D0\u9AD8\u5BB9\u5668\u7684\u5E76\u53D1\u8BBF\u95EE\u6027\uFF0C\u540C\u65F6\u5B9A\u4E49\u4E86\u7EBF\u7A0B\u5B89\u5168\u7684\u590D\u5408\u64CD\u4F5C\u3002</p><h2 id="_15-2-\u5E76\u53D1\u5BB9\u5668\u7C7B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_15-2-\u5E76\u53D1\u5BB9\u5668\u7C7B\u4ECB\u7ECD" aria-hidden="true">#</a> 15.2 \u5E76\u53D1\u5BB9\u5668\u7C7B\u4ECB\u7ECD</h2><p>\u6574\u4F53\u67B6\u6784(\u5217\u4E3E\u5E38\u7528\u7684\u5BB9\u5668\u7C7B)</p><p><img src="`+d+'" alt="" loading="lazy"></p>',10),h=s("\u5176\u4E2D\uFF0C\u963B\u585E\u961F\u5217\uFF08BlockingQueue\uFF09\u5728"),b=s("\u963B\u585E\u961F\u5217"),_=s("\u6709\u4ECB\u7ECD\uFF0CCopyOnWrite\u5BB9\u5668\uFF08CopyOnWritexxx\uFF09\u5728"),g=s("CopyOnWrite"),y=s("\u6709\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u4E0D\u505A\u8FC7\u591A\u4ECB\u7ECD\u3002"),f=o(`<p>\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u5E76\u53D1\u5BB9\u5668\u7C7B\u548C\u63A5\u53E3\uFF0C\u56E0\u7BC7\u5E45\u539F\u56E0\uFF0C\u8FD9\u91CC\u53EA\u4ECB\u7ECD\u8FD9\u4E9B\u7C7B\u7684\u7528\u9014\u548C\u57FA\u672C\u7684\u539F\u7406\uFF0C\u4E0D\u505A\u8FC7\u591A\u7684\u6E90\u7801\u89E3\u6790\u3002</p><h3 id="_15-2-1-\u5E76\u53D1map" tabindex="-1"><a class="header-anchor" href="#_15-2-1-\u5E76\u53D1map" aria-hidden="true">#</a> 15.2.1 \u5E76\u53D1Map</h3><h4 id="concurrentmap\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#concurrentmap\u63A5\u53E3" aria-hidden="true">#</a> ConcurrentMap\u63A5\u53E3</h4><p>ConcurrentMap\u63A5\u53E3\u7EE7\u627F\u4E86Map\u63A5\u53E3\uFF0C\u5728Map\u63A5\u53E3\u7684\u57FA\u7840\u4E0A\u53C8\u5B9A\u4E49\u4E86\u56DB\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ConcurrentMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token comment">//\u63D2\u5165\u5143\u7D20</span>
    <span class="token class-name">V</span> <span class="token function">putIfAbsent</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u79FB\u9664\u5143\u7D20</span>
    <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u66FF\u6362\u5143\u7D20</span>
    <span class="token keyword">boolean</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> oldValue<span class="token punctuation">,</span> <span class="token class-name">V</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u66FF\u6362\u5143\u7D20</span>
    <span class="token class-name">V</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**putIfAbsent\uFF1A**\u4E0E\u539F\u6709put\u65B9\u6CD5\u4E0D\u540C\u7684\u662F\uFF0CputIfAbsent\u65B9\u6CD5\u4E2D\u5982\u679C\u63D2\u5165\u7684key\u76F8\u540C\uFF0C\u5219\u4E0D\u66FF\u6362\u539F\u6709\u7684value\u503C\uFF1B</p><p>**remove\uFF1A**\u4E0E\u539F\u6709remove\u65B9\u6CD5\u4E0D\u540C\u7684\u662F\uFF0C\u65B0remove\u65B9\u6CD5\u4E2D\u589E\u52A0\u4E86\u5BF9value\u7684\u5224\u65AD\uFF0C\u5982\u679C\u8981\u5220\u9664\u7684key-value\u4E0D\u80FD\u4E0EMap\u4E2D\u539F\u6709\u7684key-value\u5BF9\u5E94\u4E0A\uFF0C\u5219\u4E0D\u4F1A\u5220\u9664\u8BE5\u5143\u7D20;</p><p>**replace(K,V,V)\uFF1A**\u589E\u52A0\u4E86\u5BF9value\u503C\u7684\u5224\u65AD\uFF0C\u5982\u679Ckey-oldValue\u80FD\u4E0EMap\u4E2D\u539F\u6709\u7684key-value\u5BF9\u5E94\u4E0A\uFF0C\u624D\u8FDB\u884C\u66FF\u6362\u64CD\u4F5C\uFF1B</p><p>**replace(K,V)\uFF1A**\u4E0E\u4E0A\u9762\u7684replace\u4E0D\u540C\u7684\u662F\uFF0C\u6B64replace\u4E0D\u4F1A\u5BF9Map\u4E2D\u539F\u6709\u7684key-value\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679Ckey\u5B58\u5728\u5219\u76F4\u63A5\u66FF\u6362\uFF1B</p><h4 id="concurrenthashmap\u7C7B" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap\u7C7B" aria-hidden="true">#</a> ConcurrentHashMap\u7C7B</h4><p>ConcurrentHashMap\u540CHashMap\u4E00\u6837\u4E5F\u662F\u57FA\u4E8E\u6563\u5217\u8868\u7684map\uFF0C\u4F46\u662F\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u4E0EHashTable\u5B8C\u5168\u4E0D\u540C\u7684\u52A0\u9501\u7B56\u7565\u63D0\u4F9B\u66F4\u9AD8\u6548\u7684\u5E76\u53D1\u6027\u548C\u4F38\u7F29\u6027\u3002</p><p>ConcurrentHashMap\u5728JDK 1.7 \u548CJDK 1.8\u4E2D\u6709\u4E00\u4E9B\u533A\u522B\u3002\u8FD9\u91CC\u6211\u4EEC\u5206\u5F00\u4ECB\u7ECD\u4E00\u4E0B\u3002</p><p><strong>JDK 1.7</strong></p><p>ConcurrentHashMap\u5728JDK 1.7\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u7C92\u5EA6\u66F4\u7EC6\u7684\u52A0\u9501\u673A\u5236\u6765\u5B9E\u73B0\u5728\u591A\u7EBF\u7A0B\u4E0B\u66F4\u9AD8\u7684\u6027\u80FD\uFF0C\u8FD9\u79CD\u673A\u5236\u53EB\u5206\u6BB5\u9501(Lock Striping)\u3002</p><p>\u63D0\u4F9B\u7684\u4F18\u70B9\u662F\uFF1A\u5728\u5E76\u53D1\u73AF\u5883\u4E0B\u5C06\u5B9E\u73B0\u66F4\u9AD8\u7684\u541E\u5410\u91CF\uFF0C\u800C\u5728\u5355\u7EBF\u7A0B\u73AF\u5883\u4E0B\u53EA\u635F\u5931\u975E\u5E38\u5C0F\u7684\u6027\u80FD\u3002</p><p>\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\u5206\u6BB5\u9501\uFF0C\u5C31\u662F<strong>\u5C06\u6570\u636E\u5206\u6BB5\uFF0C\u5BF9\u6BCF\u4E00\u6BB5\u6570\u636E\u5206\u914D\u4E00\u628A\u9501</strong>\u3002\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u5360\u7528\u9501\u8BBF\u95EE\u5176\u4E2D\u4E00\u4E2A\u6BB5\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5176\u4ED6\u6BB5\u7684\u6570\u636E\u4E5F\u80FD\u88AB\u5176\u4ED6\u7EBF\u7A0B\u8BBF\u95EE\u3002</p><p>\u6709\u4E9B\u65B9\u6CD5\u9700\u8981\u8DE8\u6BB5\uFF0C\u6BD4\u5982size()\u3001isEmpty()\u3001containsValue()\uFF0C\u5B83\u4EEC\u53EF\u80FD\u9700\u8981\u9501\u5B9A\u6574\u4E2A\u8868\u800C\u800C\u4E0D\u4EC5\u4EC5\u662F\u67D0\u4E2A\u6BB5\uFF0C\u8FD9\u9700\u8981\u6309\u987A\u5E8F\u9501\u5B9A\u6240\u6709\u6BB5\uFF0C\u64CD\u4F5C\u5B8C\u6BD5\u540E\uFF0C\u53C8\u6309\u987A\u5E8F\u91CA\u653E\u6240\u6709\u6BB5\u7684\u9501\u3002\u5982\u4E0B\u56FE\uFF1A</p><p><img src="`+k+`" alt="" loading="lazy"></p><p>ConcurrentHashMap\u662F\u7531Segment\u6570\u7EC4\u7ED3\u6784\u548CHashEntry\u6570\u7EC4\u7ED3\u6784\u7EC4\u6210\u3002Segment\u662F\u4E00\u79CD\u53EF\u91CD\u5165\u9501ReentrantLock\uFF0CHashEntry\u5219\u7528\u4E8E\u5B58\u50A8\u952E\u503C\u5BF9\u6570\u636E\u3002</p><p>\u4E00\u4E2AConcurrentHashMap\u91CC\u5305\u542B\u4E00\u4E2ASegment\u6570\u7EC4\uFF0CSegment\u7684\u7ED3\u6784\u548CHashMap\u7C7B\u4F3C\uFF0C\u662F\u4E00\u79CD\u6570\u7EC4\u548C\u94FE\u8868\u7ED3\u6784\uFF0C \u4E00\u4E2ASegment\u91CC\u5305\u542B\u4E00\u4E2AHashEntry\u6570\u7EC4\uFF0C\u6BCF\u4E2AHashEntry\u662F\u4E00\u4E2A\u94FE\u8868\u7ED3\u6784\u7684\u5143\u7D20\uFF0C \u6BCF\u4E2ASegment\u5B88\u62A4\u7740\u4E00\u4E2AHashEntry\u6570\u7EC4\u91CC\u7684\u5143\u7D20\uFF0C\u5F53\u5BF9HashEntry\u6570\u7EC4\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u5FC5\u987B\u9996\u5148\u83B7\u5F97\u5B83\u5BF9\u5E94\u7684Segment\u9501\u3002</p><p><strong>JDK 1.8</strong></p><p>\u800C\u5728JDK 1.8\u4E2D\uFF0CConcurrentHashMap\u4E3B\u8981\u505A\u4E86\u4E24\u4E2A\u4F18\u5316\uFF1A</p><ul><li>\u540CHashMap\u4E00\u6837\uFF0C\u94FE\u8868\u4E5F\u4F1A\u5728\u957F\u5EA6\u8FBE\u52308\u7684\u65F6\u5019\u8F6C\u5316\u4E3A\u7EA2\u9ED1\u6811\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u5347\u5927\u91CF\u51B2\u7A81\u65F6\u5019\u7684\u67E5\u8BE2\u6548\u7387\uFF1B</li><li>\u4EE5\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5934\u7ED3\u70B9\uFF08\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u6216\u7EA2\u9ED1\u6811\u7684root\u7ED3\u70B9\uFF09\u4E3A\u9501\uFF0C\u914D\u5408\u81EA\u65CB+CAS\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u9501\u5F00\u9500\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u5E76\u53D1\u6027\u80FD\u3002</li></ul><h4 id="concurrentnavigablemap\u63A5\u53E3\u4E0Econcurrentskiplistmap\u7C7B" tabindex="-1"><a class="header-anchor" href="#concurrentnavigablemap\u63A5\u53E3\u4E0Econcurrentskiplistmap\u7C7B" aria-hidden="true">#</a> ConcurrentNavigableMap\u63A5\u53E3\u4E0EConcurrentSkipListMap\u7C7B</h4><p>ConcurrentNavigableMap\u63A5\u53E3\u7EE7\u627F\u4E86NavigableMap\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u63D0\u4F9B\u4E86\u9488\u5BF9\u7ED9\u5B9A\u641C\u7D22\u76EE\u6807\u8FD4\u56DE\u6700\u63A5\u8FD1\u5339\u914D\u9879\u7684\u5BFC\u822A\u65B9\u6CD5\u3002</p><p>ConcurrentNavigableMap\u63A5\u53E3\u7684\u4E3B\u8981\u5B9E\u73B0\u7C7B\u662FConcurrentSkipListMap\u7C7B\u3002\u4ECE\u540D\u5B57\u4E0A\u6765\u770B\uFF0C\u5B83\u7684\u5E95\u5C42\u4F7F\u7528\u7684\u662F\u8DF3\u8868\uFF08SkipList\uFF09\u7684\u6570\u636E\u7ED3\u6784\u3002\u5173\u4E8E\u8DF3\u8868\u7684\u6570\u636E\u7ED3\u6784\u8FD9\u91CC\u4E0D\u505A\u592A\u591A\u4ECB\u7ECD\uFF0C\u5B83\u662F\u4E00\u79CD\u201D\u7A7A\u95F4\u6362\u65F6\u95F4\u201C\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u53EF\u4EE5\u4F7F\u7528CAS\u6765\u4FDD\u8BC1\u5E76\u53D1\u5B89\u5168\u6027\u3002</p><h3 id="_15-2-2-\u5E76\u53D1queue" tabindex="-1"><a class="header-anchor" href="#_15-2-2-\u5E76\u53D1queue" aria-hidden="true">#</a> 15.2.2 \u5E76\u53D1Queue</h3><p>JDK\u5E76\u6CA1\u6709\u63D0\u4F9B\u7EBF\u7A0B\u5B89\u5168\u7684List\u7C7B\uFF0C\u56E0\u4E3A\u5BF9List\u6765\u8BF4\uFF0C<strong>\u5F88\u96BE\u53BB\u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u5E76\u4E14\u6CA1\u6709\u5E76\u53D1\u74F6\u9888\u7684\u7EBF\u7A0B\u5B89\u5168\u7684List</strong>\u3002\u56E0\u4E3A\u5373\u4F7F\u7B80\u5355\u7684\u8BFB\u64CD\u4F5C\uFF0C\u62FFcontains() \u8FD9\u6837\u4E00\u4E2A\u64CD\u4F5C\u6765\u8BF4\uFF0C\u5F88\u96BE\u60F3\u5230\u641C\u7D22\u7684\u65F6\u5019\u5982\u4F55\u907F\u514D\u9501\u4F4F\u6574\u4E2Alist\u3002</p><p>\u6240\u4EE5\u9000\u4E00\u6B65\uFF0CJDK\u63D0\u4F9B\u4E86\u5BF9\u961F\u5217\u548C\u53CC\u7AEF\u961F\u5217\u7684\u7EBF\u7A0B\u5B89\u5168\u7684\u7C7B\uFF1AConcurrentLinkedQueue\u548CConcurrentLinkedDeque\u3002\u56E0\u4E3A\u961F\u5217\u76F8\u5BF9\u4E8EList\u6765\u8BF4\uFF0C\u6709\u66F4\u591A\u7684\u9650\u5236\u3002\u8FD9\u4E24\u4E2A\u7C7B\u662F\u4F7F\u7528CAS\u6765\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p><h3 id="_15-2-3-\u5E76\u53D1set" tabindex="-1"><a class="header-anchor" href="#_15-2-3-\u5E76\u53D1set" aria-hidden="true">#</a> 15.2.3 \u5E76\u53D1Set</h3><p>JDK\u63D0\u4F9B\u4E86ConcurrentSkipListSet\uFF0C\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u6709\u5E8F\u7684\u96C6\u5408\u3002\u5E95\u5C42\u662F\u4F7F\u7528ConcurrentSkipListMap\u5B9E\u73B0\u3002</p><p>\u8C37\u6B4C\u7684guava\u6846\u67B6\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7EBF\u7A0B\u5B89\u5168\u7684ConcurrentHashSet\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> s <span class="token operator">=</span> <span class="token class-name">Sets</span><span class="token punctuation">.</span><span class="token function">newConcurrentHashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u8003\u8D44\u6599</strong></p>`,34),E={href:"https://www.cnblogs.com/ITtangtang/p/3948786.html",target:"_blank",rel:"noopener noreferrer"},C=s("Java\u96C6\u5408-ConcurrentHashMap\u539F\u7406\u5206\u6790"),w={href:"https://blog.csdn.net/u012777670/article/details/82313750",target:"_blank",rel:"noopener noreferrer"},x=s("\u540C\u6B65\u5BB9\u5668\u4E0E\u5E76\u53D1\u5BB9\u5668\u7C7B\u7B80\u4ECB"),M={href:"http://ifeve.com/concurrentlinkedqueue/",target:"_blank",rel:"noopener noreferrer"},B=s("ConcurrentLinkedQueue\u7684\u5B9E\u73B0\u539F\u7406\u5206\u6790"),A={href:"https://yasinshaw.com/articles/27",target:"_blank",rel:"noopener noreferrer"},S=s("ConcurrentHashMap\u7684put\u6E90\u7801\u89E3\u6790"),V={href:"https://yasinshaw.com/articles/30",target:"_blank",rel:"noopener noreferrer"},H=s("\u4ECEConcurrentHashMap\u80FD\u5B66\u5230\u54EA\u4E9B\u5E76\u53D1\u7F16\u7A0B\u6280\u5DE7\uFF1F");function L(K,j){const t=p("RouterLink"),e=p("ExternalLinkIcon");return i(),u(r,null,[m,n("p",null,[h,a(t,{to:"/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/13-%E9%98%BB%E5%A1%9E%E9%98%9F%E5%88%97.html"},{default:c(()=>[b]),_:1}),_,a(t,{to:"/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAJava%E5%A4%9A%E7%BA%BF%E7%A8%8B/16-CopyOnWrite.html"},{default:c(()=>[g]),_:1}),y]),f,n("ul",null,[n("li",null,[n("a",E,[C,a(e)])]),n("li",null,[n("a",w,[x,a(e)])]),n("li",null,[n("a",M,[B,a(e)])]),n("li",null,[n("a",A,[S,a(e)])]),n("li",null,[n("a",V,[H,a(e)])])])],64)}var J=l(v,[["render",L],["__file","15-\u5E76\u53D1\u5BB9\u5668\u96C6\u5408.html.vue"]]);export{J as default};

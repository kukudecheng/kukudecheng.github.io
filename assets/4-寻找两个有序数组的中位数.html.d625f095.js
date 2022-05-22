import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.9c037f97.js";var a="/assets/1.519b6fea.png",p="/assets/2.cf138526.png",t="/assets/3.0fa344b6.png",e="/assets/4.a58bfa77.png",o="/assets/5.2b62a013.png";const c={},l=s(`<p>\u7ED9\u5B9A\u4E24\u4E2A\u5927\u5C0F\u4E3A m \u548C n \u7684\u6709\u5E8F\u6570\u7EC4 <code>nums1</code> \u548C <code>nums2</code>\u3002</p><p>\u8BF7\u4F60\u627E\u51FA\u8FD9\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570\uFF0C\u5E76\u4E14\u8981\u6C42\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log(m + n))\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE <code>nums1</code> \u548C <code>nums2</code> \u4E0D\u4F1A\u540C\u65F6\u4E3A\u7A7A\u3002</p><p><strong>\u793A\u4F8B 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nums1 = [1, 3]
nums2 = [2]

\u5219\u4E2D\u4F4D\u6570\u662F 2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nums1 = [1, 2]
nums2 = [3, 4]

\u5219\u4E2D\u4F4D\u6570\u662F (2 + 3)/2 = 2.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt="" loading="lazy"><img src="'+p+'" alt="" loading="lazy"><img src="'+t+'" alt="" loading="lazy"><img src="'+e+`" alt="" loading="lazy"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token class-name">B</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// to ensure m&lt;=n</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> temp <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">;</span> <span class="token class-name">A</span> <span class="token operator">=</span> <span class="token class-name">B</span><span class="token punctuation">;</span> <span class="token class-name">B</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> m<span class="token punctuation">;</span> m <span class="token operator">=</span> n<span class="token punctuation">;</span> n <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> iMin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> iMax <span class="token operator">=</span> m<span class="token punctuation">,</span> halfLen <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iMin <span class="token operator">&lt;=</span> iMax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>iMin <span class="token operator">+</span> iMax<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> halfLen <span class="token operator">-</span> i<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> iMax <span class="token operator">&amp;&amp;</span> <span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                iMin <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// i is too small</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> iMin <span class="token operator">&amp;&amp;</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                iMax <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// i is too big</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// i is perfect</span>
                <span class="token keyword">int</span> maxLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> maxLeft <span class="token operator">=</span> <span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> maxLeft <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token punctuation">{</span> maxLeft <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> maxLeft<span class="token punctuation">;</span> <span class="token punctuation">}</span>

                <span class="token keyword">int</span> minRight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span> minRight <span class="token operator">=</span> <span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> minRight <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token punctuation">{</span> minRight <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token punctuation">(</span>maxLeft <span class="token operator">+</span> minRight<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="" loading="lazy"></p>',10);function i(u,k){return l}var m=n(c,[["render",i],["__file","4-\u5BFB\u627E\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570.html.vue"]]);export{m as default};

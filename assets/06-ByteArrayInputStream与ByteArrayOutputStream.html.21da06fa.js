import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c,a as n,b as o,F as l,e as s,d as i}from"./app.9c037f97.js";const u={},r=s("\u8F6C\u81EA\uFF1Ahttp://blog.csdn.net/zhaoyanjun6/article/details/54946762"),k=n("br",null,null,-1),d=s(" \u672C\u6587\u51FA\u81EA"),m={href:"http://blog.csdn.net/zhaoyanjun6/",target:"_blank",rel:"noopener noreferrer"},v=s("\u3010\u8D75\u5F66\u519B\u7684\u535A\u5BA2\u3011"),b=i(`<h3 id="\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB" aria-hidden="true">#</a> \u7C7B\u7684\u7EE7\u627F\u5173\u7CFB</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>InputStream
|__ ByteArrayInputStream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OutputStream
|__ ByteArrayOutputStream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ByteArrayInputStream</code> \u53EF\u4EE5\u5C06\u5B57\u8282\u6570\u7EC4\u8F6C\u5316\u4E3A\u8F93\u5165\u6D41 \u3002<br><code>ByteArrayOutputStream</code>\u53EF\u4EE5\u6355\u83B7\u5185\u5B58\u7F13\u51B2\u533A\u7684\u6570\u636E\uFF0C\u8F6C\u6362\u6210\u5B57\u8282\u6570\u7EC4\u3002</p><h3 id="bytearrayinputstream" tabindex="-1"><a class="header-anchor" href="#bytearrayinputstream" aria-hidden="true">#</a> <code>ByteArrayInputStream</code></h3><ul><li>\u6784\u9020\u51FD\u6570</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span><span class="token keyword">byte</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">public</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span><span class="token keyword">byte</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E00\u822C\u65B9\u6CD5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span>  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5173\u95ED\u8BE5\u6D41\u5E76\u91CA\u653E\u4E0E\u4E4B\u5173\u8054\u7684\u6240\u6709\u8D44\u6E90\u3002</span>

<span class="token class-name">String</span>	<span class="token function">getEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE\u6B64\u6D41\u4F7F\u7528\u7684\u5B57\u7B26\u7F16\u7801\u7684\u540D\u79F0\u3002</span>

<span class="token keyword">int</span>	 <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u8BFB\u53D6\u5355\u4E2A\u5B57\u7B26\u3002</span>

<span class="token keyword">int</span>	 <span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf<span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token comment">//\u5C06\u5B57\u7B26\u8BFB\u5165\u6570\u7EC4\u4E2D\u7684\u67D0\u4E00\u90E8\u5206\u3002</span>

<span class="token keyword">boolean</span>  <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5224\u65AD\u6B64\u6D41\u662F\u5426\u5DF2\u7ECF\u51C6\u5907\u597D\u7528\u4E8E\u8BFB\u53D6\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bytearrayoutputstream" tabindex="-1"><a class="header-anchor" href="#bytearrayoutputstream" aria-hidden="true">#</a> <code>ByteArrayOutputStream</code></h3><ul><li>\u6784\u9020\u51FD\u6570</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">public</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E00\u822C\u65B9\u6CD5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">int</span> b<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">byte</span> b<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> off<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">writeTo</span><span class="token punctuation">(</span><span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span>

<span class="token keyword">byte</span> <span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7EC3\u4E601" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E601" aria-hidden="true">#</a> <strong>\u7EC3\u4E601</strong></h4><p>\u5B57\u8282\u6D41<code>ByteArrayInputStream</code>\u7684\u8BFB\u5199\u8FC7\u7A0B\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>app</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A7</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> mes <span class="token operator">=</span> <span class="token string">&quot;hello,world&quot;</span> <span class="token punctuation">;</span>
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> mes<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

		<span class="token class-name">ByteArrayInputStream</span> byteArrayInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span> b <span class="token punctuation">)</span> <span class="token punctuation">;</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>  <span class="token punctuation">;</span>

		<span class="token keyword">while</span><span class="token punctuation">(</span> <span class="token punctuation">(</span> result <span class="token operator">=</span> byteArrayInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> result <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			byteArrayInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA5MTQxNjQxMzYw?x-oss-process=image/format,png" alt="\u8FD9\u91CC\u5199\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><h4 id="\u7EC3\u4E602" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E602" aria-hidden="true">#</a> <strong>\u7EC3\u4E602</strong></h4><p>\u5C06<code>ByteArrayOutputStream</code>\u8BFB\u51FA\u7684\u5B57\u8282\u6D41\u7528<code>FileOutputStream</code>\u5199\u5165\u6587\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>app</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A6</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> mes <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u597D,world&quot;</span> <span class="token punctuation">;</span>
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> mes<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

		<span class="token class-name">ByteArrayOutputStream</span> byteArrayOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span> b <span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span> <span class="token string">&quot;F:/123.txt&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span>

			byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">writeTo</span><span class="token punctuation">(</span> fileOutputStream <span class="token punctuation">)</span> <span class="token punctuation">;</span>

			fileOutputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA5MTQxMzU1MjM1?x-oss-process=image/format,png" alt="\u8FD9\u91CC\u5199\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p>`,22);function y(w,g){const a=e("ExternalLinkIcon");return p(),c(l,null,[n("blockquote",null,[n("p",null,[r,k,d,n("a",m,[v,o(a)])])]),b],64)}var S=t(u,[["render",y],["__file","06-ByteArrayInputStream\u4E0EByteArrayOutputStream.html.vue"]]);export{S as default};

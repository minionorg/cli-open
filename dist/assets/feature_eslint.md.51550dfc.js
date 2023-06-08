import{_ as n,o as s,c as a,b as t}from"./app.608b9ebe.js";const h='{"title":"Code Detection \u4EE3\u7801\u68C0\u6D4B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code Detection \u4EE3\u7801\u68C0\u6D4B","slug":"code-detection-\u4EE3\u7801\u68C0\u6D4B"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"feature/eslint.md"}',e={},p=t(`<h2 id="code-detection-\u4EE3\u7801\u68C0\u6D4B" tabindex="-1">Code Detection \u4EE3\u7801\u68C0\u6D4B <a class="header-anchor" href="#code-detection-\u4EE3\u7801\u68C0\u6D4B" aria-hidden="true">#</a></h2><blockquote><p>Find and fix problems in your JavaScript code</p></blockquote><p>\u5F15\u7528\u5B98\u65B9\u7684\u8BF4\u6CD5: \u67E5\u627E\u548C\u4FEE\u590D\u4F60\u7684<strong>JavaScript</strong>\u4EE3\u7801</p><p>\u80FD\u5728\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4E3A\u56E2\u961F\u66F4\u597D\u7684\u89C4\u8303\u4EE3\u7801\u548C\u7BA1\u7406\u4EE3\u7801\u8D28\u91CF</p><p>\u672C\u6587\u7EA6\u5B9A\u5982\u4E0B:</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>.eslintrc.js</code></li><li>\u5FFD\u7565\u6587\u4EF6\u8868\u793A<code>.eslintignore</code></li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u6B64\u914D\u7F6E\u540E</p><ol><li><p>\u9996\u5148\u9009\u62E9\u914D\u7F6E\u7684\u7C7B\u578B\uFF1A<strong>JavaScript</strong> or <strong>Typescript</strong></p></li><li><p>\u7136\u540E\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\u914D\u7F6E\u8FC7\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u5DF2\u5B58\u5728\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u63D0\u793A\u662F\u5426\u6587\u4EF6\u66FF\u6362</li><li>\u5982\u679C\u5176\u5B83\u4F18\u5148\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4F18\u5148\u7EA7\u8986\u76D6</li></ul></li><li><p>\u540C\u65F6\u4F1A\u6709\u4E00\u4E2A\u5FFD\u7565\u6587\u4EF6\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5:</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\uFF0C\u5219\u521B\u5EFA</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u66FF\u6362</li></ul></li></ol><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5982\u679C\u9009\u62E9\u7684\u7C7B\u578B\u662F<strong>JavaScript</strong>\uFF0C\u811A\u624B\u67B6\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-define-config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@babel/eslint-parser&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">requireConfigFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jasmine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://eslint.org" target="_blank" rel="noopener noreferrer">ESLint</a>\u67E5\u770B</p>`,13),o=[p];function r(l,c,i,u,k,d){return s(),a("div",null,o)}var y=n(e,[["render",r]]);export{h as __pageData,y as default};

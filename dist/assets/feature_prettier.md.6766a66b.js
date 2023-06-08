import{_ as n,o as s,c as a,b as t}from"./app.50b88d21.js";const h='{"title":"Code Formatter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code Formatter","slug":"code-formatter"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"feature/prettier.md"}',o={},e=t(`<h2 id="code-formatter" tabindex="-1">Code Formatter <a class="header-anchor" href="#code-formatter" aria-hidden="true">#</a></h2><blockquote><p>ensures that all outputted code conforms to a consistent style.</p></blockquote><p>\u5F15\u7528\u5B98\u65B9\u7684\u8BF4\u6CD5: \u786E\u4FDD\u6240\u6709\u8F93\u51FA\u7684\u4EE3\u7801\u90FD\u7B26\u5408\u4E00\u81F4\u7684\u6837\u5F0F</p><p>\u8FD9\u6837\u540C\u4E00\u4E2A\u9879\u76EE\u5728\u591A\u4EBA\u5F00\u53D1\u4E2D\uFF0C\u786E\u4FDD\u4EE3\u7801\u6837\u5F0F\u90FD\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u7EF4\u62A4\u6027\u66F4\u9AD8\u3002</p><p>\u672C\u6587\u7EA6\u5B9A\u5982\u4E0B:</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>.prettierrc</code></li><li>\u5FFD\u7565\u6587\u4EF6\u8868\u793A<code>.prettierignore</code></li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u6B64\u914D\u7F6E\u540E</p><ol><li><p>\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\u914D\u7F6E\u8FC7\uFF0C\u5219\u521B\u5EFA</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u5DF2\u5B58\u5728\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u63D0\u793A\u662F\u5426\u6587\u4EF6\u66FF\u6362</li><li>\u5982\u679C<code>package.json</code>\u4E2D\u914D\u7F6E\u4E86\uFF0C\u90A3\u4E48\u4F1A\u63D0\u793A\u662F\u5426\u81EA\u884C\u5220\u9664\u914D\u7F6E\uFF0C\u518D\u521B\u5EFA\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4F18\u5148\u7EA7\u8986\u76D6\u3002\u56E0\u4E3A\u4E0D\u60F3\u8FC7\u591A\u5E72\u6D89\u7528\u6237\u7684\u5220\u9664\u64CD\u4F5C\uFF0C\u6240\u4EE5\u9700\u8981\u4F60\u5148\u5220\u9664\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u624D\u4F1A\u8D77\u6548\u679C</li><li>\u5982\u679C\u5176\u5B83\u4F18\u5148\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4F18\u5148\u7EA7\u8986\u76D6</li></ul></li><li><p>\u540C\u65F6\u4F1A\u6709\u4E00\u4E2A\u5FFD\u7565\u6587\u4EF6\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5:</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\uFF0C\u5219\u521B\u5EFA</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u66FF\u6362</li></ul></li></ol><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u811A\u624B\u67B6\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.prettierrc&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://prettier.io/docs/en/index.html" target="_blank" rel="noopener noreferrer">Prettier</a>\u67E5\u770B</p>`,13),p=[e];function r(l,c,u,i,k,d){return s(),a("div",null,p)}var _=n(o,[["render",r]]);export{h as __pageData,_ as default};

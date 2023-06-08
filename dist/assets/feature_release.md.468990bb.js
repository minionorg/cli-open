import{_ as n,o as a,c as e,b as s}from"./app.50b88d21.js";const d='{"title":"Release \u7248\u672C\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"Release \u7248\u672C\u7BA1\u7406","slug":"release-\u7248\u672C\u7BA1\u7406"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u5173\u4E8E\u65E5\u5FD7\u6587\u4EF6","slug":"\u5173\u4E8E\u65E5\u5FD7\u6587\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"feature/release.md"}',t={},o=s(`<h2 id="release-\u7248\u672C\u7BA1\u7406" tabindex="-1">Release \u7248\u672C\u7BA1\u7406 <a class="header-anchor" href="#release-\u7248\u672C\u7BA1\u7406" aria-hidden="true">#</a></h2><blockquote><p>Use release-it for version management and publish to anywhere with its versatile configuration, a powerful plugin system, and hooks to execute any command you need to test, build, and/or publish your project.</p></blockquote><p>\u5F15\u7528\u5B98\u65B9\u7684\u8BF4\u6CD5: \u7528\u4E8E\u81EA\u52A8\u5316\u7248\u672C\u63A7\u5236\u548C\u9879\u76EE\u53D1\u5E03\u76F8\u5173\u4EFB\u52A1</p><p>\u672C\u6587\u7EA6\u5B9A\u5982\u4E0B:</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>.release-it.json</code></li><li>\u65E5\u5FD7\u6587\u4EF6\u8868\u793A<code>CHANGELOG.md</code></li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u6B64\u914D\u7F6E\u540E</p><ol><li><p>\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\u914D\u7F6E\u8FC7\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u5DF2\u5B58\u5728\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u63D0\u793A\u662F\u5426\u6587\u4EF6\u66FF\u6362</li><li>\u5982\u679C\u5176\u5B83\u4F18\u5148\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4F18\u5148\u7EA7\u8986\u76D6</li><li>\u6700\u540E\u4F1A\u5728<code>package.json</code>\u4E2D\u751F\u6210\u53D1\u7248\u547D\u4EE4<strong>release</strong></li></ul></li><li><p>\u540C\u65F6\u4F1A\u8BE2\u95EE\u662F\u5426\u81EA\u52A8\u751F\u6210\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5:</p><ul><li>\u5982\u679C\u662F\uFF0C\u5219\u8FD0\u884C\u53D1\u7248\u547D\u4EE4\u540E\u81EA\u52A8\u751F\u6210\u65E5\u5FD7\u6587\u4EF6</li><li>\u5982\u679C\u5426\uFF0C\u5219\u9700\u8981\u65E5\u5FD7\u6587\u4EF6\u7684\u65F6\u5019\u53EF\u4EE5\u8FD0\u884C<strong>npm run changelog</strong></li></ul></li></ol><h3 id="\u5173\u4E8E\u65E5\u5FD7\u6587\u4EF6" tabindex="-1">\u5173\u4E8E\u65E5\u5FD7\u6587\u4EF6 <a class="header-anchor" href="#\u5173\u4E8E\u65E5\u5FD7\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u4F7F\u7528\u7684\u662F chestnut \u914D\u5957\u7684\u65E5\u5FD7\u6A21\u677F\u63D2\u4EF6<a href="https://github.com/bnuephjx/conventional-changelog-chestnut.git" target="_blank" rel="noopener noreferrer">conventional-changelog-chestnut</a></p><p>\u5982\u679C\u60F3\u4F7F\u7528\u5176\u5B83\u65E5\u5FD7\u6A21\u677F\u53EF\u4EE5\u79FB\u6B65<a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli" target="_blank" rel="noopener noreferrer">conventional-changelog-cli</a>\u67E5\u770B\u66F4\u591A\u7684\u8BE6\u60C5\u548C\u7528\u6CD5</p><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5982\u679C\u9009\u62E9\u81EA\u52A8\u751F\u6210\u65E5\u5FD7\u6587\u4EF6\uFF0C\u811A\u624B\u67B6\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;npm&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chore: release v\${version}&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;after:bump&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run changelog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;after:git:release&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo Successfully git push to \${repo.remote}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;after:release&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo Successfully released \${name} v\${version} to \${repo.repository}.&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@release-it/bumper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;in&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package.json&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;out&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package.json&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://github.com/release-it/release-it" target="_blank" rel="noopener noreferrer">release-it</a>\u67E5\u770B</p>`,15),p=[o];function r(l,c,u,i,h,k){return a(),e("div",null,p)}var q=n(t,[["render",r]]);export{d as __pageData,q as default};

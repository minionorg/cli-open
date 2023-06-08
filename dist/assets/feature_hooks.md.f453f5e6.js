import{_ as e,o as t,c as s,b as n}from"./app.50b88d21.js";const g='{"title":"Git Hooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git Hooks","slug":"git-hooks"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"feature/hooks.md"}',o={},a=n(`<h2 id="git-hooks" tabindex="-1">Git Hooks <a class="header-anchor" href="#git-hooks" aria-hidden="true">#</a></h2><blockquote><p>You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.</p></blockquote><p>\u5F15\u5165\u5B98\u65B9\u7684\u8BF4\u6CD5\uFF1A\u5F53 git commit \u6216\u8005 git push \u7684\u65F6\u5019\u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u63D0\u4EA4\u6D88\u606F\u3001\u8FD0\u884C\u6D4B\u8BD5\u3001\u68C0\u67E5\u4EE3\u7801\u7B49\u7B49\u3002</p><p>\u5728\u591A\u4EBA\u5F00\u53D1\u9879\u76EE\u56E2\u961F\u4E2D\uFF0C\u4E3A\u4E86\u89C4\u907F\u4EE3\u7801\u4ED3\u5E93\u7684\u4EE3\u7801\u8D28\u91CF\uFF0Cgit \u65E5\u5FD7\u4FE1\u606F\uFF0C\u505A\u5230\u4EE3\u7801\u4E00\u81F4\u6027\uFF0C\u4EE3\u7801\u8D28\u91CF\u6709\u4FDD\u969C\uFF0C\u6709\u5FC5\u8981\u5728\u63D0\u4EA4\u524D\u8FDB\u884C\u4E00\u6B21\u68C0\u67E5\u3002</p><p>\u672C\u6587\u7EA6\u5B9A\u5982\u4E0B:</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5939\u8868\u793A<code>.husky</code></li><li>\u63D0\u4EA4\u4FE1\u606F\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>commitlint.config.js</code></li><li>\u4EE3\u7801\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>.lintstagedrc</code></li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u6B64\u914D\u7F6E\u540E</p><ol><li><p>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5939\u76F8\u5173\u7684\u5305\u5982<code>husky</code>\u7B49\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\u914D\u7F6E\u8FC7\uFF0C\u5219\u521B\u5EFA</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u5DF2\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u6587\u4EF6\u66FF\u6362</li></ul></li><li><p>\u540C\u65F6\u8BE2\u95EE\u662F\u5426\u5728<code>Git Commit</code>\u63D0\u4EA4\u524D\u6821\u9A8C\u4EE3\u7801\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5:</p><ul><li>\u5982\u679C\u662F\uFF0C\u5219\u4F1A\u4F18\u5148\u6821\u9A8C\u662F\u5426\u5B89\u88C5<code>ESLint</code>\uFF0C\u5982\u679C\u6709\uFF0C\u5219\u5B89\u88C5\u4EE3\u7801\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6\u6240\u9700\u7684\u5305<code>lint-staged</code></li><li>\u5982\u679C\u5426\uFF0C\u5219\u9700\u8981\u81EA\u884C\u5B89\u88C5</li></ul></li></ol><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5982\u679C<code>Git Commit</code>\u63D0\u4EA4\u524D\u6821\u9A8C\u4EE3\u7801\uFF0C\u811A\u624B\u67B6\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5939\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-"><pre><code>.husky
  -- _(\u8FD9\u662F\u4E2A\u6587\u4EF6\u5939)
    -- .gitignore
    -- husky.sh
  -- commit-msg
  -- pre-commit
</code></pre></div><p><strong>\u3010\u91CD\u8981\u63D0\u9192\u3011\u3010\u91CD\u8981\u63D0\u9192\u3011\u3010\u91CD\u8981\u63D0\u9192\u3011</strong></p><p>\u5982\u679C\u6700\u540E\u6CA1\u6709\u8FDB\u884C\u68C0\u67E5\u63D0\u4EA4\u6D88\u606F\u3001\u8FD0\u884C\u6D4B\u8BD5\u3001\u68C0\u67E5\u4EE3\u7801\u7B49\u529F\u80FD\uFF0C\u8BF7\u8FDB\u884C<strong>Husky</strong>\u521D\u59CB\u5316\uFF1A</p><div class="language-bash"><pre><code>npx husky <span class="token function">install</span>
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://typicode.github.io/husky/#/" target="_blank" rel="noopener noreferrer">Husky</a>\u67E5\u770B</p><p>\u811A\u624B\u67B6\u751F\u6210\u63D0\u4EA4\u4FE1\u606F\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint</a>\u67E5\u770B</p><p>\u811A\u624B\u67B6\u751F\u6210\u4EE3\u7801\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;*.{vue,js,ts,jsx,tsx}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .vue,.js,.ts,.jsx,.tsx&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://github.com/okonet/lint-staged#readme" target="_blank" rel="noopener noreferrer">lint-staged</a>\u67E5\u770B</p>`,22),i=[a];function p(c,l,r,u,d,h){return t(),s("div",null,i)}var m=e(o,[["render",p]]);export{g as __pageData,m as default};

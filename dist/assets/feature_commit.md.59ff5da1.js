import{_ as t,o as e,c as a,b as s}from"./app.50b88d21.js";const g='{"title":"Commit Message Style","description":"","frontmatter":{},"headers":[{"level":2,"title":"Commit Message Style","slug":"commit-message-style"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"feature/commit.md"}',n={},o=s(`<h2 id="commit-message-style" tabindex="-1">Commit Message Style <a class="header-anchor" href="#commit-message-style" aria-hidden="true">#</a></h2><blockquote><p>When you commit with Commitizen, you&#39;ll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful)</p></blockquote><p>\u5F15\u7528\u5B98\u65B9\u7684\u8BF4\u6CD5\uFF1A\u5982\u679C\u9879\u76EE\u4E2D\u914D\u7F6E\u4E86 Git Commit Message \u89C4\u8303\uFF0C\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u5728\u63D0\u4EA4\u65F6\u586B\u5199\u4EFB\u4F55\u5FC5\u9700\u7684\u63D0\u4EA4\u5B57\u6BB5\u3002\u65E0\u9700\u518D\u7B49\u5230\u7A0D\u540E git \u63D0\u4EA4\u6302\u94A9\u8FD0\u884C\u5E76\u62D2\u7EDD\u3002</p><p>\u63D0\u4F9B\u4E86\u4E00\u5957 Git Commit Message \u7684\u6A21\u677F\uFF0C\u8FD9\u6837\u56E2\u961F\u5F00\u53D1\u4E2D\uFF0C\u4F7F\u7528\u7EDF\u4E00\u7684\u6A21\u677F\uFF0C\u80FD\u66F4\u597D\u8FFD\u8E2A\u548C\u7BA1\u7406 git \u7684\u65E5\u5FD7\u8BB0\u5F55\u3002</p><p>\u672C\u6587\u7EA6\u5B9A\u5982\u4E0B:</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8868\u793A<code>.czrc</code></li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u6B64\u914D\u7F6E\u540E\uFF0C\u51FA\u73B0\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u6CA1\u6709\u914D\u7F6E\u8FC7\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6</li><li>\u5982\u679C\u5F53\u524D\u9879\u76EE\u4E2D\u5DF2\u5B58\u5728\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u63D0\u793A\u662F\u5426\u6587\u4EF6\u66FF\u6362</li><li>\u5982\u679C\u5176\u5B83\u4F18\u5148\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u63D0\u793A\u662F\u5426\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4F18\u5148\u7EA7\u8986\u76D6</li></ul><p>\u5F53\u5B89\u88C5\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C<strong>git add</strong>\u540E\uFF0C\u8FD0\u884C</p><div class="language-bash"><pre><code><span class="token function">git</span> cz
</code></pre></div><p>\u8FD9\u65F6\u5019\u5C31\u4F1A\u770B\u5230\u63D0\u4EA4\u6A21\u677F</p><div class="language-bash"><pre><code>? Select the <span class="token builtin class-name">type</span> of change that you&#39;re committing: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that <span class="token keyword">do</span> not affect the meaning of the code <span class="token punctuation">(</span>white-space, formatting, missing semi-colons, etc<span class="token punctuation">)</span>
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
<span class="token punctuation">(</span>Move up and down to reveal <span class="token function">more</span> choices<span class="token punctuation">)</span>
</code></pre></div><p>\u7C7B\u578B\u9009\u62E9\u5927\u81F4\u5982\u4E0B:</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>feat</td><td>\u65B0\u589E\u4E00\u4E2A\u529F\u80FD</td></tr><tr><td>fix</td><td>\u4FEE\u590D\u4E00\u4E2A Bug</td></tr><tr><td>docs</td><td>\u6587\u6863\u53D8\u66F4</td></tr><tr><td>style</td><td>\u4EE3\u7801\u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u529F\u80FD\uFF0C\u4F8B\u5982\u7A7A\u683C\u3001\u5206\u53F7\u7B49\u683C\u5F0F\u4FEE\u6B63\uFF09</td></tr><tr><td>refactor</td><td>\u4EE3\u7801\u91CD\u6784</td></tr><tr><td>perf</td><td>\u6539\u5584\u6027\u80FD</td></tr><tr><td>test</td><td>\u6D4B\u8BD5\u76F8\u5173</td></tr><tr><td>build</td><td>\u53D8\u66F4\u9879\u76EE\u6784\u5EFA\u6216\u5916\u90E8\u4F9D\u8D56\uFF08\u4F8B\u5982 scopes: webpack\u3001gulp\u3001npm \u7B49\uFF09</td></tr><tr><td>ci</td><td>\u66F4\u6539\u6301\u7EED\u96C6\u6210\u8F6F\u4EF6\u7684\u914D\u7F6E\u6587\u4EF6\u6216 package \u4E2D\u7684 scripts \u547D\u4EE4\uFF0C\u4F8B\u5982 scopes: Travis, Circle \u7B49</td></tr><tr><td>chore</td><td>\u5176\u4ED6\u4E0D\u4FEE\u6539src\u6216\u6D4B\u8BD5\u6587\u4EF6\u7684\u66F4\u6539\uFF08\u4E00\u4E9B\u65E0\u5173\u7D27\u8981\u7684\u66F4\u6539\uFF09</td></tr><tr><td>revert</td><td>\u4EE3\u7801\u56DE\u9000</td></tr></tbody></table><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u811A\u624B\u67B6\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5927\u6982\u5982\u4E0B:</p><div class="language-"><pre><code>{
  &quot;path&quot;: &quot;./node_modules/cz-conventional-changelog&quot;
}
</code></pre></div><p>\u66F4\u591A\u8BE6\u60C5\u4FE1\u606F\u548C\u914D\u7F6E\u53EF\u4EE5\u79FB\u6B65<a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">commitizen</a>\u67E5\u770B</p>`,19),i=[o];function r(c,d,l,p,m,u){return e(),a("div",null,i)}var f=t(n,[["render",r]]);export{g as __pageData,f as default};

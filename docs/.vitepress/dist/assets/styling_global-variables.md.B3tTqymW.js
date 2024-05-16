import{_ as a,c as s,o as e,a4 as l}from"./chunks/framework._UsQjgc3.js";const g=JSON.parse('{"title":"Global Variables","description":"","frontmatter":{},"headers":[],"relativePath":"styling/global-variables.md","filePath":"styling/global-variables.md","lastUpdated":null}'),t={name:"styling/global-variables.md"},i=l(`<h1 id="global-variables" tabindex="-1">Global Variables <a class="header-anchor" href="#global-variables" aria-label="Permalink to &quot;Global Variables&quot;">​</a></h1><p>Quasar CLI-managed apps have the ability to set global (app level) CSS/SCSS variables you can learn more about it Quasar SCSS Variables <a href="https://quasar.dev/style/sass-scss-variables#introduction" target="_blank" rel="noreferrer">here</a>.</p><p>To make sure all variables are available globally from app init we need to save them in the <code>quasar.variables.scss</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>quasar.variables.scss</code> will run before any other css global file to make sure variables are available globally, so you can&#39;t set variables anywhere else but this file or other partials that are imported in this file.</p></div><h2 id="add-a-global-variable" tabindex="-1">Add A Global Variable <a class="header-anchor" href="#add-a-global-variable" aria-label="Permalink to &quot;Add A Global Variable&quot;">​</a></h2><p>For better developer experience in this project, we use <a href="https://sass-lang.com/documentation/at-rules/import/#nesting" target="_blank" rel="noreferrer">SCSS nested partials</a> to categorize the variables and then importing these partials to the <code>quasar.variables.scss</code> file like so</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-z5jd4" id="tab-BU82Cdw" checked="checked"><label for="tab-BU82Cdw">_breakouts.scss (SCSS partial)</label><input type="radio" name="group-z5jd4" id="tab-bDxm4Hl"><label for="tab-bDxm4Hl">quasar.variables.scss</label></div><div class="blocks"><div class="language-scss vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$mq-480-down</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;only screen and (max-width: 480px)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @import &quot;&lt;file_path&gt;/&lt;scss_partial_name&gt;&quot;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// e.g.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;breakouts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>currently, the colors are directly in the <code>quasar.variables.scss</code> file, and that might change in the future if need may be.</p></div>`,8),r=[i];function o(n,p,c,d,h,b){return e(),s("div",null,r)}const k=a(t,[["render",o]]);export{g as __pageData,k as default};

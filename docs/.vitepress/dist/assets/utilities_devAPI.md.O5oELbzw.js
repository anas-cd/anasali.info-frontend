import{_ as t,c as e,o as s,a4 as a}from"./chunks/framework._UsQjgc3.js";const k=JSON.parse('{"title":"devAPI","description":"","frontmatter":{},"headers":[],"relativePath":"utilities/devAPI.md","filePath":"utilities/devAPI.md","lastUpdated":1715885184000}'),i={name:"utilities/devAPI.md"},n=a(`<h1 id="devapi" tabindex="-1">devAPI <a class="header-anchor" href="#devapi" aria-label="Permalink to &quot;devAPI&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>this is a <strong>development only</strong> utility.</p></div><p>This utility is used to handle API requests during development.</p><h2 id="api-functions" tabindex="-1">API Functions <a class="header-anchor" href="#api-functions" aria-label="Permalink to &quot;API Functions&quot;">​</a></h2><h3 id="delayrequest" tabindex="-1">- <code>delayRequest()</code> <a class="header-anchor" href="#delayrequest" aria-label="Permalink to &quot;- \`delayRequest()\`&quot;">​</a></h3><p><strong>description:</strong> simulating a waiting time when calling APIs for testing by returning a promise that resolves in a specified number of milliseconds</p><p><strong>arguments:</strong></p><table><thead><tr><th style="text-align:center;">arg name</th><th style="text-align:center;">type</th><th style="text-align:center;">required</th><th style="text-align:center;">default</th><th style="text-align:center;">description</th></tr></thead><tbody><tr><td style="text-align:center;">ms</td><td style="text-align:center;">Number</td><td style="text-align:center;">❎</td><td style="text-align:center;">0 - 1000 ms (random)</td><td style="text-align:center;">number of milliseconds untill resolving the promise</td></tr></tbody></table><p><strong>return value:</strong> returns a Promise</p><p><strong>usage:</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* -- dev -- */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delayRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// apply delay, Note this is synchronous</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apiClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Data.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h3 id="simulateaxioserror" tabindex="-1">- <code>simulateAxiosError()</code> <a class="header-anchor" href="#simulateaxioserror" aria-label="Permalink to &quot;- \`simulateAxiosError()\`&quot;">​</a></h3><p><strong>description:</strong> returns an error structured like an Axios error.</p><p><strong>arguments:</strong></p><table><thead><tr><th style="text-align:center;">arg name</th><th style="text-align:center;">type</th><th style="text-align:center;">required</th><th style="text-align:center;">default</th><th style="text-align:center;">description</th></tr></thead><tbody><tr><td style="text-align:center;">message</td><td style="text-align:center;">String</td><td style="text-align:center;">✴️</td><td style="text-align:center;">-</td><td style="text-align:center;">error message to return</td></tr><tr><td style="text-align:center;">status</td><td style="text-align:center;">Number</td><td style="text-align:center;">❎</td><td style="text-align:center;">500</td><td style="text-align:center;">error code</td></tr></tbody></table><p><strong>return value:</strong> returns an error Object structured like an Axios error.</p>`,16),r=[n];function l(d,o,h,p,c,g){return s(),e("div",null,r)}const y=t(i,[["render",l]]);export{k as __pageData,y as default};
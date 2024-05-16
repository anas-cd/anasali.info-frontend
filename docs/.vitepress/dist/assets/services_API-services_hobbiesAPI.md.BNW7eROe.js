import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework._UsQjgc3.js";const x=JSON.parse('{"title":"hobbiesAPI","description":"","frontmatter":{},"headers":[],"relativePath":"services/API-services/hobbiesAPI.md","filePath":"services/API-services/hobbiesAPI.md","lastUpdated":1715885184000}'),s={name:"services/API-services/hobbiesAPI.md"},i=r('<h1 id="hobbiesapi" tabindex="-1">hobbiesAPI <a class="header-anchor" href="#hobbiesapi" aria-label="Permalink to &quot;hobbiesAPI&quot;">​</a></h1><p>the courses API handler interacts with the backend <code>hobbies</code> API.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.</p></div><h2 id="api-client" tabindex="-1">API Client <a class="header-anchor" href="#api-client" aria-label="Permalink to &quot;API Client&quot;">​</a></h2><h3 id="axios-instance" tabindex="-1">Axios Instance <a class="header-anchor" href="#axios-instance" aria-label="Permalink to &quot;Axios Instance&quot;">​</a></h3><ul><li><p><strong>request</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">baseURL</td><td style="text-align:center;"><code>apis/hobbies</code></td></tr><tr><td style="text-align:center;">timeout</td><td style="text-align:center;">30000</td></tr></tbody></table></li><li><p><strong>headers</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">Accept</td><td style="text-align:center;">&quot;application/json&quot;</td></tr></tbody></table></li></ul><h3 id="axios-retries" tabindex="-1">Axios Retries <a class="header-anchor" href="#axios-retries" aria-label="Permalink to &quot;Axios Retries&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">retries</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">retryDelay</td><td style="text-align:center;">0</td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="gethobbiesdata" tabindex="-1">- <code>getHobbiesData()</code> <a class="header-anchor" href="#gethobbiesdata" aria-label="Permalink to &quot;- `getHobbiesData()`&quot;">​</a></h3><p><strong>description:</strong> retrieve all records from the database.</p><p><strong>return value:</strong> Promise.</p>',12),o=[i];function n(l,c,d,h,b,p){return a(),e("div",null,o)}const g=t(s,[["render",n]]);export{x as __pageData,g as default};
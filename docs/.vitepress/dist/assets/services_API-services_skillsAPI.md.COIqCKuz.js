import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework._UsQjgc3.js";const x=JSON.parse('{"title":"skillsAPI","description":"","frontmatter":{},"headers":[],"relativePath":"services/API-services/skillsAPI.md","filePath":"services/API-services/skillsAPI.md","lastUpdated":1715885184000}'),r={name:"services/API-services/skillsAPI.md"},l=s('<h1 id="skillsapi" tabindex="-1">skillsAPI <a class="header-anchor" href="#skillsapi" aria-label="Permalink to &quot;skillsAPI&quot;">​</a></h1><p>the courses API handler interacts with the backend <code>skills</code> API.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.</p></div><h2 id="api-client" tabindex="-1">API Client <a class="header-anchor" href="#api-client" aria-label="Permalink to &quot;API Client&quot;">​</a></h2><h3 id="axios-instance" tabindex="-1">Axios Instance <a class="header-anchor" href="#axios-instance" aria-label="Permalink to &quot;Axios Instance&quot;">​</a></h3><ul><li><p><strong>request</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">baseURL</td><td style="text-align:center;"><code>apis/skills</code></td></tr><tr><td style="text-align:center;">timeout</td><td style="text-align:center;">30000</td></tr></tbody></table></li><li><p><strong>headers</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">Accept</td><td style="text-align:center;">&quot;application/json&quot;</td></tr></tbody></table></li></ul><h3 id="axios-retries" tabindex="-1">Axios Retries <a class="header-anchor" href="#axios-retries" aria-label="Permalink to &quot;Axios Retries&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">retries</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">retryDelay</td><td style="text-align:center;">0</td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getskillsdata" tabindex="-1">- <code>getSkillsData()</code> <a class="header-anchor" href="#getskillsdata" aria-label="Permalink to &quot;- `getSkillsData()`&quot;">​</a></h3><p><strong>description:</strong> retrieve all records from the database.</p><p><strong>return value:</strong> Promise.</p>',12),i=[l];function n(o,c,d,h,p,u){return a(),e("div",null,i)}const g=t(r,[["render",n]]);export{x as __pageData,g as default};

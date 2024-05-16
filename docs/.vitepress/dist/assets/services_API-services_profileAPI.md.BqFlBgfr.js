import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework._UsQjgc3.js";const b=JSON.parse('{"title":"profileAPI","description":"","frontmatter":{},"headers":[],"relativePath":"services/API-services/profileAPI.md","filePath":"services/API-services/profileAPI.md","lastUpdated":null}'),i={name:"services/API-services/profileAPI.md"},o=r('<h1 id="profileapi" tabindex="-1">profileAPI <a class="header-anchor" href="#profileapi" aria-label="Permalink to &quot;profileAPI&quot;">​</a></h1><p>the courses API handler interacts with the backend <code>profile</code> API.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.</p></div><h2 id="api-client" tabindex="-1">API Client <a class="header-anchor" href="#api-client" aria-label="Permalink to &quot;API Client&quot;">​</a></h2><h3 id="axios-instance" tabindex="-1">Axios Instance <a class="header-anchor" href="#axios-instance" aria-label="Permalink to &quot;Axios Instance&quot;">​</a></h3><ul><li><p><strong>request</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">baseURL</td><td style="text-align:center;"><code>apis/profile</code></td></tr><tr><td style="text-align:center;">timeout</td><td style="text-align:center;">30000</td></tr></tbody></table></li><li><p><strong>headers</strong></p><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">Accept</td><td style="text-align:center;">&quot;application/json&quot;</td></tr></tbody></table></li></ul><h3 id="axios-retries" tabindex="-1">Axios Retries <a class="header-anchor" href="#axios-retries" aria-label="Permalink to &quot;Axios Retries&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">property</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">retries</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">retryDelay</td><td style="text-align:center;">0</td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getprofiledata" tabindex="-1">- <code>getProfileData()</code> <a class="header-anchor" href="#getprofiledata" aria-label="Permalink to &quot;- `getProfileData()`&quot;">​</a></h3><p><strong>description:</strong> retrieve my profile data and contact info from the database.</p><p><strong>return value:</strong> Promise.</p>',12),l=[o];function n(s,c,d,h,p,f){return a(),e("div",null,l)}const x=t(i,[["render",n]]);export{b as __pageData,x as default};

import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework._UsQjgc3.js";const y=JSON.parse('{"title":"ProjectCard.vue","description":"","frontmatter":{},"headers":[],"relativePath":"components/macro/ProjectCard.md","filePath":"components/macro/ProjectCard.md","lastUpdated":null}'),n={name:"components/macro/ProjectCard.md"},i=r('<h1 id="projectcard-vue" tabindex="-1">ProjectCard.vue <a class="header-anchor" href="#projectcard-vue" aria-label="Permalink to &quot;ProjectCard.vue&quot;">​</a></h1><p>This component is a card used to display information about a project I worked on. It can be used as an item in a list or as a standalone component.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">Prop Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Required</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">projectData</td><td style="text-align:center;">Object</td><td style="text-align:center;">-</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Project data object</td></tr><tr><td style="text-align:center;">orientation</td><td style="text-align:center;">String</td><td style="text-align:center;">&#39;horizontal&#39;</td><td style="text-align:center;">❎</td><td style="text-align:center;">Orientation of the interest card [&#39;horizontal&#39;, &#39;vertical&#39;]</td></tr></tbody></table><ul><li><p><strong><code>projectData</code> Object</strong></p><table><thead><tr><th style="text-align:center;">Property Name</th><th style="text-align:center;">Required</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Project&#39;s name</td></tr><tr><td style="text-align:center;">image</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Descriptive image of project</td></tr><tr><td style="text-align:center;">description</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Project&#39;s description</td></tr><tr><td style="text-align:center;">tags</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Project&#39;s tags</td></tr><tr><td style="text-align:center;">demoLink</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Live website link</td></tr><tr><td style="text-align:center;">codeLink</td><td style="text-align:center;">✴️</td><td style="text-align:center;">Link to GitHub repo</td></tr></tbody></table></li></ul><h2 id="code-explained" tabindex="-1">Code Explained <a class="header-anchor" href="#code-explained" aria-label="Permalink to &quot;Code Explained&quot;">​</a></h2><h3 id="orientation" tabindex="-1">Orientation <a class="header-anchor" href="#orientation" aria-label="Permalink to &quot;Orientation&quot;">​</a></h3><p>If orientation is not specified, the card will automatically reorient itself depending on its size. Once its size is smaller than 420px, it will switch to vertical mode (image top, then informatives bottom). When the size changes, the Quasar component <a href="https://quasar.dev/vue-components/resize-observer#qresizeobserver-api" target="_blank" rel="noreferrer"><code>q-resize-observer</code></a> will call the function <code>reOrient</code> to change the orientation if needed.</p>',8),o=[i];function d(l,c,s,h,p,g){return a(),e("div",null,o)}const m=t(n,[["render",d]]);export{y as __pageData,m as default};
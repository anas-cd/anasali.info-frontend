import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework._UsQjgc3.js";const E=JSON.parse('{"title":"Adding Global Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/adding-global-plugins.md","filePath":"plugins/adding-global-plugins.md","lastUpdated":null}'),n={name:"plugins/adding-global-plugins.md"},t=e(`<h1 id="adding-global-plugins" tabindex="-1">Adding Global Plugins <a class="header-anchor" href="#adding-global-plugins" aria-label="Permalink to &quot;Adding Global Plugins&quot;">​</a></h1><p>when adding plugins that need injecting dependencies or registering global components you can use <a href="https://quasar.dev/quasar-cli-vite/boot-files" target="_blank" rel="noreferrer">Quasar&#39;s boot files</a> for this, you need to make a boot file whenever you need to run code before the root Vue app instance is instantiated.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>not all plugins need a boot file, you can check <a href="https://quasar.dev/quasar-cli-vite/boot-files#examples-of-appropriate-usage-of-boot-files" target="_blank" rel="noreferrer">these examples</a> about when to use a boot file from Quasar docs.</p></div><h2 id="how-to-add-a-plugin" tabindex="-1">How To Add A Plugin <a class="header-anchor" href="#how-to-add-a-plugin" aria-label="Permalink to &quot;How To Add A Plugin&quot;">​</a></h2><p>every plugin might require different steps but generally here is how it works.</p><h3 id="install-it" tabindex="-1">Install It <a class="header-anchor" href="#install-it" aria-label="Permalink to &quot;Install It&quot;">​</a></h3><p>usually using a package manager like NPM, Yarn, etc...</p><p>e.g.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> swiper</span></span></code></pre></div><h3 id="make-a-boot-file" tabindex="-1">Make A Boot File <a class="header-anchor" href="#make-a-boot-file" aria-label="Permalink to &quot;Make A Boot File&quot;">​</a></h3><p>under the <code>src/boot/</code> directory you need to add a new .js file containing the required code for this plugin to work.</p><p>e.g.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-b-ViJ" id="tab-g3Y9sWD" checked="checked"><label for="tab-g3Y9sWD">swiper.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// following Swiper&#39;s docs</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { register } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;swiper/element/bundle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // something to do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // for example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // app.use(...); // if needed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><h3 id="register-the-boot-file" tabindex="-1">Register The Boot File <a class="header-anchor" href="#register-the-boot-file" aria-label="Permalink to &quot;Register The Boot File&quot;">​</a></h3><p>After making the boot file you need to add it to <code>quasar.config.js</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3YKEe" id="tab-qtZO4gj" checked="checked"><label for="tab-qtZO4gj">quasar.config.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    boot: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;swiper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div></div><h3 id="other-than-boot-files" tabindex="-1">Other Than Boot Files <a class="header-anchor" href="#other-than-boot-files" aria-label="Permalink to &quot;Other Than Boot Files&quot;">​</a></h3><p>Sometimes plugins need to have additional configuration, for example, <code>Swiper</code> uses custom components that Vite doesn&#39;t recognize, so we needed to add the custom component so</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eTiz1" id="tab-9xDYEJV" checked="checked"><label for="tab-9xDYEJV">quasar.config.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    viteVuePluginOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        compilerOptions: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          isCustomElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tag.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;swiper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div></div>`,19),l=[t];function p(h,o,k,d,r,g){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};

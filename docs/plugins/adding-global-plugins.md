---
# YAML Frontmatter properties
---

# Adding Global Plugins

when adding plugins that need injecting dependencies or registering global components you can use [Quasar's boot files](https://quasar.dev/quasar-cli-vite/boot-files) for this, you need to make a boot file whenever you need to run code before the root Vue app instance is instantiated.

::: warning
not all plugins need a boot file, you can check [these examples](https://quasar.dev/quasar-cli-vite/boot-files#examples-of-appropriate-usage-of-boot-files) about when to use a boot file from Quasar docs.
:::

## How To Add A Plugin

every plugin might require different steps but generally here is how it works.

### Install It

usually using a package manager like NPM, Yarn, etc...

e.g.

```bash
npm install swiper
```

### Make A Boot File

under the `src/boot/` directory you need to add a new .js file containing the required code for this plugin to work.

e.g.

::: code-group

```js [swiper.js]
// following Swiper's docs
import { register } from "swiper/element/bundle";
register();

export default ({ app }) => {
  // something to do
  // for example
  // app.use(...); // if needed
};
```

:::

### Register The Boot File

After making the boot file you need to add it to `quasar.config.js`

::: code-group

```js [quasar.config.js]
export default configure((ctx) => {
  return {
    ...
    boot: ["swiper", ...] // [!code focus]
    ...
  }
});
```

:::

### Other Than Boot Files

Sometimes plugins need to have additional configuration, for example, `Swiper` uses custom components that Vite doesn't recognize, so we needed to add the custom component so

::: code-group

```js [quasar.config.js]
export default configure((ctx) => {
  return {
    viteVuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("swiper"),
        },
      },
    },
  };
});
```

:::

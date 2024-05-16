---
# YAML Frontmatter properties
---

# SFC Styling

Using Vue's SFC `.vue` enables us to write styling in the same file as the HTML (inside the `<template>` tags) and JavaScript (inside the `<script>` tags) using the `<style>` tags, in this project we use SCSS so we always need to specify that when we start the `<style>` tags like so

```vue
// notice 'lange="scss"'
<style lang="scss"></style>
```

In this project, all component styling is scoped except for page-level

```vue
// notice 'scoped'
<style lang="scss" scoped></style>
```

this will make only the root class of the component accessible for layout purposes in the parent component, if you need to access some element deep into the component from the parent you need to use `:deep(<selector>)` like so

::: code-group

```vue [component.vue]
<style lang="scss" scoped>
.image-component{ // [!code focus:3]
  .inner-element { ... }
}
</style>
```

```vue [parent.vue]
<style lang="scss" scoped>
.image-component: deep(.inner-element){ ... } // [!code focus]
</style>
```

:::

for more info about scoped CSS you can read [Vue's SFC CSS features](https://vuejs.org/api/sfc-css-features.html).

all components need to use the same component name as the root class name with kabab cases syntax like so

::: code-group

```vue [imageComponent.vue]
<style lang="scss" scoped>
.image-component{ ... } // [!code focus]
</style>
```

:::

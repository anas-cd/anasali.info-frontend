---
# YAML Frontmatter properties
---

# Global Classes

Global classes can be accessed anywhere in the app, you can also use the global variables values since `quasar.variables.scss` gets computed first.

### Add A Global Class

you can add global classes to the `app.scss` file directly, however for a better developer experience please categorize the classes and then add them separately like so

**step 1**

make a file with the needed classes (for example we will set classes of bg colors)

::: code-group

```scss [colors.scss]
.bg-red {
  background-color: red;
}
.bg-green {
  background-color: green;
}
.bg-blue {
  background-color: blue;
}
```

:::

**step 2**

add the file to the css property of `quasar.config.js` like so

::: code-group

```js [quasar.config.js]
export default configure((ctx) => {
  return {

    css: ["colors.scss", ...], // [!code focus]

  }
}
```

:::

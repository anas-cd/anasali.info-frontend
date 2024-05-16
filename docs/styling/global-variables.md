---
# YAML Frontmatter properties
---

# Global Variables

Quasar CLI-managed apps have the ability to set global (app level) CSS/SCSS variables you can learn more about it Quasar SCSS Variables [here](https://quasar.dev/style/sass-scss-variables#introduction).

To make sure all variables are available globally from app init we need to save them in the `quasar.variables.scss`.

::: tip
`quasar.variables.scss` will run before any other css global file to make sure variables are available globally, so you can't set variables anywhere else but this file or other partials that are imported in this file.
:::

## Add A Global Variable

For better developer experience in this project, we use [SCSS nested partials](https://sass-lang.com/documentation/at-rules/import/#nesting) to categorize the variables and then importing these partials to the `quasar.variables.scss` file like so

::: code-group

```scss [_breakouts.scss (SCSS partial)]
$mq-480-down: "only screen and (max-width: 480px)";
```

```scss [quasar.variables.scss]
// @import "<file_path>/<scss_partial_name>";
// e.g.
@import "breakouts";
```

:::

:::info
currently, the colors are directly in the `quasar.variables.scss` file, and that might change in the future if need may be.
:::

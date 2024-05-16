---
# YAML Frontmatter properties
---

# Layout Switching

Since this is a cross-platform application we need to have multiple layouts one for each platform, we can use the layouts folder scaffolded by Quasar to store our layouts.

Currently, there are only build mode specific layouts, we only have two as of yet,

- `WebLayout.vue`: for browser modes (e.g. SPA)
- `MobileLayout.vue`: for native mobile app modes (e.g. Capacitor)

## Selecting Layouts

we can select which layout to choose from the Vue router, for example, we can choose the layout depending on the build mode like so:

::: code-group

```js [router/routes.js]
const routes = [
  {
    // [!code focus:6]
    path: "/",
    component: () =>
      process.env.MODE.toUpperCase() == "CAPACITOR"
        ? import("layouts/MobileLayout.vue")
        : import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/MainPage/CVPage.vue") },
    ],
  },
];
```

:::

Furthermore more we can select page-specific layouts the same way, for example, we can have a dedicated layout for the login/sign-up page, and using the same technique we can select a different layout for specific pages

::: code-group

```js [router/routes.js]
const routes = [
  {
    // [!code focus:4]
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },
];
```

:::

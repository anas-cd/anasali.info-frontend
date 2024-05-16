---
# YAML Frontmatter properties
---

# localBrowser

This utility is used to open an in-app browser if applicable, it will open an in-app browser when running a native mobile runtime (Capacitor) or open a new tap when the app is running as an SPA.

This utility uses the [Capacitor Browser Plugin](https://capacitorjs.com/docs/apis/browser), for more info please check their documentation.

## API Functions

::: details info about event listeners
Event listeners are fixed for one instance, thus the moment one page is opened all listeners are linked to it.
:::

### - `openLink`

**description:** opens a link in an in-app-browser if possible

**arguments:**

|  arg name   |  type   |           required             | default  |     description     |
| :---------: | :-----: | :----------------------------: | :------: | :-----------------: |
|    link     | String  |  :eight_pointed_black_star:    |    -     |    link to open     |
| openOptions | Object  | :negative_squared_cross_mark:  |   \*     | check options below |

**options:**

| arg name   |  type   |           required             | default  |                                      description                                       |
| :--------: | :-----: | :----------------------------: | :------: | :------------------------------------------------------------------------------------: |
| listeners  | Boolean | :negative_squared_cross_mark:  |  false   | whether to add listeners for when the tap is finished and loaded. (Android / IOS only) |

**return value:** NONE

**usage:**

::: code-group

```vue [component.vue]
<template>
<!-- usage in template -->
  <a
    href="link"
    target="_blank"
    @click.prevent="localBrowser.openLink("link")"
  >click here</a>
</template>

<script setup>
import localBrowser from "src/utils/localBrowser";

localBrowser.openLink("link");
</script>

```

:::

::: tip
when having an external link in our template it's better for UX if we can show this link on hover, thus we can use the anchor tag `<a>` with `href` to give us the link effect and hinting logic then we use Vue's `prevent` modifier to stop the anchor's original logic when clicked and use our own.
:::

### - `onLoaded`

::: warning
Android / IOS only
:::

**description:** execute a callback function when the browser page is loaded

**arguments:**

| arg name |   type   |          required           | default  |     description     |
| :------: | :------: | :-------------------------: | :------: | :-----------------: |
| callBack | Function | :eight_pointed_black_star:  |    -     | function to execute |

**return value:** [Promise](https://capacitorjs.com/docs/apis/browser#pluginlistenerhandle)

**usage:**

::: code-group

```vue [component.vue]
<script setup>
import localBrowser from "src/utils/localBrowser";

localBrowser.onLoaded(function {
  // code ...
});
</script>
```

:::

### - `onFinished`

::: warning
Android / IOS only
:::

**description:** execute a callback function when the browser page is closed

**arguments:**

| arg name |   type   |          required           | default  |     description     |
| :------: | :------: | :-------------------------: | :------: | :-----------------: |
| callBack | Function | :eight_pointed_black_star:  |    -     | function to execute |

**return value:** [Promise](https://capacitorjs.com/docs/apis/browser#pluginlistenerhandle)

**usage:**

::: code-group

```vue [component.vue]
<script setup>
import localBrowser from "src/utils/localBrowser";

localBrowser.onFinished(function {
  // code ...
});
</script>
```

:::

### - `removeListener`

::: warning
Android / IOS only
:::

::: details naming fix on the way
the name currently does not convey the actual functionality, will be changed to `removeAllListeners()` on the next major version change.
:::

**description:** to remove all native listeners for the Capacitor plugin.

**return value:** NONE

**usage:**

::: code-group

```vue [component.vue]
<script setup>
import localBrowser from "src/utils/localBrowser";

localBrowser.removeListener();
</script>
```

### - `closeLink`

::: warning
Web / IOS only
:::

**description:** to close the currently displayed page.

**return value:** NONE

**usage:**

::: code-group

```vue [component.vue]
<script setup>
import localBrowser from "src/utils/localBrowser";

localBrowser.closeLink();
</script>
```

:::

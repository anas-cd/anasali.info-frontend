---
# YAML Frontmatter properties
---

# scrollToElement

::: danger
URL scrolling is yet to be implemented
:::

::: warning
for arguments ["el", "elId"] the element should be already mounted otherwise it will throw an error since it can't find the element in DOM.
:::

**description:** This utility function uses the [Quasar Scroll Utility](https://quasar.dev/quasar-utils/scrolling-utils) to scroll to an element in the page.

**options:**

|         arg name           |  type   |                         required                         |       default        |                    description                     |
| :------------------------: | :-----: | :------------------------------------------------------: | :------------------: | :------------------------------------------------: |
|            el              | Object  | :eight_pointed_black_star:/:negative_squared_cross_mark: |          -           |      element object (e.g. from Vue's `ref`)        |
|           elId             | String  | :eight_pointed_black_star:/:negative_squared_cross_mark: |          -           |                    element id                      |
| url (**not working yet**)  | String  | :eight_pointed_black_star:/:negative_squared_cross_mark: |          -           | url hash (e.g. "www.example.com/page#element-id")  |
|         marginTop          | Number  |              :negative_squared_cross_mark:               |         20           |             margin from top in pixels              |
|         duration           | Number  |              :negative_squared_cross_mark:               |         150          |            scroll transition duration              |
|        styleClass          | String  |              :negative_squared_cross_mark:               | "card\_\_highlight"  |      class added to the element scrolled to        |
|       styleDuration        | Number  |              :negative_squared_cross_mark:               |        3000          |        duration of the added scroll class          |

**return value:** NONE

**usage:**

```js
import scrollToElement from "src/utils/scrollToElement";

scrollToElement({ elId: "contact" });
```

---
# YAML Frontmatter properties
---

# handleError

::: danger Incomplete
this utility is not ready for production yet, it only logs the errors for now.
:::

**description:** This utility function is a global error handler used to handle thrown errors anywhere.

**arguments:**

|  arg name  |  type   |           required            |       default       |                    description                    |
| :--------: | :-----: | :---------------------------: | :-----------------: | :-----------------------------------------------: |
|   error    |  Error  |  :eight_pointed_black_star:   |          -          |                   error object                    |
|  message   | String  | :negative_squared_cross_mark: | "An error occured." |              error explainer message              |
| uiFeedback | Boolean | :negative_squared_cross_mark: |        false        | wheather to show error message to the user or not |

**return value:** NONE

**usage:**

```js
import handleError from "src/utils/handleError.js";

try {
  // code throws error...
} catch (error) {
  handleError(error, "oops", false); // [!code focus]
}
```

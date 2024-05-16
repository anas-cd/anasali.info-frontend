---
# YAML Frontmatter properties
---

# devAPI

::: danger
this is a **development only** utility.
:::

This utility is used to handle API requests during development.

## API Functions

### - `delayRequest()`

**description:** simulating a waiting time when calling APIs for testing by returning a promise that resolves in a specified number of milliseconds

**arguments:**

| arg name  |  type   |           required             |       default         |                     description                     |
| :-------: | :-----: | :----------------------------: | :-------------------: | :-------------------------------------------------: |
|    ms     | Number  | :negative_squared_cross_mark:  | 0 - 1000 ms (random)  | number of milliseconds untill resolving the promise |

**return value:** returns a Promise

**usage:**

```js
/* -- dev -- */
async getData() {
  ...
  devAPI.delayRequest(); // [!code focus] // apply delay, Note this is synchronous
  ...
  return apiClient.get("Data.json");
},
```

### - `simulateAxiosError()`

**description:** returns an error structured like an Axios error.

**arguments:**

| arg name  |  type   |           required             | default  |       description        |
| :-------: | :-----: | :----------------------------: | :------: | :----------------------: |
| message   | String  |  :eight_pointed_black_star:    |    -     | error message to return  |
|  status   | Number  | :negative_squared_cross_mark:  |   500    |       error code         |

**return value:** returns an error Object structured like an Axios error.

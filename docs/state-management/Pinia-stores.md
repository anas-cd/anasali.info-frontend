---
# YAML Frontmatter properties
---

# Pinia Stores

[Pinia](https://pinia.vuejs.org/) is the state management solution used in this project, you can check the [Pinia documentation](https://pinia.vuejs.org/introduction.html) to learn more about how Pinia stores work.

## Usage

you can use any store so

::: code-group

```js [test-store.js]
export const useTestStore = defineStore("test-store", () => {
  /* -- states -- */
  const data = ref("hello");

  /* -- getters -- */
  function getData() {
    return data.value.trim();
  }

  /* -- functions -- */
  function fetchData() {
    data.value = "new data";
  }

  return {
    /* -- states -- */
    data,
    /* -- getters -- */
    getData,
    /* -- functions -- */
    fetchData,
  };
});
```

```vue [page.vue]
<script script>
import { useTestStore } from "src/stores/test-store";

// - use store -
const store = useTestStore();
// - fetch data -
store.fetchData();
// - use data -
let variable = store.data;
</script>

<template>
  <!-- you can also use store in template directly -->
  <div>{{ store.data }}</div>
</template>
```

:::

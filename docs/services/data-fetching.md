---
# YAML Frontmatter properties
---

# Data Fetching

Data fetching within this project has a strict approach for a better developer experience, from the structure to the hierarchy of data fetching.

## Data Fetching Handling

the data fetching structure is made so that the project gets the data with a specific format regardless of the API provider used or API version, this is done by using a services layer that handles data formatting and requests, so if the API provider changes the response format or we wanted to change the API provider we only need to edit the services layer keeping the rest of the code relying on these data untouched.

all API handlers are in the services directory

```
.
├─ src/
  └─ services/
```

here is an example of a service handler and how to use it

::: code-group

```js [services/coursesAPI.js]
import axios from "axios";

const apiClient = axios.create({
  baseURL: "example.com/apis/coursesEndpoint/",
  timeout: 30000, // 30 seconds
  headers: {
    Accept: "application/json",
  },
});

// --- functions (endpoints) ---
export default {
  async getCoursesData() {
    return apiClient.get(/* url endpoint */');
  },
};
```

```js [stores/portfolio.js]
import coursesAPI from "src/services/coursesAPI";

await Promise.all([
  ...
  // [!code focus:6]
  coursesAPI
    .getCoursesData()
    .then((res) => {
      courses.value = res.data.data;
    })
    .catch((error) => handleError(error, error.message)),

  ...
]).finally(() => {
    // - updating status -
    isFetching.value = false;
  });
```

:::

::: warning
the service handler should format the data however if the data is already formatted then it will return the promise directly.
:::

### Handeller Composition

#### Axios instance

each API will have an instance of its own, even if multiple APIs are from the same provider since we might switch API providers later on. here is how to make an [Axios Instance](https://axios-http.com/docs/instance)

```js
// [!code focus:2] // making the instance
const apiClient = axios.create({
  baseURL: ".../api/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

async getCoursesData() {
  // [!code focus:2] // using the instance
  return apiClient.get("endpoint");
}
```

#### functions

service handlers provide functions to interact with APIs, functions are one of two types

- API endpoint functions: functions that call different endpoints of the API and format the response accordingly.
- utility functions: helper functions that are specific to this service handler.
- e.g.

```js
// --- functions (endpoints) ---
export default {
  // -- GETs --
  async getEmails() {
    return apiClient.get("endpoint");
  },
  // -- POSTs --
  async sendEmail(emailData) {
    return apiClient.post("endpoint", emailData);
  },
};
```

#### additions

this project uses the [`axios-retry`](https://www.npmjs.com/package/axios-retry) package to retry the faild API calls.

```js
import axiosRetry from "axios-retry";

axiosRetry(apiClient, {
  retries: 2,
  retryDelay: 0,
});
```

## Data Fetching Hierarchy

when dealing with data fetching things can get messy if the service handlers are called from all over the place, thus this project uses a Hierarchy system for that.

simply all data fetching is through Pinia and it should be initiated from the page level, then it can be fed using Vue by [injecting](https://vuejs.org/guide/components/provide-inject) or [props](https://vuejs.org/guide/components/props.html#props) to child components, or the child component directly take the data from the Pinia store.

::: info exceptions
sometimes data is very specific to one component and it does not need to be in a store, in this situation, we can use the service handler directly.
:::

### Levels

here is an example, let's say we want to get data for a page, the flow should look like this

#### 1. page.vue

the page will call the fetch function from the Pinia store responsible for that data.

e.g.

::: code-group

```vue [pages/CVPage.vue]
<script setup>
import { usePortfolioStore } from "src/stores/portfolio";

// - use portfolio store -
const store = usePortfolioStore();
// - fetch data -
store.fetchData();
</script>
```

:::

#### 2. Pinia store

Pinia stores are the link between calling the service handlers and providing the data (except for special cases), thus every Pinia store should have a function to populate the states with the required data if the data is coming from an API.

::: code-group

```js{12} [stores/portfolio.js]
import { ref } from "vue";
import profileAPI from "src/services/profileAPI";

export const usePortfolioStore = defineStore("portfolio", () => {
  /* -- states -- */
  const profile = ref();

  /* -- functions -- */
  async function fetchData() {
    await Promise.all([
      profileAPI // [!code focus:5]
        .getProfileData()
        .then((res) => {
          profile.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
    ]);
  }
  return {
    /* -- functions -- */
    fetchData,
  };
});
```

:::

#### 3. service handler

the service handler will call the API and format the response if needed.

#### 4. populate the states

Pinia then populates its states from the data retrieved from the service handler.

::: code-group

```js{14} [stores/portfolio.js]
import { ref } from "vue";
import profileAPI from "src/services/profileAPI";

export const usePortfolioStore = defineStore("portfolio", () => {
  /* -- states -- */
  const profile = ref();

  /* -- functions -- */
  async function fetchData() {
    await Promise.all([
      profileAPI // [!code focus:5]
        .getProfileData()
        .then((res) => {
          profile.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
    ]);
  }
  return {
    /* -- functions -- */
    fetchData,
  };
});
```

:::

#### 5. feed data

after the data is present in the Pinia store the page and its children can get the data directly from the store so

::: code-group

```vue [childComponent.vue]
<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.education);
</script>
```

:::

or the parent can feed the child by using provide/inject or props

**provide/inject**

::: code-group

```vue [page.vue]
<script setup>
import { ref, provide } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const educationData = ref(store.education);

provide("educationData", educationData);
</script>
```

```vue [childComponent.vue]
<script setup>
import { ref, inject } from "vue";

const data = inject("educationData");
</script>
```

:::

**props**

::: code-group

```vue [page.vue]
<template>
  <child-component :data="educationData"></child-component>
</template>
<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const educationData = ref(store.education);
</script>
```

```vue [childComponent.vue]
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
```

:::

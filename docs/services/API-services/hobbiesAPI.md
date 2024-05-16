---
# YAML Frontmatter properties
---

# hobbiesAPI

the courses API handler interacts with the backend `hobbies` API.

::: info
if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.
:::

## API Client

### Axios Instance

- **request**

  | property |     value      |
  | :------: | :------------: |
  | baseURL  | `apis/hobbies` |
  | timeout  |     30000      |

- **headers**

  | property |       value        |
  | :------: | :----------------: |
  |  Accept  | "application/json" |

### Axios Retries

|  property  | value |
| :--------: | :---: |
|  retries   |   2   |
| retryDelay |   0   |

## Functions

### - `getHobbiesData()`

**description:** retrieve all records from the database.

**return value:** Promise.

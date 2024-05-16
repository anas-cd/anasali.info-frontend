---
# YAML Frontmatter properties
---

# techStackAPI

the courses API handler interacts with the backend `tech-n-tools` API.

::: info
if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.
:::

## API Client

### Axios Instance

- **request**

  | property |        value        |
  | :------: | :-----------------: |
  | baseURL  | `apis/tech-n-tools` |
  | timeout  |        30000        |

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

### - `getTechData()`

**description:** retrieve all courses from the database.

**return value:** Promise.

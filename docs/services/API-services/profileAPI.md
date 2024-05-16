---
# YAML Frontmatter properties
---

# profileAPI

the courses API handler interacts with the backend `profile` API.

::: info
if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.
:::

## API Client

### Axios Instance

- **request**

  | property |     value      |
  | :------: | :------------: |
  | baseURL  | `apis/profile` |
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

### - `getProfileData()`

**description:** retrieve my profile data and contact info from the database.

**return value:** Promise.

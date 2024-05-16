---
# YAML Frontmatter properties
---

# Portfolio Store

```
.
└─ stores
|  └─ portfolio.js
```

the `portfolio.js` store is currently the main store of the project, here where all portfolio data is being fetched and saved to be accessed globally.

::: details Data Fetching
Please refer to the data fetching section of the documentation to understand what role Pinia stores do.
:::

## States

**data:**

Data states returned are the following :

|  State name  |           Description            |  Type  |
| :----------: | :------------------------------: | :----: |
|   profile    |        profile card data         | Object |
|    skills    |         skills list data         | Object |
| techAndTools | technologies and tools list data | Object |
|  languages   |        list of languages         | Object |
|  experience  |       experience list data       | Object |
|   projects   |     projects worked on data      | Object |
|   courses    |        courses taken data        | Object |
|   hobbies    |         list of hobbies          | Object |
|  interests   |        list of interests         | Object |
|  education   |       education list data        | Object |

**status:**

| State name |     Description      |  Type   |
| :--------: | :------------------: | :-----: |
| isFetching | data fetching status | Boolean |

## Functions

| Function name |     Description      | Return Type |
| :-----------: | :------------------: | :---------: |
|   fetchData   | data fetching status |      -      |
|   fetchData   | data fetching status |      -      |

- `fetchData()`

  **arguments:**

  NONE

  **options:**

  NONE

- `clearErrors()`

  **arguments:**

  NONE

  **options:**

  NONE

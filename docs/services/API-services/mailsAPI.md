---
# YAML Frontmatter properties
---

# mailsAPI

the courses API handler interact with the backend `mails` API.

::: info
if the request fails more than the number of retries for any reason the static backup data in the public folder will be fetched instead.
:::

## API Client

### Axios Instance

- **request**

  | property |    value     |
  | :------: | :----------: |
  | baseURL  | `apis/mails` |
  | timeout  |    30000     |

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

### - `getEmails()`

**description:** retrieve all contact email addresses from the database.

**return value:** Promise.

### - `sendEmail()`

**description:** sends the message to my personal email and sends a notification to the user that I received their email.

**arguments:**

| arg name  |  type  |          required          | default |      description       |
| :-------: | :----: | :------------------------: | :-----: | :--------------------: |
| emailData | Object | :eight_pointed_black_star: |    -    | the email data to send |

**return value:** Promise.

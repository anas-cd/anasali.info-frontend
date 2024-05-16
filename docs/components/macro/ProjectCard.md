---
# YAML Frontmatter properties
---

# ProjectCard.vue

This component is a card used to display information about a project I worked on. It can be used as an item in a list or as a standalone component.

## Props

|  Prop Name  |  Type  |   Default    |           Required            |                         Description                         |
| :---------: | :----: | :----------: | :---------------------------: | :---------------------------------------------------------: |
| projectData | Object |      -       |  :eight_pointed_black_star:   |                     Project data object                     |
| orientation | String | 'horizontal' | :negative_squared_cross_mark: | Orientation of the interest card ['horizontal', 'vertical'] |

- **`projectData` Object**

  | Property Name |          Required          |         Description          |
  | :-----------: | :------------------------: | :--------------------------: |
  |     name      | :eight_pointed_black_star: |        Project's name        |
  |     image     | :eight_pointed_black_star: | Descriptive image of project |
  |  description  | :eight_pointed_black_star: |    Project's description     |
  |     tags      | :eight_pointed_black_star: |        Project's tags        |
  |   demoLink    | :eight_pointed_black_star: |      Live website link       |
  |   codeLink    | :eight_pointed_black_star: |     Link to GitHub repo      |

## Code Explained

### Orientation

If orientation is not specified, the card will automatically reorient itself depending on its size. Once its size is smaller than 420px, it will switch to vertical mode (image top, then informatives bottom). When the size changes, the Quasar component [`q-resize-observer`](https://quasar.dev/vue-components/resize-observer#qresizeobserver-api) will call the function `reOrient` to change the orientation if needed.

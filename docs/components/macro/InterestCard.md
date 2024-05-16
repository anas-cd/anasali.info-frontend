---
# YAML Frontmatter properties
---

# InterestCard.vue

this macro is a card to shows information about an interest of mine, it can be used as an item in a list or a stand-alone component.

## Props

|  prop name   |  type  |   default    |           required            |                       description                        |
| :----------: | :----: | :----------: | :---------------------------: | :------------------------------------------------------: |
| interestData | Object |      -       |  :eight_pointed_black_star:   |                   interest data object                   |
| orientation  | String | 'horizontal' | :negative_squared_cross_mark: | orientation of interest card ['horizontal' , 'vertical'] |

- **`interestData` Object**

  | property name |           required            |          description          |
  | :-----------: | :---------------------------: | :---------------------------: |
  |     name      |  :eight_pointed_black_star:   |         interest name         |
  |     image     |  :eight_pointed_black_star:   | descriptive image of interest |
  |  description  |  :eight_pointed_black_star:   |     interest description      |
  |    subText    | :negative_squared_cross_mark: |       interest subText        |
  |     link      | :negative_squared_cross_mark: |       link to more info       |

## Code Explained

### Orientation

if orientation is not specified the card will automatically re-orient itself depending on its own size, once its size is smaller than 420px it will switch to vertical mode (image top then informatives bottom). when size changes the Quasar component [`q-resize-observer`](https://quasar.dev/vue-components/resize-observer#qresizeobserver-api) will call the function `reOrient` to change the orientation if needed.

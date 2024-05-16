---
# YAML Frontmatter properties
---

# CourseCard.vue

This macro is a card to shows the info of a specific course, it can be used as an item in a list or a stand-alone component, when clicked the card will open the course page in an in-app browser (if applicable).

## Props

| prop name  |  type  | default |          required          |    description     |
| :--------: | :----: | :-----: | :------------------------: | :----------------: |
| courseData | Object |    -    | :eight_pointed_black_star: | course data object |

- **`courseData` Object**:

  | property name |          required          |     description      |
  | :-----------: | :------------------------: | :------------------: |
  |  sourceLink   | :eight_pointed_black_star: |  link of the course  |
  |     name      | :eight_pointed_black_star: |  name of the course  |
  |  sourceName   | :eight_pointed_black_star: | course provider name |
  |  description  | :eight_pointed_black_star: |  course description  |

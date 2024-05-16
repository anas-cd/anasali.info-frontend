---
# YAML Frontmatter properties
---

# Legend

Here you can see some syntax used for the documentation and what it means.

## Components APIs

For easier documentation reading here is a legend of how it is used in the code.

**Legend**

|                          label                           |            description            |
| :------------------------------------------------------: | :-------------------------------: |
|              :negative_squared_cross_mark:               |             optional              |
|                :eight_pointed_black_star:                |             required              |
| :eight_pointed_black_star:/:negative_squared_cross_mark: | one of multiple options is a must |
|                            -                             |             no value              |
|                     [(opt1), (opt2)]                     |         multiple options          |

:::tip
if any of the following headlines are not present it means there is nothing to document
:::

### Props

|  prop name  |  type  |   default    |           required            |        description         |
| :---------: | :----: | :----------: | :---------------------------: | :------------------------: |
| testPropOne | String |      -       |  :eight_pointed_black_star:   |   a test prop : required   |
| testPropTwo | String | "Prop value" | :negative_squared_cross_mark: | a test prop : not required |

::: warning
when making components make sure that none required props always have a default value.
:::

this is how it should look in the component and how to use it in the parent

::: code-group

```vue [component.vue]
<script setup>
defineProps({
  testPropOne: {
    type: String,
    required: true,
  },
  testPropTwo: {
    type: String,
    required: false,
    default: "Prop value",
  },
});
</script>
```

```vue [parent.vue]
<template>
  ...
  <!-- [!code focus:2] -->
  <component test-prop-one="data to pass from parent"></component>
  ...
</template>
```

:::

### emits (events)

| event name | expected return type |                description                 |
| :--------: | :------------------: | :----------------------------------------: |
| testEvent  |        String        | a test event that returns a string on emit |

this is how it should look in the component and how to use it in the parent

::: code-group

```vue{2,4} [component.vue]
<script setup>
const emit = defineEmits(["testEvent"]);

emit("testEvent", "string data to return");
</script>
```

```vue [parent.vue]
<template>
  ...
  <!-- [!code focus:2] -->
  <component @test-event="FunctionToTriggerInParent()"></component>
  ...
</template>
```

:::

### slots

a list of slots for each component

- `testSlotOne` (slot name)

  **slot data:**

  |             |                               |
  | :---------: | :---------------------------: |
  |   default   |               -               |
  |  required   | :negative_squared_cross_mark: |
  |    props    |               2               |
  | description |       slot description        |

  **slot props:**

  |      name       |  type  |             description              |
  | :-------------: | :----: | :----------------------------------: |
  | testPropSlotOne | String |  a slot prop that passes a message   |
  | testPropSlotTwo | Number | a slot prop that passes a view count |

this is how it should look in the component and how to use it in the parent

::: code-group

```vue{7} [component.vue]
<template>
...
<!-- [!code focus:2] -->
<slot name="testSlotOne" testPropSlotOne="'hello'" testPropSlotTwo="10"></slot>
...
</template>
```

```vue [parent.vue]
<template>
  <component>
    ... <!-- [!code focus:8] -->
    <template #testSlotOne="{testPropSlotOne, testPropSlotTwo}"
      {{ testPropSlotOne }}, {{ testPropSlotTwo }}
    </template>
    <!-- or -->
    <template #testSlotOne="slotProps"
      {{ slotProps.testPropSlotOne }}, {{ slotProps.testPropSlotTwo }}
    </template>
  </component>
</template>
```

:::

### Utils

list of utilities for each component

- `testUtility()` (function name)

  **description:** this is a test utility description

  **arguments:**

  | name |    data type     | default |           required            |      description       |
  | :--: | :--------------: | :-----: | :---------------------------: | :--------------------: |
  | arg1 |      String      |    -    |  :eight_pointed_black_star:   | required test argument |
  | arg2 | [String, Number] |    -    |  :eight_pointed_black_star:   | required test argument |
  | arg3 |      String      | 'hello' | :negative_squared_cross_mark: | optional test argument |

  **options:**

  |    name    |    data type     | default |          description          |
  | :--------: | :--------------: | :-----: | :---------------------------: |
  | argOption1 |     Boolean      |  true   | optional test option argument |
  | argOption2 | [String, Number] |    -    | optional test option argument |

  **returns:**

  |    data type     |            description            |
  | :--------------: | :-------------------------------: |
  | [String, Object] | description of the value returned |

this is how it should look in the component and how to use it in the parent

::: code-group

```vue [component.vue]
<script setup>
...
function testUtility(arg1, arg2, arg3 = 'hello', {argOptoin1 = true , argOption2} = {}) { // [!code focus:5]
  // code
  return "yay!";
}
defineExpose(["testUtility"]); // [!code warning] // only exposed functions are considered utils
...
</script>
```

```vue [parent.vue]
<template>
  <!-- [!code focus:2] -->
  <component ref="child"></component>
</template>

<script setup>
import { ref } from 'vue';
import component from 'component_path';
/* [!code focus:3] */
const child = ref(null); // to reference the component
child.value.testUtility(...); // to call the function
</script>
```

:::

::: warning
Since we are using `ref="child"` we need to wait for the component to be mounted first to use the utility function.
:::

### Code Explained (not APIs)

this section is only to explain the functions and other code inside the components as the functionality of some may not be clear at first glance.

## Comments

::: tip
Comments syntax is used in the source code as well.
:::

`---` for code chunks, used for logic and section separation in code

```
/* --- main comment --- */
- or -
// --- sub comment ---
```

`--` for descriptors, used to describe the functionality of a piece of code within a code chunk

```
/* -- main comment -- */
- or -
// -- sub comment --
```

`-` for steps

```
/* - main comment - */
- or -
// - sub comment -
```

`<none>` for small notes

```
// comment
```

---
# YAML Frontmatter properties
---

# ContactCard.vue

The section is a contact card containing the form for sending a message.

## Code Explained

### Quasar Test Patterns

`testPattern` is a Quasar utility for simple input validation, you can read more about it [here](https://quasar.dev/quasar-utils/other-utils#testpattern).

```vue
<script setup>
import { patterns } from "quasar"; // importing

const { testPattern } = patterns; // tree shake

// -- input rules --
const inputRules = {
  name: [(val) => (val && val.trim().length > 0) || "please enter your name"],
  email: [(val) => testPattern.email(val) || "email not valid"],
  subject: [],
  message: [(val) => (val && val.trim().length > 0) || "message missing"],
};
</script>
```

### Attributes Grouping

::: tip
Instead of having multiple refs for each attribute of a component, it's better if we group the same type of attributes in a ref object, this way we only need a few refs, and the code is a lot more readable.
:::

attributes grouped as

- prop attribute
- reference attribute
- values/models attribute
- input rules

so instead of this

```vue
<template>
  <component1 :prop="prop1" ref="component1Ref"></component>
  <component2 :prop="prop2" ref="component2Ref"></component>
  <component3 :prop="prop3" ref="component3Ref"></component>
</template>

<script setup>
const prop1 = ref('value');
const prop2 = ref('value');
const prop3 = ref('value');

const component1Ref = ref(null);
const component2Ref = ref(null);
const component3Ref = ref(null);
</script>
```

it becomes like this

```vue
<template>
  <component1 :prop="props.prop1" :ref="(el) => (refs.component1Ref = el)"></component>
  <component2 :prop="props.prop2" :ref="(el) => (refs.component2Ref = el)"></component>
  <component3 :prop="props.prop3" :ref="(el) => (refs.component3Ref = el)"></component>
</template>

<script setup>
const props = ref({
  prop1 = 'value',
  prop2 = 'value',
  prop3 = 'value'
});
const refs = ref({
  component1Ref = null,
  component2Ref = null,
  component3Ref = null
});
</script>
```

this way is cleaner (arguably), especially for the amount of attributes we have.

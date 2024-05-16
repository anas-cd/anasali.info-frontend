---
# YAML Frontmatter properties
---

# Components Structure

## ├─ `<page_name>/`

each page has its own directory for example

```
.components/
├─ CVPage/
├─ contactPage/
├─ homePage/
...
```

this is for components that are only used for that page

## ├─ `sections/`

this is for section components that can be used on multiple pages, for example, a "CTASection" or a "contactUsSection"

## ├─ `micro/`

this is for monofunctional components, e.g. buttons, inputs, sliders, badges, etc...

## └─ `macro/`

this is for compounded components that can be used in diverse containers, like components that are made of more than one micro component or components that display a specific type of info. for example article cards, video cards, notification cards, etc... where these components can be used in a list or just on their own.

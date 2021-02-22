---
title: Back link
---

Use the Back link for

## Back link

<a href="#" class="govuk-back-link  lbh-back-link">Back to home</a>

### HTML

```html
<a href="#" class="govuk-back-link  lbh-back-link">Back to home</a>
```

### Nunjucks

```
{% from "lbh-back-link/macro.njk" import lbhBackLink %}

{{ lbhBackLink({
  "href": "#",
  "text": "Back to home"
}) }}
```

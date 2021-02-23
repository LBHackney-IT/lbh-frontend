---
title: Tag
---

Use the tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status. 

## Tag

<strong class="govuk-tag  lbh-tag">
  Alpha
</strong>

### HTML

```html
<strong class="govuk-tag  lbh-tag">
  Alpha
</strong>
```

### Nunjucks

```
{% from "lbh-tag/macro.njk" import lbhTag %}

{{ lbhTag({
  "text": "Alpha"
}) }}
```

## Tag with html

<strong class="govuk-tag  lbh-tag">
  <span>Beta</span>
</strong>

### HTML

```html
<strong class="govuk-tag  lbh-tag">
  <span>Beta</span>
</strong>
```

### Nunjucks

```
{% from "lbh-tag/macro.njk" import lbhTag %}

{{ lbhTag({
  "html": "<span>Beta</span>"
}) }}

```


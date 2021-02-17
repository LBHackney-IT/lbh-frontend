---
title: Accordion
---

Use an accordion to make a large amount of content easily digestible.

Consider using an accordion where a user might only be interested in one or two sections of the content.

If the content should be explored in a particular order, consider using pages instead.

## Preview

<div
  class="govuk-accordion myClass lbh-accordion"
  data-module="govuk-accordion"
  id="default-example"
  data-attribute="value"
>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-1"
        >
          Section A
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-1"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-1"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-2"
        >
          Section B
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-2"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-2"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>

## HTML

```html
<div
  class="govuk-accordion myClass lbh-accordion"
  data-module="govuk-accordion"
  id="default-example"
  data-attribute="value"
>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-1"
        >
          Section A
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-1"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-1"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-2"
        >
          Section B
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-2"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-2"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

## Nunjucks

```
{% from "lbh-accordion/macro.njk" import lbhAccordion %}

{{ lbhAccordion({
  "id": "default-example",
  "classes": "myClass",
  "headingLevel": 5,
  "attributes": {
    "data-attribute": "value"
  },
  "items": [
    {
      "heading": {
        "text": "Section A"
      },
      "content": {
        "html": "<ul class=\"lbh-list lbh-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      "heading": {
        "text": "Section B"
      },
      "content": {
        "html": "<ul class=\"lbh-list lbh-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}) }}
```

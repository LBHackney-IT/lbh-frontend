---
title: Tabs
---

import InitAll from "../../src/InitAll"

<InitAll>

Tabs can be a helpful way of letting users quickly switch between related information if:

- your content can be usefully separated into clearly labelled sections
- the first section is more relevant than the others for most users
- users will not need to view all the sections at once

Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.

## Tabs

<div class="govuk-tabs lbh-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
        <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
          <a class="govuk-tabs__tab" href="#past-day">
            Past day
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-week">
            Past week
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-month">
            Past month
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-year">
            Past year
          </a>
        </li>
  </ul>
      <section class="govuk-tabs__panel" id="past-day">
        <h2 class="lbh-heading-h2">Past day</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Case manager</th>
      <th class="govuk-table__header" scope="col">Cases opened</th>
      <th class="govuk-table__header" scope="col">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">David Francis</td>
      <td class="govuk-table__cell">3</td>
      <td class="govuk-table__cell">0</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Paul Farmer</td>
      <td class="govuk-table__cell">1</td>
      <td class="govuk-table__cell">0</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Rita Patel</td>
      <td class="govuk-table__cell">2</td>
      <td class="govuk-table__cell">0</td>
    </tr>
  </tbody>
</table>
      </section>
      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
        <h2 class="lbh-heading-h2">Past week</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Case manager</th>
      <th class="govuk-table__header" scope="col">Cases opened</th>
      <th class="govuk-table__header" scope="col">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">David Francis</td>
      <td class="govuk-table__cell">24</td>
      <td class="govuk-table__cell">18</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Paul Farmer</td>
      <td class="govuk-table__cell">16</td>
      <td class="govuk-table__cell">20</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Rita Patel</td>
      <td class="govuk-table__cell">24</td>
      <td class="govuk-table__cell">27</td>
    </tr>
  </tbody>
</table>
      </section>
      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
        <h2 class="lbh-heading-h2">Past month</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Case manager</th>
      <th class="govuk-table__header" scope="col">Cases opened</th>
      <th class="govuk-table__header" scope="col">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">David Francis</td>
      <td class="govuk-table__cell">98</td>
      <td class="govuk-table__cell">95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Paul Farmer</td>
      <td class="govuk-table__cell">122</td>
      <td class="govuk-table__cell">131</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Rita Patel</td>
      <td class="govuk-table__cell">126</td>
      <td class="govuk-table__cell">142</td>
    </tr>
  </tbody>
</table>
      </section>
      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
        <h2 class="lbh-heading-h2">Past year</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Case manager</th>
      <th class="govuk-table__header" scope="col">Cases opened</th>
      <th class="govuk-table__header" scope="col">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">David Francis</td>
      <td class="govuk-table__cell">1380</td>
      <td class="govuk-table__cell">1472</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Paul Farmer</td>
      <td class="govuk-table__cell">1129</td>
      <td class="govuk-table__cell">1083</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Rita Patel</td>
      <td class="govuk-table__cell">1539</td>
      <td class="govuk-table__cell">1265</td>
    </tr>
  </tbody>
</table>
      </section>
</div>

### HTML

```html
<div class="govuk-tabs  lbh-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">Contents</h2>
  <ul class="govuk-tabs__list">
    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day"> Past day </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week"> Past week </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month"> Past month </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year"> Past year </a>
    </li>
  </ul>
  <section class="govuk-tabs__panel" id="past-day">
    <h2 class="lbh-heading-h2">Past day</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="lbh-heading-h2">Past week</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="lbh-heading-h2">Past month</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
    <h2 class="lbh-heading-h2">Past year</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">1380</td>
          <td class="govuk-table__cell">1472</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1129</td>
          <td class="govuk-table__cell">1083</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">1539</td>
          <td class="govuk-table__cell">1265</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

### Nunjucks

```
{% from "lbh-tabs/macro.njk" import lbhTabs %}

{{ lbhTabs({
  "items": [
    {
      "label": "Past day",
      "id": "past-day",
      "panel": {
        "html": "<h2 class=\"lbh-heading-h2\">Past day</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">3</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">1</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">2</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past week",
      "id": "past-week",
      "panel": {
        "html": "<h2 class=\"lbh-heading-h2\">Past week</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">18</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">16</td>\n      <td class=\"govuk-table__cell\">20</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">27</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past month",
      "id": "past-month",
      "panel": {
        "html": "<h2 class=\"lbh-heading-h2\">Past month</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">98</td>\n      <td class=\"govuk-table__cell\">95</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">122</td>\n      <td class=\"govuk-table__cell\">131</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">126</td>\n      <td class=\"govuk-table__cell\">142</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past year",
      "id": "past-year",
      "panel": {
        "html": "<h2 class=\"lbh-heading-h2\">Past year</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">1380</td>\n      <td class=\"govuk-table__cell\">1472</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">1129</td>\n      <td class=\"govuk-table__cell\">1083</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">1539</td>\n      <td class=\"govuk-table__cell\">1265</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    }
  ]
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

</InitAll>

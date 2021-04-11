---
title: Stat
---

import PreviewArea from "../../src/PreviewArea"

:::note
This component is intended for staff-facing use only.
:::

Use stat components to show key performance indicators or important impact numbers for a service.

Stats work best when used in small, impactful groups. Avoid using one by itself.

You can use [GOV.UK layout helpers](https://design-system.service.gov.uk/styles/layout/) to show a row of stats.

<PreviewArea>
    <div className="lbh-stat">
        <strong className="lbh-stat__value" aria-labelledby="stat-1-caption">35</strong>
        <span className="lbh-stat__caption" id="stat-1-caption">Cases this month</span>
    </div>
</PreviewArea>

```html
<div class="lbh-stat">
  <strong class="lbh-stat__value" aria-labelledby="stat-1-caption">35</strong>
  <span class="lbh-stat__caption" id="stat-1-caption">Cases this month</span>
</div>
```

## Row of two

<PreviewArea>
    <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
        <div className="lbh-stat">
            <strong className="lbh-stat__value" aria-labelledby="stat-1-caption">12</strong>
            <span className="lbh-stat__caption" id="stat-1-caption">
                Cases awaiting review
            </span>
        </div>
        </div>
        <div className="govuk-grid-column-one-half">
        <div className="lbh-stat">
            <strong className="lbh-stat__value" aria-labelledby="stat-2-caption">48</strong>
            <span className="lbh-stat__caption" id="stat-2-caption">
                Cases handled this month
            </span>
        </div>
        </div>
    </div>
</PreviewArea>

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half">
    <div class="lbh-stat">
      <strong class="lbh-stat__value" aria-labelledby="stat-1-caption">
        12
      </strong>
      <span class="lbh-stat__caption" id="stat-1-caption">
        Cases awaiting review
      </span>
    </div>
  </div>

  <div className="govuk-grid-column-one-half">
    <div class="lbh-stat">
      <strong class="lbh-stat__value" aria-labelledby="stat-2-caption">
        48
      </strong>
      <span class="lbh-stat__caption" id="stat-2-caption">
        Cases handled this month
      </span>
    </div>
  </div>
</div>
```

## Row of three

<PreviewArea>
    <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
        <div className="lbh-stat">
            <strong className="lbh-stat__value" aria-labelledby="stat-1-caption">12</strong>
            <span className="lbh-stat__caption" id="stat-1-caption">
                Cases awaiting review
            </span>
        </div>
        </div>
        <div className="govuk-grid-column-one-third">
        <div className="lbh-stat">
            <strong className="lbh-stat__value" aria-labelledby="stat-2-caption">48</strong>
            <span className="lbh-stat__caption" id="stat-2-caption">
                Cases handled this month
            </span>
        </div>
        </div>
        <div className="govuk-grid-column-one-third">
        <div className="lbh-stat">
            <strong className="lbh-stat__value" aria-labelledby="stat-3-caption">275</strong>
            <span className="lbh-stat__caption" id="stat-3-caption">
                Total cases for <a href="#" className="lbh-link">62 staff</a>
            </span>
        </div>
        </div>
    </div>
</PreviewArea>

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
    <div class="lbh-stat">
      <strong class="lbh-stat__value" aria-labelledby="stat-1-caption">12</strong>
      <span class="lbh-stat__caption" id="stat-1-caption">
        Cases awaiting review
      </span>
    </div>
  </div>
  <div class="govuk-grid-column-one-third">
    <div class="lbh-stat">
      <strong class="lbh-stat__value" aria-labelledby="stat-2-caption">
        48
      </strong>
      <span class="lbh-stat__caption" id="stat-2-caption">
        Cases handled this month
      </span>
    </div>
  </div>
  <div class="govuk-grid-column-one-third">
    <div class="lbh-stat">
      <strong class="lbh-stat__value"  aria-labelledby="stat-3-caption">275<strong>
      <span class="lbh-stat__caption" id="stat-3-caption">
        Total cases for <a href="#" class="lbh-link">62 staff</a>
      </span>
    </div>
  </div>
</div>
```

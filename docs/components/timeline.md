---
title: Timeline
---

import PreviewArea from "../../src/PreviewArea"

:::note
This component is intended for staff-facing use only.
:::

Use a timeline to show how something has changed over time, like a resident's case history.

Present a timeline in reverse-chronological order, with the most recent events at the top.

Timelines can show events of different importance, as well as gaps in time where events are hidden. They can also show the next step in an unfinished process or workflow.

<PreviewArea>
    <ol className="lbh-timeline">
        <li className="lbh-timeline__event lbh-timeline__event--action-needed">
            <h3 className="lbh-heading-h3">Begin care plan review</h3>
            <p className="lbh-body">It's time to review this person's care arrangements.</p>
            <p className="lbh-body"><a href="#" className="lbh-link lbh-link--no-visited-state">Continue</a></p>
        </li>
        <li className="lbh-timeline__event">
            <h3 className="lbh-heading-h3">
                Home visit
            </h3>
            <p className="lbh-body">17 October 2019</p>
        </li>
        <li className="lbh-timeline__event lbh-timeline__event--major">
            <h3 className="lbh-heading-h3">Assessment plan completed</h3>
            <p className="lbh-body">12 September 2019</p>
        </li>
        <li className="lbh-timeline__event lbh-timeline__event--minor">
            <h3 className="lbh-heading-h3">Message sent</h3>
            <p className="lbh-body">10 August 2019</p>
        </li>
            <li className="lbh-timeline__event">
            <h3 className="lbh-heading-h3">
                Referred to us
            </h3>
            <p className="lbh-body">8 August 2019</p>
        </li>
    </ol>
</PreviewArea>

```html
<ol class="lbh-timeline">
  <li class="lbh-timeline__event lbh-timeline__event--action-needed">
    <h3 class="lbh-heading-h3">Begin care plan review</h3>
    <p class="lbh-body">It's time to review this person's care arrangements.</p>
    <p class="lbh-body">
      <a href="#" class="lbh-link lbh-link--no-visited-state">Continue</a>
    </p>
  </li>
  <li class="lbh-timeline__event">
    <h3 class="lbh-heading-h3">Home visit</h3>
    <p class="lbh-body">17 October 2019</p>
  </li>
  <li class="lbh-timeline__event lbh-timeline__event--major">
    <h3 class="lbh-heading-h3">Assessment plan completed</h3>
    <p class="lbh-body">12 September 2019</p>
  </li>
  <li class="lbh-timeline__event lbh-timeline__event--minor">
    <h3 class="lbh-heading-h3">Message sent</h3>
    <p class="lbh-body">10 August 2019</p>
  </li>
  <li class="lbh-timeline__event">
    <h3 class="lbh-heading-h3">Referred to us</h3>
    <p class="lbh-body">8 August 2019</p>
  </li>
</ol>
```

## All options

<PreviewArea>
    <ol className="lbh-timeline">
        <li className="lbh-timeline__event lbh-timeline__event--action-needed">
            <h3 className="lbh-heading-h3">Begin care plan review</h3>
            <p className="lbh-body">It's time to review this person's care arrangements.</p>
            <p className="lbh-body"><a href="#" className="lbh-link lbh-link--no-visited-state">Continue</a></p>
        </li>
        <li className="lbh-timeline__event lbh-timeline__event--major">
            <h3 className="lbh-heading-h3">
                Home visit
            </h3>
            <p className="lbh-body">17 October 2019</p>
        </li>
        <li className="lbh-timeline__event  lbh-timeline__event--gap-below">
            <h3 className="lbh-heading-h3">Assessment plan completed</h3>
            <p className="lbh-body">12 September 2019</p>
            <details class="govuk-details lbh-details" data-module="govuk-details">
                <summary class="lbh-body govuk-details__summary">
                    <span class="govuk-details__summary-text">
                    Assessment overview
                    </span>
                </summary>
                <div class="govuk-details__text">
                    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
                </div>
            </details>
        </li>
        <li className="lbh-timeline__event lbh-timeline__event--minor">
            <h3 className="lbh-heading-h4">Message sent</h3>
            <p className="lbh-body-s">10 August 2019</p>
        </li>
            <li className="lbh-timeline__event lbh-timeline__event--minor">
            <h3 className="lbh-heading-h3">
                <a href="#" className="lbh-link lbh-link--no-visited-state">Referred to us</a>
            </h3>
            <p className="lbh-body">8 August 2019</p>
        </li>
    </ol>
</PreviewArea>

```html
<ol class="lbh-timeline">
  <li class="lbh-timeline__event lbh-timeline__event--action-needed">
    <h3 class="lbh-heading-h3">Begin care plan review</h3>
    <p class="lbh-body">It's time to review this person's care arrangements.</p>
    <p class="lbh-body">
      <a href="#" class="lbh-link lbh-link--no-visited-state">Continue</a>
    </p>
  </li>
  <li class="lbh-timeline__event lbh-timeline__event--major">
    <h3 class="lbh-heading-h3">Home visit</h3>
    <p class="lbh-body">17 October 2019</p>
  </li>
  <li class="lbh-timeline__event  lbh-timeline__event--gap-below">
    <h3 class="lbh-heading-h3">Assessment plan completed</h3>
    <p class="lbh-body">12 September 2019</p>
    <details class="govuk-details lbh-details" data-module="govuk-details">
      <summary class="lbh-body govuk-details__summary">
        <span class="govuk-details__summary-text"> Assessment overview </span>
      </summary>
      <div class="govuk-details__text">
        We need to know your nationality so we can work out which elections
        you’re entitled to vote in. If you can’t provide your nationality,
        you’ll have to send copies of identity documents through the post.
      </div>
    </details>
  </li>
  <li class="lbh-timeline__event lbh-timeline__event--minor">
    <h3 class="lbh-heading-h4">Message sent</h3>
    <p class="lbh-body-s">10 August 2019</p>
  </li>
  <li class="lbh-timeline__event lbh-timeline__event--minor">
    <h3 class="lbh-heading-h3">
      <a href="#" class="lbh-link lbh-link--no-visited-state">Referred to us</a>
    </h3>
    <p class="lbh-body">8 August 2019</p>
  </li>
</ol>
```

## Smaller text

<PreviewArea>
    <ol className="lbh-timeline">
        <li className="lbh-timeline__event lbh-timeline__event--major">
            <h3 className="lbh-heading-h4">
                Home visit
            </h3>
            <p className="lbh-body-s">17 October 2019</p>
        </li>
        <li className="lbh-timeline__event  lbh-timeline__event--gap-below">
            <h3 className="lbh-heading-h4">Assessment plan completed</h3>
            <p className="lbh-body-s">12 September 2019</p>
        </li>
        <li className="lbh-timeline__event">
            <h3 className="lbh-heading-h4">Message sent</h3>
            <p className="lbh-body-s">10 August 2019</p>
        </li>
    </ol>
</PreviewArea>

```html
<ol class="lbh-timeline">
  <li class="lbh-timeline__event lbh-timeline__event--major">
    <h3 class="lbh-heading-h4">Home visit</h3>
    <p class="lbh-body-s">17 October 2019</p>
  </li>
  <li class="lbh-timeline__event  lbh-timeline__event--gap-below">
    <h3 class="lbh-heading-h4">Assessment plan completed</h3>
    <p class="lbh-body-s">12 September 2019</p>
  </li>
  <li class="lbh-timeline__event">
    <h3 class="lbh-heading-h4">Message sent</h3>
    <p class="lbh-body-s">10 August 2019</p>
  </li>
</ol>
```

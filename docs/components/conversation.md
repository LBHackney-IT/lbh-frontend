---
title: Conversation
---

import PreviewArea from "../../src/PreviewArea"

:::note
This component is intended for staff-facing use only.
:::

Use the conversation component to show messages between two or more people. It's a good fit for tools with a chat feature.

New messages appear at the bottom, so the keyboard tab order of a conversation is reversed.

<PreviewArea>
<ul className="lbh-conversation">
    <li className="lbh-conversation__message">
        <span className="govuk-visually-hidden">Sent: </span>
        <p className="lbh-body">That's great. I'll give you a call then.</p>
        <details className="lbh-conversation__details">
            <summary className="lbh-conversation__summary">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                    <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
                </svg>
                <span className="govuk-visually-hidden">Details</span>
            </summary>
            <div className="lbh-conversation__metadata">
                <p className="lbh-body-xs">
                    Sent 12 Jan 2020 6.30pm by <strong>Jane Smith</strong>
                </p>
            </div>
        </details>
        <svg className="lbh-conversation__root" width="12" height="12" viewBox="0 0 21 21" fill="none">
            <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
        </svg>
    </li>
    <li className="lbh-conversation__message lbh-conversation__message--inbound">
        <span className="govuk-visually-hidden">Received: </span>
        <p className="lbh-body">Sure - how about five o clock on Tuesday?</p>
        <details className="lbh-conversation__details">
            <summary className="lbh-conversation__summary">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                    <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
                </svg>
                <span className="govuk-visually-hidden">Details</span>
            </summary>
            <div className="lbh-conversation__metadata">
                <p className="lbh-body-xs">
                    Received 12 Jan 2020 6.20pm
                </p>
            </div>
        </details>
        <svg className="lbh-conversation__root" width="12" height="12" viewBox="0 0 21 21" fill="none">
            <path d="M0 21V0.5H20.5L0 21Z" fill="white" />
        </svg>
    </li>
    <li className="lbh-conversation__message">
        <span className="govuk-visually-hidden">Sent: </span>
        <p className="lbh-body">Hello. It's time to schedule a review of your plan. Is some time in the next week
            good?</p>
        <details className="lbh-conversation__details">
            <summary className="lbh-conversation__summary">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                    <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
                </svg>
                <span className="govuk-visually-hidden">Details</span>
            </summary>
            <div className="lbh-conversation__metadata">
                <p className="lbh-body-xs">
                    Sent 12 Jan 2020 5.45pm by <strong>Jane Smith</strong>
                </p>
                <p className="lbh-body-xs">
                    Delivered 12 Jan 2020 5.47pm
                </p>
            </div>
        </details>
        <svg className="lbh-conversation__root" width="12" height="12" viewBox="0 0 21 21" fill="none">
            <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
        </svg>
    </li>
    <li className="lbh-body-xs lbh-conversation__no-older">Showing oldest messages</li>
</ul>
</PreviewArea>

```html
<ul class="lbh-conversation">
  <li class="lbh-conversation__message">
    <span class="govuk-visually-hidden">Sent: </span>
    <p class="lbh-body">That's great. I'll give you a call then.</p>
    <details class="lbh-conversation__details">
      <summary class="lbh-conversation__summary">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
        </svg>
        <span class="govuk-visually-hidden">Details</span>
      </summary>
      <div class="lbh-conversation__metadata">
        <p class="lbh-body-xs">
          Sent 12 Jan 2020 6.30pm by <strong>Jane Smith</strong>
        </p>
      </div>
    </details>
    <svg
      class="lbh-conversation__root"
      width="12"
      height="12"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
    </svg>
  </li>

  <li class="lbh-conversation__message lbh-conversation__message--inbound">
    <span class="govuk-visually-hidden">Received: </span>
    <p class="lbh-body">Sure - how about five o clock on Tuesday?</p>
    <details class="lbh-conversation__details">
      <summary class="lbh-conversation__summary">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
        </svg>
        <span class="govuk-visually-hidden">Details</span>
      </summary>
      <div class="lbh-conversation__metadata">
        <p class="lbh-body-xs">Received 12 Jan 2020 6.20pm</p>
      </div>
    </details>
    <svg
      class="lbh-conversation__root"
      width="12"
      height="12"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path d="M0 21V0.5H20.5L0 21Z" fill="white" />
    </svg>
  </li>

  <li class="lbh-conversation__message">
    <span class="govuk-visually-hidden">Sent: </span>
    <p class="lbh-body">
      Hello. It's time to schedule a review of your plan. Is some time in the
      next week good?
    </p>
    <details class="lbh-conversation__details">
      <summary class="lbh-conversation__summary">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path d="M2 2L8.5 8L15 2" stroke="white" strokeWidth="2" />
        </svg>
        <span class="govuk-visually-hidden">Details</span>
      </summary>
      <div class="lbh-conversation__metadata">
        <p class="lbh-body-xs">
          Sent 12 Jan 2020 5.45pm by <strong>Jane Smith</strong>
        </p>
        <p class="lbh-body-xs">Delivered 12 Jan 2020 5.47pm</p>
      </div>
    </details>
    <svg
      class="lbh-conversation__root"
      width="12"
      height="12"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
    </svg>
  </li>

  <li class="lbh-body-xs lbh-conversation__no-older">
    Showing oldest messages
  </li>
</ul>
```

## Without details

<PreviewArea>
<ul className="lbh-conversation">
    <li className="lbh-conversation__message">
        <span className="govuk-visually-hidden">Sent: </span>
        <p className="lbh-body">Hello. It's time to schedule a review of your plan. Is some time in the next week
            good?</p>
        <svg className="lbh-conversation__root" width="12" height="12" viewBox="0 0 21 21" fill="none">
            <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
        </svg>
    </li>
    <li className="lbh-body-xs lbh-conversation__no-older">Showing oldest messages</li>
</ul>
</PreviewArea>

```html
<ul class="lbh-conversation">
  <li class="lbh-conversation__message">
    <span class="govuk-visually-hidden">Sent: </span>
    <p class="lbh-body">
      Hello. It's time to schedule a review of your plan. Is some time in the
      next week good?
    </p>
    <svg
      class="lbh-conversation__root"
      width="12"
      height="12"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path d="M20.5 21V0.5H0L20.5 21Z" fill="#00664F" />
    </svg>
  </li>
  <li class="lbh-body-xs lbh-conversation__no-older">
    Showing oldest messages
  </li>
</ul>
```

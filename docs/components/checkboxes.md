---
title: Checkboxes
---

Use the Checkboxes for

## Checkboxes

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <span id="nationality-hint" class="govuk-hint lbh-hint">
    If you have dual nationality, select all options that are relevant to you.
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="british"
          />
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input
           class="govuk-checkboxes__input"
           id="nationality-3"
           name="nationality"
            type="checkbox"
            value="other"
             />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
    <legend class="govuk-fieldset__legend">What is your nationality?</legend>
    <span id="nationality-hint" class="govuk-hint lbh-hint">
      If you have dual nationality, select all options that are relevant to you.
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="british"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          British
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="irish"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          Irish
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="other"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          Citizen of another country
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with id and name

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="with-id-and-name-hint">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <span id="with-id-and-name-hint" class="govuk-hint lbh-hint">
    If you have dual nationality, select all options that are relevant to you.
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="item_british" name="british" type="checkbox" value="yes" />
          <label class="govuk-label govuk-checkboxes__label" for="item_british">
        British
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="item_irish" name="irish" type="checkbox" value="irish" />
          <label class="govuk-label govuk-checkboxes__label" for="item_irish">
        Irish
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="with-id-and-name-hint">
    <legend class="govuk-fieldset__legend">What is your nationality?</legend>
    <span id="with-id-and-name-hint" class="govuk-hint lbh-hint">
      If you have dual nationality, select all options that are relevant to you.
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="item_british"
          name="british"
          type="checkbox"
          value="yes"
        />
        <label class="govuk-label govuk-checkboxes__label" for="item_british">
          British
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="item_irish"
          name="irish"
          type="checkbox"
          value="irish"
        />
        <label class="govuk-label govuk-checkboxes__label" for="item_irish">
          Irish
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with hints and items

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  </legend>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
      </label>
          <span id="government-gateway-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
      </span>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="govuk-verify" name="verify" type="checkbox" value="gov-verify" aria-describedby="govuk-verify-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
        Sign in with GOV.UK Verify
      </label>
          <span id="govuk-verify-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </span>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      <h1 class="govuk-fieldset__heading">How do you want to sign in?</h1>
    </legend>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="government-gateway"
          name="gateway"
          type="checkbox"
          value="gov-gateway"
          aria-describedby="government-gateway-item-hint"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="government-gateway"
        >
          Sign in with Government Gateway
        </label>
        <span
          id="government-gateway-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          You’ll have a user ID if you’ve registered for Self Assessment or
          filed a tax return online before.
        </span>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="govuk-verify"
          name="verify"
          type="checkbox"
          value="gov-verify"
          aria-describedby="govuk-verify-item-hint"
        />
        <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
          Sign in with GOV.UK Verify
        </label>
        <span
          id="govuk-verify-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          You’ll have an account if you’ve already proved your identity with
          either Barclays, CitizenSafe, Digidentity, Experian, Post Office,
          Royal Mail or SecureIdentity.
        </span>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with disabled item

<div class="govuk-form-group lbh-form-group">
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours" name="colours" type="checkbox" value="red" />
          <label class="govuk-label govuk-checkboxes__label" for="colours">
        Red
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-2" name="colours" type="checkbox" value="green" />
          <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Green
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-3" name="colours" type="checkbox" value="blue" disabled />
          <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Blue
      </label>
        </div>
  </div>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <div class="govuk-checkboxes lbh-checkboxes">
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours"
        name="colours"
        type="checkbox"
        value="red"
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours">
        Red
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours-2"
        name="colours"
        type="checkbox"
        value="green"
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Green
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours-3"
        name="colours"
        type="checkbox"
        value="blue"
        disabled
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Blue
      </label>
    </div>
  </div>
</div>
```

## Checkboxes with legend as a page heading

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport regularly?
    </h1>
  </legend>
  <span id="waste-hint" class="govuk-hint lbh-hint">
    Select all that apply
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" />
          <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Which types of waste do you transport regularly?
      </h1>
    </legend>
    <span id="waste-hint" class="govuk-hint lbh-hint">
      Select all that apply
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste"
          name="waste"
          type="checkbox"
          value="animal"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste">
          Waste from animal carcasses
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-2"
          name="waste"
          type="checkbox"
          value="mines"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-2">
          Waste from mines or quarries
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-3"
          name="waste"
          type="checkbox"
          value="farm"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-3">
          Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with a medium legend

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    Which types of waste do you transport regularly?
  </legend>
  <span id="waste-hint" class="govuk-hint lbh-hint">
    Select all that apply
  </span>
  <span id="waste-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Select which types of waste you transport regularly
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" />
          <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Which types of waste do you transport regularly?
    </legend>
    <span id="waste-hint" class="govuk-hint lbh-hint">
      Select all that apply
    </span>
    <span id="waste-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Select which types of
      waste you transport regularly
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste"
          name="waste"
          type="checkbox"
          value="animal"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste">
          Waste from animal carcasses
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-2"
          name="waste"
          type="checkbox"
          value="mines"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-2">
          Waste from mines or quarries
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-3"
          name="waste"
          type="checkbox"
          value="farm"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-3">
          Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes without fieldset

<div class="govuk-form-group lbh-form-group">
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours" name="colours" type="checkbox" value="red" />
          <label class="govuk-label govuk-checkboxes__label" for="colours">
        Red
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-2" name="colours" type="checkbox" value="green" />
          <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Green
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-3" name="colours" type="checkbox" value="blue" />
          <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Blue
      </label>
        </div>
  </div>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <div class="govuk-checkboxes lbh-checkboxes">
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours"
        name="colours"
        type="checkbox"
        value="red"
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours">
        Red
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours-2"
        name="colours"
        type="checkbox"
        value="green"
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Green
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="colours-3"
        name="colours"
        type="checkbox"
        value="blue"
      />
      <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Blue
      </label>
    </div>
  </div>
</div>
```

## Checkboxes with single option set 'aria-describedby' on input

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <span id="t-and-c-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="t-and-c" name="t-and-c" type="checkbox" value="yes" aria-describedby="t-and-c-error" />
          <label class="govuk-label govuk-checkboxes__label" for="t-and-c">
        I agree to the terms and conditions
      </label>
        </div>
  </div>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <span id="t-and-c-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms
    and conditions
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="t-and-c"
        name="t-and-c"
        type="checkbox"
        value="yes"
        aria-describedby="t-and-c-error"
      />
      <label class="govuk-label govuk-checkboxes__label" for="t-and-c">
        I agree to the terms and conditions
      </label>
    </div>
  </div>
</div>
```

## Checkboxes with single option (and hint) set 'aria-describedby' on input

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <span id="t-and-c-with-hint-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="t-and-c-with-hint" name="t-and-c-with-hint" type="checkbox" value="yes" aria-describedby="t-and-c-with-hint-error t-and-c-with-hint-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="t-and-c-with-hint">
        I agree to the terms and conditions
      </label>
          <span id="t-and-c-with-hint-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        Go on, you know you want to!
      </span>
        </div>
  </div>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <span id="t-and-c-with-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms
    and conditions
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
    <div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id="t-and-c-with-hint"
        name="t-and-c-with-hint"
        type="checkbox"
        value="yes"
        aria-describedby="t-and-c-with-hint-error t-and-c-with-hint-item-hint"
      />
      <label
        class="govuk-label govuk-checkboxes__label"
        for="t-and-c-with-hint"
      >
        I agree to the terms and conditions
      </label>
      <span
        id="t-and-c-with-hint-item-hint"
        class="govuk-hint govuk-checkboxes__hint lbh-hint"
      >
        Go on, you know you want to!
      </span>
    </div>
  </div>
</div>
```

## Checkboxes with fieldset and error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="colours-error">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <span id="colours-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours" name="colours" type="checkbox" value="british" />
          <label class="govuk-label govuk-checkboxes__label" for="colours">
        British
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-2" name="colours" type="checkbox" value="irish" />
          <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Irish
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="colours-3" name="colours" type="checkbox" value="other" />
          <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Citizen of another country
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="colours-error">
    <legend class="govuk-fieldset__legend">What is your nationality?</legend>
    <span id="colours-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Please accept the terms
      and conditions
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="colours"
          name="colours"
          type="checkbox"
          value="british"
        />
        <label class="govuk-label govuk-checkboxes__label" for="colours">
          British
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="colours-2"
          name="colours"
          type="checkbox"
          value="irish"
        />
        <label class="govuk-label govuk-checkboxes__label" for="colours-2">
          Irish
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="colours-3"
          name="colours"
          type="checkbox"
          value="other"
        />
        <label class="govuk-label govuk-checkboxes__label" for="colours-3">
          Citizen of another country
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with all fieldset attributes

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset app-fieldset--custom-modifier" aria-describedby="example-hint example-error" data-attribute="value" data-second-attribute="second-value">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <span id="example-hint" class="govuk-hint lbh-hint">
    If you have dual nationality, select all options that are relevant to you.
  </span>
  <span id="example-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please select an option
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="example" name="example" type="checkbox" value="british" />
          <label class="govuk-label govuk-checkboxes__label" for="example">
        British
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="example-2" name="example" type="checkbox" value="irish" />
          <label class="govuk-label govuk-checkboxes__label" for="example-2">
        Irish
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="example-3" name="example" type="checkbox" value="other" />
          <label class="govuk-label govuk-checkboxes__label" for="example-3">
        Citizen of another country
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset app-fieldset--custom-modifier"
    aria-describedby="example-hint example-error"
    data-attribute="value"
    data-second-attribute="second-value"
  >
    <legend class="govuk-fieldset__legend">What is your nationality?</legend>
    <span id="example-hint" class="govuk-hint lbh-hint">
      If you have dual nationality, select all options that are relevant to you.
    </span>
    <span id="example-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Please select an option
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="example"
          name="example"
          type="checkbox"
          value="british"
        />
        <label class="govuk-label govuk-checkboxes__label" for="example">
          British
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="example-2"
          name="example"
          type="checkbox"
          value="irish"
        />
        <label class="govuk-label govuk-checkboxes__label" for="example-2">
          Irish
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="example-3"
          name="example"
          type="checkbox"
          value="other"
        />
        <label class="govuk-label govuk-checkboxes__label" for="example-3">
          Citizen of another country
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="waste-error">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <span id="waste-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please select an option
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" />
          <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
    <legend class="govuk-fieldset__legend">
      Which types of waste do you transport regularly?
    </legend>
    <span id="waste-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Please select an option
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste"
          name="waste"
          type="checkbox"
          value="animal"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste">
          Waste from animal carcasses
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-2"
          name="waste"
          type="checkbox"
          value="mines"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-2">
          Waste from mines or quarries
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-3"
          name="waste"
          type="checkbox"
          value="farm"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-3">
          Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with error message and hints on items

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="waste-error">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <span id="waste-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please select an option
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" aria-describedby="waste-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
          <span id="waste-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </span>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" aria-describedby="waste-2-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
          <span id="waste-2-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </span>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" aria-describedby="waste-3-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
          <span id="waste-3-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </span>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
    <legend class="govuk-fieldset__legend">
      Which types of waste do you transport regularly?
    </legend>
    <span id="waste-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Please select an option
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste"
          name="waste"
          type="checkbox"
          value="animal"
          aria-describedby="waste-item-hint"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste">
          Waste from animal carcasses
        </label>
        <span
          id="waste-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </span>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-2"
          name="waste"
          type="checkbox"
          value="mines"
          aria-describedby="waste-2-item-hint"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-2">
          Waste from mines or quarries
        </label>
        <span
          id="waste-2-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </span>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-3"
          name="waste"
          type="checkbox"
          value="farm"
          aria-describedby="waste-3-item-hint"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-3">
          Farm or agricultural waste
        </label>
        <span
          id="waste-3-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </span>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with very long option text

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  <legend class="govuk-fieldset__legend">
    Maecenas faucibus mollis interdum?
  </legend>
  <span id="waste-hint" class="govuk-hint lbh-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </span>
  <span id="waste-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </span>
  <div class="govuk-checkboxes lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="nullam" />
          <label class="govuk-label govuk-checkboxes__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="aenean" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="fusce" />
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
    <legend class="govuk-fieldset__legend">
      Maecenas faucibus mollis interdum?
    </legend>
    <span id="waste-hint" class="govuk-hint lbh-hint">
      Nullam id dolor id nibh ultricies vehicula ut id elit.
    </span>
    <span id="waste-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Lorem ipsum dolor sit
      amet, consectetur adipiscing elit.
    </span>
    <div class="govuk-checkboxes lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste"
          name="waste"
          type="checkbox"
          value="nullam"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
          at eget metus.
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-2"
          name="waste"
          type="checkbox"
          value="aenean"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-2">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Cras mattis consectetur purus sit amet
          fermentum.
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="waste-3"
          name="waste"
          type="checkbox"
          value="fusce"
        />
        <label class="govuk-label govuk-checkboxes__label" for="waste-3">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Etiam porta sem malesuada magna
          mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec
          sed odio dui. Sed posuere consectetur est at lobortis.
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with conditional items

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes lbh-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted" name="with-conditional-items" type="checkbox" value="email" data-aria-controls="conditional-how-contacted" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        Email
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
            <label class="lbh-label govuk-label" for="context-email">Email address</label>
            <input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email" />
          </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-2" name="with-conditional-items" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-2" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        Phone
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-2">
            <label class="lbh-label govuk-label" for="contact-phone">Phone number</label>
            <input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" />
          </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-3" name="with-conditional-items" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-3" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-3">
        Text message
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-3">
            <label class="lbh-label govuk-label" for="contact-text-message">Mobile phone number</label>
            <input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message" />
          </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      How do you want to be contacted?
    </legend>
    <div
      class="govuk-checkboxes lbh-checkboxes"
      data-module="govuk-checkboxes"
    >
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted"
          name="with-conditional-items"
          type="checkbox"
          value="email"
          data-aria-controls="conditional-how-contacted"
        />
        <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
          Email
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted"
      >
        <label class="lbh-label govuk-label" for="context-email"
          >Email address</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="context-email"
          type="text"
          id="context-email"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-2"
          name="with-conditional-items"
          type="checkbox"
          value="phone"
          data-aria-controls="conditional-how-contacted-2"
          />
        <label
          class="govuk-label govuk-checkboxes__label for="how-contacted-2"
          >Phone </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-2">
        <label class="lbh-label govuk-label" for="contact-phone"
        >Phone number</label>
        <input
          class="govuk-input govuk-!-width-one-third"
          name="contact-phone"
          type="text"
          id="contact-phone"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-3"
          name="with-conditional-items"
          type="checkbox"
          value="text"
          data-aria-controls="conditional-how-contacted-3"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-3"
        >Text message </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-3"
      >
        <label class="lbh-label govuk-label" for="contact-text-message"
          >Mobile phone number</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="contact-text-message"
          type="text"
          id="contact-text-message"
        />
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with conditional item checked

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes lbh-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" data-aria-controls="conditional-how-contacted-checked" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked">
            <label class="lbh-label govuk-label" for="context-email">email address</label>
            <input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email" />
          </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" checked data-aria-controls="conditional-how-contacted-checked-2" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
        </div>
          <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-2">
            <label class="lbh-label govuk-label" for="contact-phone">Phone number</label>
                  <span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
                <input class="govuk-input govuk-input--error govuk-!-width-one-third"
                 name="contact-phone"
                 type="text" id="contact-phone"
                 aria-describedby="contact-phone-error" />
          </div>
        <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3" >
          Text message
          </label>
          </div>
        <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
          <label class="lbh-label govuk-label" for="contact-text-message">Mobile phone number</label>
          <input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message" />
        </div>
      </div>
    </fieldset>
  </div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      How do you want to be contacted?
    </legend>
    <div class="govuk-checkboxes lbh-checkboxes" data-module="govuk-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked"
          name="how-contacted-checked"
          type="checkbox"
          value="email"
          data-aria-controls="conditional-how-contacted-checked"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked"
        >
          Email
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-checked"
      >
        <label class="lbh-label govuk-label" for="context-email"
          >Email address</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="context-email"
          type="text"
          id="context-email"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked-2"
          name="how-contacted-checked"
          type="checkbox"
          value="phone"
          checked
          data-aria-controls="conditional-how-contacted-checked-2"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked-2"
        >
          Phone
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional"
        id="conditional-how-contacted-checked-2"
      >
        <label class="lbh-label govuk-label" for="contact-phone"
          >Phone number
        </label>
        <span id="contact-phone-error" class="govuk-error-message"
          >Problem with input</span
        >
        <input
          class="govuk-input govuk-input--error govuk-!-width-one-third"
          name="contact-phone"
          type="text"
          id="contact-phone"
          aria-describedby="contact-phone-error"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked-3"
          name="how-contacted-checked"
          type="checkbox"
          value="text"
          data-aria-controls="conditional-how-contacted-checked-3"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked-3"
        >
          Text message
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-checked-3"
      >
        <label class="lbh-label govuk-label" for="contact-text-message"
          >Mobile phone number</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="contact-text-message"
          type="text"
          id="contact-text-message"
        />
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes with optional form-group classes showing group error

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes lbh-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" data-aria-controls="conditional-how-contacted-checked" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked">
            <label class="lbh-label govuk-label" for="context-email">Mobile phone number</label>
          <input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email" />
          </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" checked data-aria-controls="conditional-how-contacted-checked-2" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2" >
        Phone
      </label>
        </div>
          <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-2">
            <label class="lbh-label govuk-label" for="contact-phone">Phone number</label>
        <span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
          <input
          class="govuk-input govuk-input--error govuk-!-width-one-third"
          name="contact-phone" t
          type="text" id="contact-phone"
          aria-describedby="contact-phone-error" />
        </div>
        <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3" />
        <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
          Text message
        </label>
      </div>
      <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
      <label class="lbh-label govuk-label" for="contact-text-message">Mobile phone number</label>
      <input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message" />
      </div>

  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      How do you want to be contacted?
    </legend>
    <div class="govuk-checkboxes lbh-checkboxes" data-module="govuk-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked"
          name="how-contacted-checked"
          type="checkbox"
          value="email"
          data-aria-controls="conditional-how-contacted-checked"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked"
        >
          Email
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-checked"
      >
        <label class="lbh-label govuk-label" for="context-email"
          >Mobile phone number</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="context-email"
          type="text"
          id="context-email"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked-2"
          name="how-contacted-checked"
          type="checkbox"
          value="phone"
          checked
          data-aria-controls="conditional-how-contacted-checked-2"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked-2"
        >
          Phone
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional"
        id="conditional-how-contacted-checked-2"
      >
        <label class="lbh-label govuk-label" for="contact-phone"
          >Phone number
        </label>
        <span id="contact-phone-error" class="govuk-error-message"
          >Problem with input</span
        >
        <input
          class="govuk-input govuk-input--error govuk-!-width-one-third"
          name="contact-phone"
          type="text"
          id="contact-phone"
          aria-describedby="contact-phone-error"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-checked-3"
          name="how-contacted-checked"
          type="checkbox"
          value="text"
          data-aria-controls="conditional-how-contacted-checked-3"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-checked-3"
        >
          Text message
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted-checked-3"
      >
        <label class="lbh-label govuk-label" for="contact-text-message"
          >Mobile phone number</label
        >
        <input
          class="govuk-input govuk-!-width-one-third"
          name="contact-text-message"
          type="text"
          id="contact-text-message"
        />
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a"/>
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b"/>
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c"/>
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Filter by</legend>
    <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="a"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          a thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="b"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          another thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="c"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          this thing
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small with long text

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="nullam" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="aenean" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="fusce" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Filter by</legend>
    <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="nullam"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
          at eget metus.
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="aenean"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Cras mattis consectetur purus sit amet
          fermentum.
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="fusce"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Etiam porta sem malesuada magna
          mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec
          sed odio dui. Sed posuere consectetur est at lobortis.
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small with error

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" aria-describedby="nationality-error">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <span id="nationality-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Select a thing
  </span>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-error">
    <legend class="govuk-fieldset__legend">Filter by</legend>
    <span id="nationality-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Select a thing
    </span>
    <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="a"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          a thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="b"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          another thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="c"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          this thing
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small with hint

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" aria-describedby="nationality-item-hint" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
          <span id="nationality-item-hint" class="govuk-hint govuk-checkboxes__hint lbh-hint">
        hint for a thing
      </span>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Filter by</legend>
    <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="a"
          aria-describedby="nationality-item-hint"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          a thing
        </label>
        <span
          id="nationality-item-hint"
          class="govuk-hint govuk-checkboxes__hint lbh-hint"
        >
          hint for a thing
        </span>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="b"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          another thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="c"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          this thing
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small with disabled

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b" />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c" disabled />
          <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
        </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Filter by</legend>
    <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality"
          name="nationality"
          type="checkbox"
          value="a"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality">
          a thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-2"
          name="nationality"
          type="checkbox"
          value="b"
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
          another thing
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="nationality-3"
          name="nationality"
          type="checkbox"
          value="c"
          disabled
        />
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
          this thing
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

## Checkboxes small with conditional reveal

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted" name="how-contacted" type="checkbox" value="a" data-aria-controls="conditional-how-contacted" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        a thing
      </label>
        </div>
          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
            <label class="lbh-label govuk-label" for="context-email">Foo</label>
          <input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email" />
          </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="how-contacted-2" name="how-contacted" type="checkbox" value="b" />
          <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        another thing
      </label>
        </div>

  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      How do you want to be contacted?
    </legend>
    <div
      class="govuk-checkboxes govuk-checkboxes--small lbh-checkboxes"
      data-module="govuk-checkboxes"
    >
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted"
          name="how-contacted"
          type="checkbox"
          value="a"
          data-aria-controls="conditional-how-contacted"
        />
        <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
          a thing
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="conditional-how-contacted"
      >
        <label class="lbh-label govuk-label" for="context-email">Foo</label>
        <input
          class="govuk-input govuk-!-width-one-third"
          name="context-email"
          type="text"
          id="context-email"
        />
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id="how-contacted-2"
          name="how-contacted"
          type="checkbox"
          value="b"
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          for="how-contacted-2"
        >
          another thing
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

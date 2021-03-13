---
title: Date input
---

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" pattern="[0-9]*" inputmode="numeric"/>
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" pattern="[0-9]*" inputmode="numeric"/>
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-year"
            name="dob-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with errors only

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-error">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-errors-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-errors">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-errors-error"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-errors-day"
            name="day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-errors-month"
            name="month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error"
            id="dob-errors-year"
            name="year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with errors and hint

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-hint dob-errors-error">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-errors-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <span id="dob-errors-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-errors">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-errors-hint dob-errors-error"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-errors-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <span id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-errors-day"
            name="day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-errors-month"
            name="month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-errors-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error"
            id="dob-errors-year"
            name="year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with error on day input

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-day-error-hint dob-day-error-error">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-day-error-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <span id="dob-day-error-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-day-error">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-day-error-day" name="dob-day-error-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day-error-month" name="dob-day-error-month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-day-error-year" name="dob-day-error-year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-day-error-hint dob-day-error-error"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-day-error-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <span id="dob-day-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob-day-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-day-error-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-day-error-day"
            name="dob-day-error-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-day-error-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day-error-month"
            name="dob-day-error-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-day-error-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-day-error-year"
            name="dob-day-error-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with error on month input

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-month-error-hint dob-month-error-error">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-month-error-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <span id="dob-month-error-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-month-error">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month-error-day" name="dob-month-error-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-month-error-month" name="dob-month-error-month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-month-error-year" name="dob-month-error-year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-month-error-hint dob-month-error-error"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-month-error-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <span id="dob-month-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob-month-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-month-error-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month-error-day"
            name="dob-month-error-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-month-error-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error"
            id="dob-month-error-month"
            name="dob-month-error-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-month-error-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-month-error-year"
            name="dob-month-error-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with error on year input

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-year-error-hint dob-year-error-error">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-year-error-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <span id="dob-year-error-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-year-error">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-day" name="dob-year-error-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-month" name="dob-year-error-month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-year-error-year" name="dob-year-error-year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-year-error-hint dob-year-error-error"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-year-error-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <span id="dob-year-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob-year-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-year-error-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-year-error-day"
            name="dob-year-error-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-year-error-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-year-error-month"
            name="dob-year-error-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-year-error-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error"
            id="dob-year-error-year"
            name="dob-year-error-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with default items

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-year"
            name="dob-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with optional form-group classes

<div class="govuk-form-group extra-class lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group extra-class lbh-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <div class="govuk-date-input  lbh-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-year"
            name="dob-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with autocomplete values

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-with-autocomplete-attribute-hint">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-with-autocomplete-attribute-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-with-autocomplete-attribute">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-autocomplete-attribute-day" name="dob-with-autocomplete-day" type="text" autocomplete="bday-day" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-autocomplete-attribute-month" name="dob-with-autocomplete-month" type="text" autocomplete="bday-month" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-with-autocomplete-attribute-year" name="dob-with-autocomplete-year" type="text" autocomplete="bday-year" pattern="[0-9]*" inputmode="numeric" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-with-autocomplete-attribute-hint"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span
      id="dob-with-autocomplete-attribute-hint"
      class="govuk-hint  lbh-hint"
    >
      For example, 31 3 1980
    </span>
    <div
      class="govuk-date-input  lbh-date-input"
      id="dob-with-autocomplete-attribute"
    >
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-autocomplete-attribute-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-with-autocomplete-attribute-day"
            name="dob-with-autocomplete-day"
            type="text"
            autocomplete="bday-day"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-autocomplete-attribute-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-with-autocomplete-attribute-month"
            name="dob-with-autocomplete-month"
            type="text"
            autocomplete="bday-month"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-autocomplete-attribute-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-with-autocomplete-attribute-year"
            name="dob-with-autocomplete-year"
            type="text"
            autocomplete="bday-year"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Date input with input attributes

<div class="govuk-form-group lbh-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-with-input-attributes-hint">
  <legend class="govuk-fieldset__legend">
    What is your date of birth?
  </legend>
  <span id="dob-with-input-attributes-hint" class="govuk-hint  lbh-hint">
    For example, 31 3 1980
  </span>
  <div class="govuk-date-input  lbh-date-input" id="dob-with-input-attributes">
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-day">
          Day
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-input-attributes-day" name="dob-with-input-attributes-day" type="text" pattern="[0-9]*" inputmode="numeric" data-example-day="day" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-month">
          Month
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-input-attributes-month" name="dob-with-input-attributes-month" type="text" pattern="[0-9]*" inputmode="numeric" data-example-month="month" />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-year">
          Year
        </label>
        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-with-input-attributes-year" name="dob-with-input-attributes-year" type="text" pattern="[0-9]*" inputmode="numeric" data-example-year="year" />
      </div>
    </div>
  </div>
</fieldset>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <fieldset
    class="govuk-fieldset"
    role="group"
    aria-describedby="dob-with-input-attributes-hint"
  >
    <legend class="govuk-fieldset__legend">What is your date of birth?</legend>
    <span id="dob-with-input-attributes-hint" class="govuk-hint  lbh-hint">
      For example, 31 3 1980
    </span>
    <div
      class="govuk-date-input  lbh-date-input"
      id="dob-with-input-attributes"
    >
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-input-attributes-day"
          >
            Day
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-with-input-attributes-day"
            name="dob-with-input-attributes-day"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            data-example-day="day"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-input-attributes-month"
          >
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-with-input-attributes-month"
            name="dob-with-input-attributes-month"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            data-example-month="month"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label
            class="govuk-label govuk-date-input__label"
            for="dob-with-input-attributes-year"
          >
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-with-input-attributes-year"
            name="dob-with-input-attributes-year"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            data-example-year="year"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

import { default as Accordion } from "./components/lbh-accordion/accordion";
import { default as BackToTop } from "./components/lbh-back-to-top/back-to-top";
import { default as Button } from "./components/lbh-button/button";
import { default as CharacterCount } from "./components/lbh-character-count/character-count";
import { default as Checkboxes } from "./components/lbh-checkboxes/checkboxes";
import { default as Collapsible } from "./components/lbh-collapsible/collapsible";
import { default as CookieBanner } from "./components/lbh-cookie-banner/cookie-banner";
import { default as Details } from "./components/lbh-details/details";
import { default as ErrorSummary } from "./components/lbh-error-summary/error-summary";
import { default as Map } from "./components/lbh-contact-block/contact-block";
import { default as Radios } from "./components/lbh-radios/radios";
import { default as Tabs } from "./components/lbh-tabs/tabs";

export interface InitOptions {
  scope?: HTMLElement | Document;
}

export function initAll(options?: InitOptions): void;

export {
  Accordion,
  BackToTop,
  Button,
  CharacterCount,
  Checkboxes,
  Collapsible,
  CookieBanner,
  Details,
  ErrorSummary,
  Map,
  Radios,
  Tabs,
};

declare global {
  interface Window {
    LBHFrontend: {
      Accordion: typeof Accordion;
      BackToTop: typeof BackToTop;
      Button: typeof Button;
      CharacterCount: typeof CharacterCount;
      Checkboxes: typeof Checkboxes;
      Collapsible: typeof Collapsible;
      CookieBanner: typeof CookieBanner;
      Details: typeof Details;
      ErrorSummary: typeof ErrorSummary;
      Map: typeof Map;
      Radios: typeof Radios;
      Tabs: typeof Tabs;
      initAll: (options?: InitOptions) => void;
    };
  }
}

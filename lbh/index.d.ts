export interface Accordion {
  new ($module: HTMLElement): Accordion;
}

export class Accordion {
  $module: HTMLElement;
  moduleId: string;
  $sections: NodeListOf<HTMLElement>;
  $openAllButton: string;
  browserSupportsSessionStorage: boolean | undefined;

  controlsClass: string;
  openAllClass: string;
  iconClass: string;

  sectionHeaderClass: string;
  sectionHeaderFocusedClass: string;
  sectionHeadingClass: string;
  sectionSummaryClass: string;
  sectionButtonClass: string;
  sectionExpandedClass: string;

  constructor($module: HTMLElement);

  init(): void;
  initControls(): void;
  initSectionHeaders(): void;
  initHeaderAttributes($headerWrapper: HTMLElement, index: number): void;
  onSectionToggle($section: HTMLElement): void;
  onOpenOrCloseAllToggle(): void;
  setExpanded(expanded: boolean, $section: HTMLElement | null): void;
  isExpanded(section: HTMLElement | null): boolean;
  checkIfAllSectionsOpen(): boolean;
  updateOpenAllButton(expanded: boolean): void;
  storeState($section: HTMLElement): void;
  setInitialState($section: HTMLElement): void;
}

export interface BackToTop {
  new ($module: HTMLElement): BackToTop;
}

export class BackToTop {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  checkScrollPosition($element: HTMLElement): void;
}

export interface Button {
  new ($module: HTMLElement): Button;
}

export class Button {
  $module: HTMLElement;
  debounceFormSubmitTimer: number | null;

  constructor($module: HTMLElement);

  handleKeyDown(event: KeyboardEvent): void;
  debounce(event: MouseEvent): void | false;
  init(): void;
}

export interface CharacterCount {
  new ($module: HTMLElement): CharacterCount;
}

export class CharacterCount {
  $module: HTMLElement;
  $textarea: HTMLElement | null;
  $countMessage: HTMLElement | null;

  valueChecker: number | null;

  constructor($module: HTMLElement);

  init(): void;
  sync(): void;
  getDataset(): Record<string, string>;
  count(text: string): number;
  bindChangeEvents(): void;
  checkIfValueChanged(): void;
  updateCountMessage(): void;
  handleFocus(): void;
  handleBlur(): void;
}

export interface Checkboxes {
  new ($module: HTMLElement): Checkboxes;
}

export class Checkboxes {
  $module: HTMLElement;
  $inputs: NodeListOf<HTMLInputElement>;

  constructor($module: HTMLElement);

  init(): void;
  syncAllConditionalReveals(): void;
  syncConditionalRevealWithInputState($input: HTMLInputElement): void;
  unCheckAllInputsExcept($input: HTMLInputElement): void;
  unCheckExclusiveInputs($input: HTMLInputElement): void;
  handleClick(event: MouseEvent): void;
}

export interface Collapsible {
  new ($module: HTMLElement): Collapsible;
}

export class Collapsible {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
}

export interface CookieBanner {
  new ($module: HTMLElement): CookieBanner;
}

export class CookieBanner {
  $module: HTMLElement;
  $button: HTMLElement | null;

  constructor($module: HTMLElement);

  init(): void;
  checkCookies(): string | null;
  showCookieBanner(): void;
  bindAcceptButton(): void;
}

export interface Details {
  new ($module: HTMLElement): Details;
}

export class Details {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  polyfillDetails(): void;
  polyfillSetAttributes(): true;
  polyfillHandleInputs(node: HTMLElement, callback: Function): void;
}

export interface ErrorSummary {
  new ($module: HTMLElement): ErrorSummary;
}

export class ErrorSummary {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  handleClick(event: MouseEvent): void;
  focusTarget($target: HTMLElement): boolean;
  getFragmentFromUrl(url: string): string | false;
  getAssociatedLegendOrLabel($input: HTMLElement): HTMLElement | null;
}

export interface Map {
  new ($module: HTMLElement): Map;
}

export class Map {
  $module: HTMLElement;
  moduleId: string;
  accessToken: string;
  markerLat: number | null;
  markerLng: number | null;
  centreLat: number;
  centreLng: number;
  maxZoom: number;
  minZoom: number;
  initialZoom: number;
  showZoomControl: boolean;
  minLat: number;
  maxLat: number;
  maxLng: number;

  constructor($module: HTMLElement);

  init(): void;
  initLeaflet(): void;
  setBounds(): void;
  initMapboxTiles(): void;
  addMarker(): void;
}

export interface Radios {
  new ($module: HTMLElement): Radios;
}

export class Radios {
  $module: HTMLElement;
  $inputs: NodeListOf<HTMLInputElement>;
  constructor($module: HTMLElement);

  init(): void;
  syncAllConditionalReveals(): void;
  syncConditionalRevealWithInputState(): void;
  handleClick(event: MouseEvent): void;
}

export interface Tabs {
  new ($module: HTMLElement): Tabs;
}

export class Tabs {
  $module: HTMLElement;
  $tabs: NodeListOf<HTMLElement>;
  keys: { left: number; right: number; up: number; down: number };
  jsHiddenClass: string;

  constructor($module: HTMLElement);

  init(): void;
  setupResponsiveChecks(): void;
  checkMode(): void;
  setup(): void;
  teardown(): void;
  onHashChange(event: HashChangeEvent): void;
  hideTab($tab: HTMLElement): void;
  showTab($tab: HTMLElement): void;
  getTab(hash: string): HTMLElement | null;
  setAttributes($tab: HTMLElement): void;
  unsetAttributes($tab: HTMLElement): void;
  onTabClick(event: MouseEvent): void;
  createHistoryEntry($tab: HTMLElement): void;
  onTabKeydown(event: KeyboardEvent): void;
  activateNextTab(): void;
  activatePreviousTab(): void;
  getPanel($tab: HTMLElement): HTMLElement | null;
  showPanel($tab: HTMLElement): void;
  hidePanel($tab: HTMLElement): void;
  unhighlightTab($tab: HTMLElement): void;
  getCurrentTab(): HTMLElement | null;
  getHref($tab: HTMLElement): string;
}

export interface InitOptions {
  scope?: HTMLElement | Document;
}

export function initAll(options?: InitOptions): void;

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

class CookieBanner {
  $module: HTMLElement;
  $button: HTMLElement | null;

  constructor($module: HTMLElement);

  init(): void;
  checkCookies(): string | null;
  showCookieBanner(): void;
  bindAcceptButton(): void;
}

export default CookieBanner;

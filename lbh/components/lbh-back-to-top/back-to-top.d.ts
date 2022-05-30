class BackToTop {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  checkScrollPosition($element: HTMLElement): void;
}

export default BackToTop;

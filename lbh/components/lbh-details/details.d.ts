class Details {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  polyfillDetails(): void;
  polyfillSetAttributes(): true;
  polyfillHandleInputs(node: HTMLElement, callback: Function): void;
}

export default Details;

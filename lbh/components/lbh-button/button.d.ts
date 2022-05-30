class Button {
  $module: HTMLElement;
  debounceFormSubmitTimer: number | null;

  constructor($module: HTMLElement);

  handleKeyDown(event: KeyboardEvent): void;
  debounce(event: MouseEvent): void | false;
  init(): void;
}

export default Button;

class ErrorSummary {
  $module: HTMLElement;

  constructor($module: HTMLElement);

  init(): void;
  handleClick(event: MouseEvent): void;
  focusTarget($target: HTMLElement): boolean;
  getFragmentFromUrl(url: string): string | false;
  getAssociatedLegendOrLabel($input: HTMLElement): HTMLElement | null;
}

export default ErrorSummary;

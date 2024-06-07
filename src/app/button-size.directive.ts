import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: "button[mat-button], button[mat-raised-button], button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]",
  standalone: true
})
export class ButtonSizeDirective {
  size = input<"small" | "large">();

  @HostBinding("style") get style() {
    if (this.size() === "small") {
      return {
        "--mdc-text-button-container-height": "40px",
        "--mat-text-button-horizontal-padding": "40px",
        "--mdc-text-button-label-text-size": "0.875rem",

        "--mdc-protected-button-container-height": "40px",
        "--mat-protected-button-horizontal-padding": "40px",
        "--mdc-protected-button-label-text-size": "0.875rem",

        "--mdc-outlined-button-container-height": "40px",
        "--mat-outlined-button-horizontal-padding": "40px",
        "--mdc-outlined-button-label-text-size": "0.875rem",

        "--mdc-filled-button-container-height": "40px",
        "--mat-filled-button-horizontal-padding": "40px",
        "--mdc-filled-button-label-text-size": "0.875rem",
      }
    }

    if (this.size() === "large") {
      return {
        "--mdc-text-button-container-height": "calc(40px * 1.3)",
        "--mat-text-button-horizontal-padding": "calc(40px * 1.3)",
        "--mdc-text-button-label-text-size": "calc(0.875rem * 1.3)",

        "--mdc-protected-button-container-height": "calc(40px * 1.3)",
        "--mat-protected-button-horizontal-padding": "calc(40px * 1.3)",
        "--mdc-protected-button-label-text-size": "calc(0.875rem * 1.3)",

        "--mdc-outlined-button-container-height": "calc(40px * 1.3)",
        "--mat-outlined-button-horizontal-padding": "calc(40px * 1.3)",
        "--mdc-outlined-button-label-text-size": "calc(0.875rem * 1.3)",

        "--mdc-filled-button-container-height": "calc(40px * 1.3)",
        "--mat-filled-button-horizontal-padding": "calc(40px * 1.3)",
        "--mdc-filled-button-label-text-size": "calc(0.875rem * 1.3)",
      }
    }

    return {};
  }
}

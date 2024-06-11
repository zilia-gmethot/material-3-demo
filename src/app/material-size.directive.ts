import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: `
    button[mat-button],
    a[mat-button],
    button[mat-raised-button],
    a[mat-raised-button],
    button[mat-flat-button],
    a[mat-flat-button],
    button[mat-stroked-button],
    a[mat-stroked-button],
    button[mat-icon-button],
    a[mat-icon-button],
    button[mat-fab],
    a[mat-fab],
    button[mat-mini-fab],
    a[mat-mini-fab],
    mat-slide-toggle
  `,
  standalone: true
})
export class MaterialSizeDirective {
  size = input<"small" | "large">();

  @HostBinding("class.material-size-small") get classSmall() {
    return this.size() === "small";
  }

  @HostBinding("class.material-size-large") get classLarge() {
    return this.size() === "large";
  }
}

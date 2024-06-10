import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: "button[mat-button], button[mat-raised-button], button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]",
  standalone: true
})
export class ButtonSizeDirective {
  size = input<"small" | "large">();

  @HostBinding("class.app-button-size-small") get classSmall() {
    return this.size() === "small";
  }

  @HostBinding("class.app-button-size-large") get classLarge() {
    return this.size() === "large";
  }
}

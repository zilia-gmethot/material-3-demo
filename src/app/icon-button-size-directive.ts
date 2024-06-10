import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: "button[mat-icon-button], a[mat-icon-button]",
  standalone: true
})
export class IconButtonSizeDirective {
  size = input<"small" | "large">();

  @HostBinding("class.app-icon-button-size-small") get classSmall() {
    return this.size() === "small";
  }

  @HostBinding("class.app-icon-button-size-large") get classLarge() {
    return this.size() === "large";
  }
}

import { Component, input } from "@angular/core";

import { IconComponent } from "./icon";


type ButtonStyle = 'text' | 'filled' | 'outlined';


@Component({
  selector: "button[appIconButton], a[appIconButton]",
  imports: [IconComponent],
  template: `
    @if (this.icon(); as icon) { <app-icon [icon]="icon" /> }
    @else { <ng-content /> }
  `,
  host: {
    class: `
      p-2 size-10 rounded-full
      not-disabled:cursor-pointer not-disabled:hover:bg-color-text-accent/10 not-disabled:hover:text-color-text-accent
      not-disabled:active:bg-color-text-accent/15 not-disabled:active:text-color-text-accent
      disabled:text-color-disabled
    `
  }
})
export class IconButtonComponent {
  icon = input<string>(undefined, { alias: "appIconButton" });
}



@Component({
  selector: "button[appButton]",
  template: `<ng-content />`,
  host: {
    class: `
      px-4 py-1.5 rounded-lg
      text-color-primary font-medium
      cursor-pointer
      hover:bg-color-primary/20
    `,
    "[class.bg-color-primary]": "this.style() === 'filled'",
    "[class.text-white]": "this.style() === 'filled'",
    "[class.hover:bg-color-primary/70]": "this.style() === 'filled'",
  }
})
export class ButtonComponent {
  style = input<ButtonStyle | "">('text', { alias: "appButton" });
}

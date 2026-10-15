import { Directive } from "@angular/core";
import { CdkMenu, CdkMenuItem } from "@angular/cdk/menu";

import { PanelDirective } from "./panel";



@Directive({
  selector: '[appMenu]',
  hostDirectives: [CdkMenu, PanelDirective],
  host: {
    class: `
      min-w-56 py-1.5 text-sm rounded-lg
    `
  }
})
export class MenuDirective { }


@Directive({
  selector: 'button[appMenuItem]',
  hostDirectives: [CdkMenuItem],
  host: {
    class: `
      block w-full px-4 py-1.5 text-start select-none
      not-disabled:cursor-pointer
      disabled:text-color-disabled
      focus:outline-0
      hover:not-disabled:bg-color-background/80 hover:not-disabled:text-color-text-accent
    `
  }
})
export class MenuItemDirective { }

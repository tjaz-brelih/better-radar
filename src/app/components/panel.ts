import { Directive } from "@angular/core";

@Directive({
  selector: '[appPanel]',
  host: {
    class: `bg-color-background/30 border border-color-border rounded-2xl backdrop-blur-sm backdrop-brightness-120 dark:backdrop-brightness-80 shadow-xl/20 dark:shadow-xl/50`
  }
})
export class PanelDirective { }

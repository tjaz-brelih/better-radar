import { booleanAttribute, Component, input } from "@angular/core";


@Component({
  selector: 'app-button-toggle-group',
  template: '<ng-content></ng-content>',
  host: {
    class: 'flex gap-2 p-1.5 rounded-xl border border-color-border'
  }
})
export class ButtonToggleGroupComponent {}


@Component({
  selector: 'app-button-toggle',
  template: '<ng-content></ng-content>',
  host: {
    class: 'flex grow items-center justify-center gap-3 px-4 py-1.5 rounded-lg hover:bg-color-background-hover cursor-pointer outline-color-primary',
    '[class.bg-color-primary/10!]': "this.active()",
    '[class.text-color-primary]': "this.active()",
    '[class.outline]': "this.active()",
  }
})
export class ButtonToggleComponent {
  active = input<boolean>(false, { transform: booleanAttribute })
}

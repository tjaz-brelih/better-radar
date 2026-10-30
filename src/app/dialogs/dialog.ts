import { Component } from "@angular/core";

import { CdkPortalOutlet } from "@angular/cdk/portal";
import { CdkDialogContainer } from "@angular/cdk/dialog";

import { PanelDirective } from "components";


@Component({
  selector: "app-dialog-container",
  imports: [CdkPortalOutlet, PanelDirective],

  template: `
    <div appPanel class="p-6 bg-color-background!">
      <ng-template cdkPortalOutlet />
    </div>
  `,

  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: inherit;
      max-height: inherit;
    }
  `
})
export class DialogContainer extends CdkDialogContainer { }

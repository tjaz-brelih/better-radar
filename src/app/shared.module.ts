import { NgModule } from "@angular/core";

import { ButtonComponent, IconButtonComponent, IconComponent, MenuDirective, SliderComponent, TooltipDirective, PanelDirective, DividerComponent, ButtonToggleGroupComponent, ButtonToggleComponent } from "components";


const STUFF = [
  ButtonComponent,
  ButtonToggleGroupComponent,
  ButtonToggleComponent,
  DividerComponent,
  IconButtonComponent,
  IconComponent,
  MenuDirective,
  PanelDirective,
  SliderComponent,
  TooltipDirective,
];


@NgModule({
  imports: STUFF,
  exports: STUFF
})
export class SharedModule { }

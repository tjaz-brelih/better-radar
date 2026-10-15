import { NgModule } from "@angular/core";

import { ButtonComponent, ButtonGroupDirective, IconButtonComponent, IconComponent, MenuDirective, SliderComponent, TooltipDirective, PanelDirective, IconButton2Component, DividerComponent } from "components";


const STUFF = [
  ButtonComponent,
  ButtonGroupDirective,
  DividerComponent,
  IconButtonComponent,
  IconButton2Component,
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

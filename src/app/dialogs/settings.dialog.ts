import { Component, effect, inject, signal, untracked } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { Dialog } from "@angular/cdk/dialog";

import { SharedModule } from "shared";
import { SettingsService, Theme } from "services";


@Component({
  imports: [TitleCasePipe, SharedModule],

  template: `
    <h1>Settings</h1>

    <div class="pt-6">

      <div>
        <div class="font-medium">Theme</div>
        <div class="mb-2 text-sm text-color-disabled">Choose how the map and controls look.</div>

        <app-button-toggle-group>
          @for (theme of this.themes; track theme.theme) {
            @let t = theme.theme;

            <app-button-toggle [active]="this.theme() === t" (click)="this.theme.set(t)">
              <app-icon [icon]="theme.icon" class="size-5!" />
              <span>{{ t | titlecase }}</span>
            </app-button-toggle>
          }
        </app-button-toggle-group>
      </div>
    </div>
  `,

  styles: `
    @reference "tailwindcss";

    section {
      @apply col-span-2 grid grid-cols-subgrid items-center;
    }
  `
})
export class SettingsDialogComponent {
  private _settingsService = inject(SettingsService);

  public theme = signal(this._settingsService.settings.theme);

  protected themes: { theme: Theme, icon: string }[] = [
    { theme: 'auto', icon: 'sun-moon' },
    { theme: 'dark', icon: 'moon' },
    { theme: 'light', icon: 'sun' }
  ];



  constructor() {
    effect(() => {
      const theme = this.theme();

      untracked(() => {
        this._settingsService.save({ theme });
        this._settingsService.setTheme();
      });
    });
  }



  public static open(dialog: Dialog) {
    return dialog.open(SettingsDialogComponent);
  }
}

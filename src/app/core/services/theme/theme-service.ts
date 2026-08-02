import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

/**
 * Manager of the Theme Service, which manages if the theme is dark or light
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeIsLight:WritableSignal<boolean> = signal(true);
  private iconToShow: Signal<string> = computed(() =>
    this.themeIsLight() ? "sun" : "moon"
  );

  /**
   * Get the class to apply the dark theme in the website
   * @returns {Signal<string>} The class theme which correspond to dark
   */
  public get Theme(): Signal<string> {
    return computed(() => this.themeIsLight() ? "" : "dark-theme")
  }

  /**
   * Get the icon which corresponds to the current theme.
   * @returns {Signal<string>} The icon to show.
   */
  public get Icon(){
    return this.iconToShow;
  }

  /**
   * Invert the current theme
   */
  public changeTheme(){
    this.themeIsLight.set(!this.themeIsLight());
    document.documentElement.classList.toggle('dark-theme');
  }

}

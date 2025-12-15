import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes/app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { providePrimeNG } from 'primeng/config';
import {MyCustomPreset} from "./theme/custom-theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset:MyCustomPreset,
        options: {
          darkModeSelector: null,
        }
      }
    })
  ]
};

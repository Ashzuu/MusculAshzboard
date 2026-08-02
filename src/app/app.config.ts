import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes/app.routes';
import { providePrimeNG } from 'primeng/config';
import {MyCustomPreset} from "./theme/custom-theme";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {loaderInterceptor} from './core/interceptors/loader-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loaderInterceptor])
    ),
    providePrimeNG({
      theme: {
        preset:MyCustomPreset,
        options: {
          darkModeSelector: '.dark-theme',
        }
      }
    })
  ]
};

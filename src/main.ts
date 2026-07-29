import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error("Erreur lors du démarrage de l'application, notamment dans les différentes initialisations. Vérifiez vos configurations et relancez l'application."));

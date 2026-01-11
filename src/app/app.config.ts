import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = { ... } = Είναι το global configuration της εφαρμογής σου, Λέει στον Angular ποια services και providers είναι διαθέσιμα παντού
export const appConfig: ApplicationConfig = {
  providers: [
    // Ενεργοποιεί global error handling στο browser, Πιάνει unhandled errors & promises, Βοηθάει στο debugging
    provideBrowserGlobalErrorListeners(),
    // Ενεργοποιεί τον Angular Router, Φορτώνει το routing configuration από το routes
    provideRouter(routes),
    // Κάνει διαθέσιμο το HttpClient service, Σου επιτρέπει να κάνεις API calls
    provideHttpClient()
  ]
};

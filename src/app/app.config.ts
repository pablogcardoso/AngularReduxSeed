import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { ROOT_REDUCERS } from './store/state/app.state';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effect';
import { RolesEffects } from './store/effects/roles.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimations(),
    provideStore(ROOT_REDUCERS),provideEffects([UsersEffects,RolesEffects])
  ]
};

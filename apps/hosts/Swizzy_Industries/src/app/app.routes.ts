import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'Homepage',
    loadChildren: () =>
      loadRemoteModule('Homepage', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Landing',
    loadChildren: () =>
      loadRemoteModule('Landing', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Verify_Email',
    loadChildren: () =>
      loadRemoteModule('Verify_Email', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Authenticator',
    loadChildren: () =>
      loadRemoteModule('Authenticator', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Login',
    loadChildren: () =>
      loadRemoteModule('Login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Register',
    loadChildren: () =>
      loadRemoteModule('Register', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

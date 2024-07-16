import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Login',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Login/Login/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

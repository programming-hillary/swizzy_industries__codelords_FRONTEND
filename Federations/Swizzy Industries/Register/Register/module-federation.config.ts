import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Register',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Register/Register/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

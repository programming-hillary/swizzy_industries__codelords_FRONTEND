import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Homepage',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Homepage/Homepage/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

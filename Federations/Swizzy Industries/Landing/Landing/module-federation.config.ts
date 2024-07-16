import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Landing',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Landing/Landing/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

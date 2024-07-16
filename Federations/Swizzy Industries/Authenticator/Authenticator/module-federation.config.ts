import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Authenticator',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Authenticator/Authenticator/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

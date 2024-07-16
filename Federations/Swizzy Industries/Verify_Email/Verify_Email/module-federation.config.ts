import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Verify_Email',
  exposes: {
    './Routes':
      'Federations/Swizzy Industries/Verify_Email/Verify_Email/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

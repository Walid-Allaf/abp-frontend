import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'abp_example',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44339/',
    redirectUri: baseUrl,
    clientId: 'abp_example_App',
    responseType: 'code',
    scope: 'offline_access abp_example',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44339',
      rootNamespace: 'abp_example',
    },
  },
} as Environment;

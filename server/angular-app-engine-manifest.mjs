
export default {
  basePath: 'https://AegisHyper.github.io/superarigatoshop-deploy',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

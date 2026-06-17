
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AegisHyper.github.io/superarigatoshop-deploy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UCCVJSHB.js",
      "chunk-IX3Y7EJH.js"
    ],
    "route": "/superarigatoshop-deploy"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGC7ANMA.js",
      "chunk-MTJGAO6Z.js",
      "chunk-KP4CRXCC.js",
      "chunk-Y2VJ3Z5P.js",
      "chunk-IX3Y7EJH.js"
    ],
    "route": "/superarigatoshop-deploy/pages/product-detail"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TH5WPNY3.js",
      "chunk-MTJGAO6Z.js",
      "chunk-IINIESDU.js",
      "chunk-KP4CRXCC.js",
      "chunk-Y2VJ3Z5P.js",
      "chunk-IX3Y7EJH.js"
    ],
    "route": "/superarigatoshop-deploy/pages/payment"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SXBUP5ZH.js",
      "chunk-IMHNMEN6.js",
      "chunk-Y2VJ3Z5P.js",
      "chunk-IX3Y7EJH.js"
    ],
    "route": "/superarigatoshop-deploy/pages/orders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I5VK3U42.js"
    ],
    "route": "/superarigatoshop-deploy/pages/orders-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZRWDBS3I.js",
      "chunk-IINIESDU.js",
      "chunk-KP4CRXCC.js",
      "chunk-IMHNMEN6.js",
      "chunk-Y2VJ3Z5P.js",
      "chunk-IX3Y7EJH.js"
    ],
    "route": "/superarigatoshop-deploy/signin"
  },
  {
    "renderMode": 2,
    "redirectTo": "/superarigatoshop-deploy",
    "route": "/superarigatoshop-deploy/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25201, hash: 'ce13159e95d8bf84f4838589f1a6f1ab8baa1b2e6694e0663c27f1d591dc1feb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17570, hash: 'ef545e5bbd68ea628357fb61c46136d8a48b45f5e0a4352a0ff3fba73cd3307c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pages/product-detail/index.html': {size: 72661, hash: '6aa58d235539e5f72d7fba982363fb28484c58bf34071e038b387b0b5554ee4c', text: () => import('./assets-chunks/pages_product-detail_index_html.mjs').then(m => m.default)},
    'pages/orders-details/index.html': {size: 70941, hash: '23d2147405738d1597a038195d10d0ef07b3078d85dc7b5aee10b05a6578dca0', text: () => import('./assets-chunks/pages_orders-details_index_html.mjs').then(m => m.default)},
    'pages/payment/index.html': {size: 103576, hash: '7c45082d9dd850e706fd9f1316ef12b25659d5c028474d42d1e3c9511480b25f', text: () => import('./assets-chunks/pages_payment_index_html.mjs').then(m => m.default)},
    'index.html': {size: 71583, hash: '30a5479a28900d8604f7ba864a24b7b18b15b6a619dddd38fe407e0d6c150862', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 130264, hash: 'fac1dfa61873e86b02496c872fb2a93519e35f222de0bf0f1efc5980dbb7cdc7', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pages/orders/index.html': {size: 71114, hash: '7e4383aed3464e7a54b7d5b7675bc3587fd1b52299dfd14ea52be45d201fcfad', text: () => import('./assets-chunks/pages_orders_index_html.mjs').then(m => m.default)},
    'styles-3RW63NZS.css': {size: 8196, hash: 'y3mz114uNIc', text: () => import('./assets-chunks/styles-3RW63NZS_css.mjs').then(m => m.default)}
  },
};

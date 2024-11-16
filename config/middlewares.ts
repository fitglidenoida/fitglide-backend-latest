module.exports = [
'strapi::logger',
'strapi::errors',
'strapi::security',
{
  name: 'strapi::cors',
  config: {
    origin: [
      'http://localhost:3000',  // Local development
      'https://fitglide.in',    // Production frontend
      'https://admin.fitglide.in' // Backend
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  },
},
'strapi::poweredBy',
'strapi::query',
'strapi::body',
'strapi::session',
'strapi::favicon',
'strapi::public',
];
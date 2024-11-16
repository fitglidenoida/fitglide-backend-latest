module.exports = [
'strapi::logger',
'strapi::errors',
'strapi::security',
{
  name: 'strapi::cors',
  config: {
    origin: [
      'http://localhost:3000',
      'https://fitglide.in',
      'https://admin.fitglide.in'
    ], // Allow your frontend and backend origins
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true, // Ensure cookies are sent with requests
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  },
},
'strapi::poweredBy',
{
  name: 'strapi::security',
  config: {
    referrerPolicy: { policy: 'no-referrer-when-downgrade' }, // Update referrer policy
  },
},
'strapi::query',
'strapi::body',
'strapi::session',
'strapi::favicon',
'strapi::public',
];
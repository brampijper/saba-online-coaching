const cred = process.env.NODE_ENV === 'production' ? { ADMIN_JWT_SECRET: ""} : require("../credentials.js");

module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 7807),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', cred.ADMIN_JWT_SECRET),
    },
  },
});

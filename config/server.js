if (process.env.NODE_ENV !== 'production') {
  const cred = require("../credentials.js");
  const authSecret = { 'secret': cred.ADMIN_JWT_SECRET }
} else {
  authSecret = { 'secret': null };
}

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', authSecret.secret),
    },
  },
});

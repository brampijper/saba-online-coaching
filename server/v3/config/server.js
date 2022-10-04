module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 7807),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

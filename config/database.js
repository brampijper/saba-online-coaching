const cred = require("../credentials.js");

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', cred.DATABASE_NAME),
        username: env('DATABASE_USERNAME', cred.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', cred.DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

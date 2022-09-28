import { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } from '../credentials.js';

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', DATABASE_NAME),
        username: env('DATABASE_USERNAME', DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

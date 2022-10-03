
  module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('PGHOST', 'localhost'),
          port: env.int('PGPORT', 5432),
          database: env('PGDATABASE', 'strapi-sofia-k'),
          username: env('PGUSER', 'postgres'),
          password: env('PGPASSWORD', 'postgres'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
      },
    },
  });
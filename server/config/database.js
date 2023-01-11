module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'saba'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'postgres-db'),
      ssl: false
    },
    debug: false,
  },
});
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql2',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'h1sys_prefeiturastrapi'),
        username: env('DATABASE_USERNAME', 'h1sys'),
        password: env('DATABASE_PASSWORD', 'tr-server'),
      },
      options: {
        ssl: false,
      },
    },
  },
});

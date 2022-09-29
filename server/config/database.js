
if (process.env.NODE_ENV === 'production') {
  module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME'),
          username: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
      },
    },
  });

} else {
  const cred = require("../credentials.js");
  module.exports = () => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: 'localhost',
          port: 5432,
          database: cred.DATABASE_NAME,
          username: cred.DATABASE_USERNAME,
          password: cred.DATABASE_PASSWORD,
          ssl: false,
        },
        options: {}
      },
    },
  });
}


// if (process.env.NODE_ENV === 'production') {
//     module.exports = {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: process.env.CLOUDINARY_NAME,
//         api_key: process.env.CLOUDINARY_KEY,
//         api_secret: process.env.CLOUDINARY_SECRET
//       }
//     };
//   } else {
//     // to use the default local provider you can return an empty configuration
//     module.exports = {};
//   }
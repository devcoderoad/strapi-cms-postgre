module.exports = ({ env }) => ({
  connection: {
    // client: "mysql",
    // connection: {
    //   host: env("DATABASE_HOST", "127.0.0.1"),
    //   port: env.int("DATABASE_PORT", 3307),
    //   database: env("DATABASE_NAME", "strapi-mysql"),
    //   user: env("DATABASE_USERNAME", "root"),
    //   password: env("DATABASE_PASSWORD", "example"),
    //   charset: env("DATABASE_CHARSET", "utf8mb4"),
    //   ssl: env.bool("DATABASE_SSL", false),
    // },
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi-cms"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "example"),
      charset: env("DATABASE_CHARSET", "utf8mb4"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    pool: {
      min: 0,
      max: 20,
    },
    debug: false,
    options: {
      charset: "utf8mb4_unicode_ci",
    },
  },
});

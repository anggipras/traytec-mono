let db;

db = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST_DEV", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: env.bool(false),
    },
  },
});

if (process.env.NODE_ENV === "production") {
  db = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5435),
        database: env("DATABASE_NAME", "medical-aesthetix-strapi"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "docker"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  });
}


module.exports = db;

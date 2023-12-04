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

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  const parse = require("pg-connection-string").parse;

  console.log(
    ">>>>>>>>>>>>>>>>>>>> Parsed DB config ::::::::::",
    parse(process.env.DATABASE_URL),
  );

  const { host, port, database, user, password } = parse(
    process.env.DATABASE_URL,
  );

  db = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: {
          ca: env("DATABASE_CA"),
        },
      },
      debug: false,
    },
  });
}

module.exports = db;

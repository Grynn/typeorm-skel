module.exports = [
  {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "skel",
    //password: "_xxx", @use PGPASS env. variable
    database: "skel",
    synchronize: false,
    logging: true,
    name: "default", //connection name
    entities: ["src/entity/**/*.{js,ts}"],
    migrations: ["src/migration/**/*.{js,ts}"],
    subscribers: ["src/subscriber/**/*.{js,ts}"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  },
];

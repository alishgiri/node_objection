const { knexSnakeCaseMappers } = require("objection")

// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'objection_tutorial',
      user: 'alishgiri',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./seeds"
    },
  },
  ...knexSnakeCaseMappers,
};

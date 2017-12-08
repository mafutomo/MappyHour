module.exports = {
  test:{
    client: 'pg',
    connection: `postgres://localhost:5432/sozc_test`,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/sozc_dev`,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

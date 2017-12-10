module.exports = {
  test:{
    client: 'pg',
    connection: `postgres://localhost:3000/sozc_test`,
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: `postgres://localhost:3000/sozc_dev`,
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

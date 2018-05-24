module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://awray:doot@localhost:5433/api-db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

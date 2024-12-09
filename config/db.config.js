const pg = require("pg")

// "username": "postgres.prosenwwbxwgokvlywtq",
// "password": "Tomzriderx02",
// "database": "postgres",
// "host": "aws-0-ap-southeast-1.pooler.supabase.com",
// "dialect": "postgres"

// DEVELOPMENT
const config = {
  development: {
    username: "postgres.prosenwwbxwgokvlywtq",
    password: "Tomzriderx02",
    database: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    dialect: "postgres",
    dialecModule: pg,
  },
  test: {
    username: "postgres.prosenwwbxwgokvlywtq",
    password: "Tomzriderx02",
    database: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    dialect: "postgres",
    dialecModule: pg,
  },
  production: {
    username: "postgres.prosenwwbxwgokvlywtq",
    password: "Tomzriderx02",
    database: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    dialect: "postgres",
    dialecModule: pg,
  },
}

module.exports = config

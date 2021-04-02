require('dotenv').config();

module.exports ={
  "development": {
   use_env_variable: process.env.DATABASE_DEV_URL
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    use_env_variable: process.env.DATABASE_URL
  }
}

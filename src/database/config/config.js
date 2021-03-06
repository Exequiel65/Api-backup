require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER2,
    "password": process.env.DB_PASSWORD2,
    "database": process.env.DB_NAME2,
    "host": process.env.DB_HOST2,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER2,
    "password": process.env.DB_PASSWORD2,
    "database": process.env.DB_NAME2,
    "host": process.env.DB_HOST2,
    "dialect": "mysql"
  }
}

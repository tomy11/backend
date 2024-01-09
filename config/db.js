require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,} = process.env;

module.exports = { dbUrl: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}` };
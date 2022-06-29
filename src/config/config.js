require('dotenv').config()

module.exports = {
  MONGO_URL: process.env.MONGO_URL || '',
  PORT: process.env.PORT || 8080,
  EXP_TIME: process.env.EXP_TIME || 1000*60*10
}
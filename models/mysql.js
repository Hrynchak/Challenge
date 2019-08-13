const
  mysql = require('mysql'),
  hl = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const db = mysql.createConnection({
  host: 'c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'ghzocq16mvrw0ml0',
  password: 'at2o0dvtk73er2vn',
  database: 'a15sfp68k8d1zqnp',
  charset: "utf8mb4"
})

db.connect(err => {
  if(err){
    hl.error(err)
  }
})

module.exports = db

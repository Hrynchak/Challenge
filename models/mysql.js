const
  mysql = require('mysql'),
  hl = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const db = mysql.createConnection({
  host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'ub1b4yoncojtvt2w',
  password: 'l6hqwusuazvk9fc2',
  database: 'kw0ddgnkk8d3b4s3',
  charset: "utf8mb4"
})

db.connect(err => {
  if(err){
    hl.error(err)
  }
})

module.exports = db

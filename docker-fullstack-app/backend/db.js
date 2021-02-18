const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "docker-fullstack-mysql.crztts8yzihy.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "johnahn777",
    database: "myapp",
    port: 3306
});
exports.pool = pool; 
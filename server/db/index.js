require('dotenv').config();
const mysql = require('mysql');


// creating mysql connection config
const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
});

let itemsdb = {};

itemsdb.all = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM new_table`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

itemsdb.one = (id) => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM new_table WHERE itemId = ?`, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = itemsdb;
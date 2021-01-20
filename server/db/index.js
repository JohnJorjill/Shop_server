const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'admin',
    user: 'root',
    database: 'shop',
    host:'localhost',
    port:'3306'
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
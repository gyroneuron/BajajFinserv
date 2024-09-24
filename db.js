const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node_ws',
    password: 'Babita@1984'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
    }
    else{
console.log('DB Connected');


    }
});
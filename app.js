const express = require('express')
const app = express()
const port = 3000
const { connection } = require('./db');

app.get('/', (req, res) => {
    connection.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log("DB result:", result);
        data = JSON.stringify(result);
        res.send("Query executed successfully", data[0].name);
});
});



app.listen(port, () => {
 console.log(`App listening on port ${port}`)
});

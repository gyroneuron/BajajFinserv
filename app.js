const express = require("express");
const app = express();
const port = 3000;
const { connection } = require("./db");

app.use(express.json());

app.post("/add",(req,res)=> {
    const {name, email, password} = req.body;
    if (!name || !email || !password){
        res.status(400).send("Please provide all the details");
    }
    connection.query(`INSERT INTO users VALUE(NULL,"${name}","${email}",MD5("${password}"),CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,function(error,results,fields){
     if (error) throw error;
     res.send(`Data for ${name} inserted successfully!`);
     })
    
})

app.get("/search", (req, res) => {
    const user_input = req.query.user_input;
    connection.query(`SELECT * FROM users WHERE name = "${user_input}"`, function (err, result, fields) {
      if (err) throw err;
      console.log("DB result:", result);
      res.send(`${JSON.stringify(result)}`);
    });
  });


app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log("DB result:", result);
    res.send(`${JSON.stringify(result)}`);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

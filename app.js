const express = require('express')
const app = express()
const port = 3000


// Route to accept two query parameters
app.get('/', (req, res) => {
 const num1 = parseFloat(req.query.num1); // Get 'num1' from query parameters
 const num2 = parseFloat(req.query.num2); // Get 'num2' from query parameters
 const operator = req.query.operator; // Get 'operator' from query parameters



 // Check if both query parameters are valid numbers
 if (isNaN(num1) || isNaN(num2 || operator !== '+' || operator !== '-')) {
   return res.send('Please provide valid numbers as query parameters');
 }


  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  }
 res.send(`The result of ${num1} ${operator} ${num2} is ${result}`);
})


app.listen(port, () => {
 console.log(`App listening on port ${port}`)
})

const express = require('express');
const app = express();
app.use(express.json());

app.get('/' , (req,res) => {
    console.log("Hello World");
    res.send("Hello World");
});

app.listen(1900, () => {
    console.log("Listening on port 1900...");
  })
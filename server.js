const express = require("express");

const app = express();

const PORT = 3001;



// listen
app.listen(PORT, ()=>{
    console.log('App is running on port '+PORT)
})
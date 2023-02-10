const fs = require('fs');
const axios = require("axios")

fs.readFile('../data/names.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log( "data from fs" , data);
});

axios.get("../data/names.json").then((result) => {
  console.log("data from axios" , result)
  
}).catch((err) => {
  console.log(err)
});
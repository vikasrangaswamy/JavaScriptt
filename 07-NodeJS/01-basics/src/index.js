const fs = require('fs');

fs.readFile('../data/names.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

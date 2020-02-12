const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

const fetcher = (url, filePath) => {
  request(url, (body) => {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Saved to ${filePath}`);
      }
    });
  });
}

fetcher(url, filePath);

// node fetcher.js https://www.google.com/ ./index.html
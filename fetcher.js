const request = require('request');
const fs = require('fs');
// const readline = require('readline');

const url = process.argv[2];
const filePath = process.argv[3];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const fetcher = (url, filePath) => {
  // if (filePath) {
  //   // rl.pause();
  //   rl.question('This file exists. Press Y to overwrite the file, or Ctrl+C to exit the app', (key) => {
  //     if (key === Y) {
  //       close();
  //     }
  //   });
  // }
  request(url, (error, response, body) => {
    fs.writeFile(filePath, body, (err) => {
      fs.stat(filePath, (err, stats) => {
        const size = stats.size;
        if (err) throw err;
        console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
      });
    });
  });
};

fetcher(url, filePath);

// node fetcher.js https://www.google.com/ ./index.html
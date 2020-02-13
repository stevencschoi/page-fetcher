const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

const getFilesizeInBytes = (filename) => {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats["size"]
  return fileSizeInBytes;
}

const fetcher = (url, filePath) => {
  request(url, (error, response, body) => {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        throw err;
      } else {
        const bytes = getFilesizeInBytes(filePath);
        console.log(`Downloaded and saved ${bytes} bytes to ${filePath}`);
      }
    });
  });
}

fetcher(url, filePath);

// node fetcher.js https://www.google.com/ ./index.html
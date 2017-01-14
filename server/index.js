import http from 'http';
//const fs = require('fs');
const url = require('url');
const path = require('path');

const mimeTypes =  {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
};

function router(req, res) {

  console.log(`${req.method} ${req.url}`);

  const parsedUrl = url.parse(req.url);
  let pathname = `.${parsedUrl.pathname}`;

  fs.exists(pathname, function (exist) {
    if(!exist) { //404
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    //if (fs.statSync(pathname).isDirectory()) { //index.html
      //pathname += '/index.html';
    //}

    //fs.readFile(pathname, function(err, data){
      //if(err){ //500
        //res.statusCode = 500;
        //res.end(`Error getting the file: ${err}.`);
      //} else {
        //const ext = path.parse(pathname).ext; //extension for mime type
        //res.setHeader('Content-type', mimeTypes[ext] || 'text/plain' );
        //res.end(data);
      //}
    //});
  });

}

http
  .createServer(router)
  .listen(30001);


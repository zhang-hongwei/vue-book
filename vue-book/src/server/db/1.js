let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./sliders')


function getBook(cb) {

  fs.readFile('./books.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {

      cb([]);
    } else {
      cb(JSON.parse(data));

    }
  })
}

function writeBook(data, cb) {
  fs.writeFile("./books.json", JSON.stringify(data), cb);

}

http.createServer(function (req, res) {
  
  let {query,pathname
  } = url.parse(req.url, true);

  if (pathname == '/api/sliders') {
    //console.log(sliders)
    res.end(JSON.stringify(sliders));
  } else if (pathname == '/api/hot') {

    getBook(function (data) {
      //console.log(data)
      res.end(JSON.stringify(data.reverse()))
    })
  } else if (pathname == '/api/book') {
    let method = req.method;
    let id = parseInt(query.id);
    if (method === "GET") {
      if (id) {

        getBook(function (books) {
          let book = books.find(item => item.id == id);
          res.end(JSON.stringify(book))
        })



      } else {
        getBook(function (books) {
          res.end(JSON.stringify(books));
        })
      }
    } else if (method === "PUT") {
      let str = '';
      req.on('data', function (chunk) {
        str += chunk;

      })

      req.on('end', function () {
        let book = JSON.parse(str);
        getBook(function (books) {
          books = books.map(item => {
            if (item.id == id) {
              return book;
            }

            return item;
          })
          writeBook(books, function () {
            res.end(JSON.stringify(book))
          })
        })
      })



    } else if (method === "POST") {

      let str = '';
      req.on('data', function (data) {
        str += data;
        //console.log(data)
      });

      req.on('end', function () {
        let book = JSON.parse(str);
        getBook(function (books) {
          book.id = books.length === 0 ? 1 : books[books.length - 1].id + 1
          books.push(book);

          writeBook(books, function () {
            res.end(JSON.stringify(book))
          })
        })
      })
    } else if (method === "DELETE") {
     
      getBook(function (books) {

        books = books.filter(item => item.id != id)
        writeBook(books, function () {
          res.end(JSON.stringify({}))
        })

      })
    }
  }


}).listen(8001);

const http = require('http');
const fs   = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><title>Hello World</title></head>')
    // res.write('<h1>Hello World</h1>')
    // res.end()
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            res.statusCode = 301
            res.setHeader('location', '/about')
            break;
        default:
            path += '404.html'
            res.statusCode = 404

    }
    // Send an HTML file
    fs.readFile(path , (err, data) => {
        if(err) {
            console.log(err);
            res.end()
        }else{
            res.end(data)
        }
    })
})

server.listen(5000, 'localhost', () => {
    console.log("Listing for PORT 5000");
} )
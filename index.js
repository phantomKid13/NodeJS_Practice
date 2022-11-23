const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/')
        res.end('<h1>Hello World<h1>')
    else if(req.url == '/about')
        res.end('<h1>About Page<h1>')
    else{
        res.end(`
            <h1>Error 404 </h1>
            <p> Page Not Found </p>   
        `)
    }
});

server.listen(8000)
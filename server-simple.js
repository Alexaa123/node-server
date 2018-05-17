var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req , res){
    console.log(__dirname + req.url)
    try{
        var fileContent = fs.readFileSync(__dirname + req.url,'binary' )
        res.write(fileContent, 'binary')
    }catch(e){
        res.writeHead(404, 'not found' )
    }
   
    res.end()
})

server.listen(8080)
console.log("visit http://localhost:8080")

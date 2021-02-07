const http = require('http') //requiring http protocol
const fs = require('fs') //require and initialize fs module to access physical file system

const hostname='127.0.0.1'
const port = 3000 //use port 3000 for nodejs

const indexHtml=fs.readFileSync('index.html') //Initialize index.html with fs.readFileSync to indexHTml
const contactHtml=fs.readFileSync('contact.html')
const aboutHtml=fs.readFileSync('about.html')
const pageNotFound=fs.readFileSync('pageNotFound.html')

const server = http.createServer((req, res) =>{  //we will run create server method with parameters
    if(req.url ==='/'){
        return res.end(indexHtml)
    }else if(req.url ==='/contact' || req.url ==='/CONTACT'){
        return res.end(contactHtml)
    }else if(req.url ==='/about' || req.url ==='/ABOUT'){
        return res.end(aboutHtml)
    }else{
        res.end(pageNotFound)
        res.statusCode =404
    }

})

//We will listen the server
server.listen(port, hostname, ()=>{
    console.log(`Server is running, http://${hostname}:${port}/`)
})
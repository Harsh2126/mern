const http=require('http')

const requesthandler=require('./handler')

const server=http.createServer(requesthandler)

server.listen(3001,()=>{
    console.log('Server is running on port 3001 http://localhost:3001')
})
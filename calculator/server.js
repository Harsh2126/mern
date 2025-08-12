const http=require('http')
const requestHandler=require('./app')

const server=http.createServer(requestHandler)
server.listen(3000,()=>{
    console.log('Server is running on port 3000 http://localhost:3000')
})
// const http=require('http')
const fs=require('fs')
const { useParams } = require('react-router-dom')
const requesthandler=(req,res)=>{
    console.log(req.url,req.method,req.headers)
    // res.end('Hello World')
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Submit details</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username"><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" name="gender" value="male">')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" name="gender" value="female"><br>')
       res.write('<button type="submit">Submit</button>')
       res.write('</form>')
       res.write('</body>')
        res.write('</html>')
        return res.end()

    }


   
    else if(req.url.toLowerCase()==='/create-user' && req.method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',(chunk)=>{
            const fullbody=Buffer.concat(body).toString()
            console.log(fullbody)
            
        
        const userdetails= new URLSearchParams(fullbody)
        // const bodydata={}
        // for(const [key,val] of userdetails.entries()){
        //     bodydata[key]=val

        // }
        const bodydata=Object.fromEntries(userdetails)
        
        console.log(bodydata)
    fs.writeFileSync('user.txt', JSON.stringify(bodydata))})

        fs.writeFileSync('user.txt', 'User created successfully')
        res.statusCode=302
    return res.end('<h1>User created successfully</h1>')}

        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to my page</h1>')
        res.write('<p>Thank you for submitting your details!</p>')
        res.write('</body>')
        res.write('</html>')
        return res.end()


        
}
module.exports=requesthandler

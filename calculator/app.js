const add = require('./addition')
const Sub = require('./sub')
const mul = require('./mul')
const requestHandler=(req,res)=>{
    if(req.url==='/'){
        res.write(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Welcome to the Calculator App</h1>
    <ul>
        <li><a href="/calculator">Calculate</a></li>
    </ul>

</body>
</html>
            `)
            return res.end()
    }
    else if(req.url==='/calculator'){
        res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Calculator App</h1>
    <form method="post">
        <label for="num1">Number 1:</label>
        <input type="text" id="num1" name="num1" required><br>
        <label for="num2">Number 2:</label>
        <input type="text" id="num2" name="num2" required><br>
        <button type="submit" formaction="/add">Add</button>
        <button type="submit" formaction="/sub">Subtract</button>
        <button type="submit" formaction="/mul">Multiply</button>
    </form>

</body>
</html>`)
return res.end()
    }
    else if(req.url === '/add' && req.method === 'POST') { add(req, res) }
    else if(req.url === '/sub' && req.method === 'POST') { Sub(req, res) }
    else if(req.url === '/mul' && req.method === 'POST') { mul(req, res) }
}


module.exports=requestHandler
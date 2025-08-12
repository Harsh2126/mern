const add=(req,res)=>{
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        const bodydata = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodydata);
        const bodydataObj = Object.fromEntries(params);
        const sum=Number(bodydataObj.num1 )+ Number(bodydataObj.num2);});
        // res.setHeader('Content-Type', 'text/html'
        res.write(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Calculator Result</h1>
    <p>The sum of ${bodydataObj.num1} and ${bodydataObj.num2} is ${sum}</p>
    <a href="/calculator">Go back to Calculator</a>
</body>
</html>
        `)
        return res.end();
    
}
module.exports=add
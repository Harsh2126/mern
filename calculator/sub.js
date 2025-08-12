const sub = 
 (req, res) => {
    const body = [];
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
        const bodydata = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodydata);
        const bodydataObj = Object.fromEntries(params);
        const difference = Number(bodydataObj.num1) - Number(bodydataObj.num2);

        res.write(`<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator Result</h1>
                <p>The difference of ${bodydataObj.num1} and ${bodydataObj.num2} is ${difference}</p>
                <a href="/calculator">Go back to Calculator</a>
            </body>
        </html>`);
        res.end();
    });
}

module.exports = sub;
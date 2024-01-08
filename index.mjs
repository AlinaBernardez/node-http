import * as http from 'http';
import { data } from './data.mjs';

let template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP server</title>
        <style>
            html {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: sans-serif;
            }
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 50%;
            }
        </style>
    </head>
    <body>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p style="text-align:left;">${data.text}</p>
    </body>
    </html>
`

const server = http.createServer((req, res) => {
    res.end(template)
});

server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})
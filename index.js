const http = require("http")
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`<h1>"Sending Node by HTML and JSON Formate"</h1>`)
        res.write("I am in home page")
        res.write(`<h2>for HTML:- /html</h2>`)
        res.write(`<h2>for JSON:- /json</h2>`)
        res.end();
    }
    else if (req.method === "GET" && req.url === '/html'){
        res.write(`<h1>"Node by :- HTML"</h1>`)
        res.write("Node: It is the open source environment that can can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.")
        res.end()
    }
    else if(req.method === "GET" && req.url=== '/json'){
        res.write(`<h1>"Node by :- JSON"</h1>`)
        res.write(JSON.stringify("Node: It is the open source environment that can can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."))
        res.end()
    }

})
server.listen(8080);

// doing routing


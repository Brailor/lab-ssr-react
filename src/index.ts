import http from "node:http"
import fs from "node:fs/promises"
import path from "node:path"
import {htmlstring} from './components/component'

(async() => {
    const file = (await fs.readFile(path.resolve("index.html"))).toString()
    const match = file.replace(new RegExp('{{REACT_SSR}}'), htmlstring)
    const server = http.createServer()

    server.on('request', async (req, res) =>  {
        const url = req.url
        const isStaticFile = (new RegExp('.*\.(js|html)')).test(url!)
        
        console.log(url ,isStaticFile)
        console.log({htmlstring})
        if (isStaticFile) {
            res.writeHead(200, {'Content-Type': 'text'})

            const file = await fs.readFile(`.${path.resolve(url!)}`)
            res.end(file)
            
            return
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(match)
        res.end()
    })
    server.listen(9000)
})()

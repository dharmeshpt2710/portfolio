import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// 1. read the client-built HTML (already has correct CSS/JS links + all head tags)
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// 2. load the server bundle and render the app to an HTML string
const { render } = await import('./dist/server/entry-server.js')
const appHtml = render()

// 3. inject the rendered HTML into the placeholder and overwrite dist/index.html
const html = template.replace('<!--app-html-->', appHtml)
fs.writeFileSync(toAbsolute('dist/index.html'), html)
console.log('Pre-rendered: dist/index.html')

// 4. remove the temporary server bundle so it is not deployed
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })

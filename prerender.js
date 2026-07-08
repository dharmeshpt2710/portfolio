import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// 1. read the client-built HTML (already has correct CSS/JS links + all head tags)
let template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// 2. inline the built stylesheet so the browser doesn't need an extra
//    render-blocking request to fetch it (page is fully static anyway)
let cssAssetPath
template = template.replace(
  /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/,
  (match, href) => {
    cssAssetPath = href.match(/assets\/.+\.css$/)[0]
    const css = fs.readFileSync(toAbsolute(path.join('dist', cssAssetPath)), 'utf-8')
    return `<style>${css}</style>`
  }
)

// 3. load the server bundle and render the app to an HTML string
const { render } = await import('./dist/server/entry-server.js')
const appHtml = render()

// 4. inject the rendered HTML into the placeholder and overwrite dist/index.html
const html = template.replace('<!--app-html-->', appHtml)
fs.writeFileSync(toAbsolute('dist/index.html'), html)
console.log('Pre-rendered: dist/index.html')

// 5. remove the temporary server bundle so it is not deployed
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })

// 6. remove the now-unreferenced CSS file since it was inlined into the HTML
if (cssAssetPath) {
  fs.rmSync(toAbsolute(path.join('dist', cssAssetPath)), { force: true })
}

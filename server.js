const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

// Serve static files for the UI
app.use(express.static(path.join(__dirname)))

// Proxy API requests to avoid browser CORS restrictions during development
app.use('/api', createProxyMiddleware({
  target: 'https://vbank.open.bankingapi.ru',
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/api': ''
  },
  onProxyRes(proxyRes) {
    // Ensure CORS headers are present in the proxied response for the browser
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  }
}))

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`)
})

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
  secure: false,
  pathRewrite: {
    '^/api': ''
  },
  onProxyRes(proxyRes, req, res) {
    // Ensure CORS headers are present in the proxied response for the browser
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id'
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    req.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id")
    console.log(proxyRes.headers)
  }
}))

app.use('/aapi', createProxyMiddleware({
  target: 'https://abank.open.bankingapi.ru',
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/aapi': ''
  },
  onProxyRes(proxyRes, req, res) {
    // Ensure CORS headers are present in the proxied response for the browser
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id'
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    req.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id")
    console.log(proxyRes.headers)
  }
}))

app.use('/sapi', createProxyMiddleware({
  target: 'https://sbank.open.bankingapi.ru',
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/sapi': ''
  },
  onProxyRes(proxyRes, req, res) {
    // Ensure CORS headers are present in the proxied response for the browser
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id'
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    req.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requesting-Bank, X-Consent-Id, X-Product-Agreement-Consent-Id")
    console.log(proxyRes.headers)
  }
}))

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`)
})

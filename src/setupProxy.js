// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
app.use(
'/api/create',
createProxyMiddleware({
target: 'http://175.41.241.68:8080',
changeOrigin: true,
})
)
app.use(
'/api/update',
createProxyMiddleware({
target: 'http://175.41.241.68:8080',
changeOrigin: true,
})
)
app.use(
    '/api/delete',
    createProxyMiddleware({
    target: 'http://175.41.241.68:8080',
    changeOrigin: true,
    })
    )
app.use(
'/api/select',
createProxyMiddleware({
target: 'http://175.41.241.68:8081',
changeOrigin: true,
})
)
}
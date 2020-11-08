const { createProxyMiddleware } = require('http-proxy-middleware');

// whenever we get a request to one of these routes, react redirects the request to the backend server
module.exports = function(app) {
    app.use(
        '/auth/*',
        createProxyMiddleware({ target: 'http://localhost:5000/',
        changeOrigin: true }));
    app.use(
        '/api/*',
        createProxyMiddleware({target: 'http://localhost:5000/',
        changeOrigin: true }));
}
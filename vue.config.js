module.exports = {
    // 选项
    publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}
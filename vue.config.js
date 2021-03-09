// const path = require('path')

// function resolve(dir) {
//     return path.join(__dirname, '..', dir)
// }

module.exports = {
    chainWebpack: (config) => {
        config.optimization.minimize(true);
        // 配置
        // 配置别名
        // config.resolve.alias
        //     .set('@', resolve('@'))
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
               @import "@/assets/css/variable.scss"; 
               @import "@/assets/css/common.scss";
               @import "@/assets/css/mixin.scss";
              `
            }
        }
    }
}

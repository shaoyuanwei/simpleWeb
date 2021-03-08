module.exports = {
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
    },
}
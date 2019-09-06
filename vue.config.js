module.exports={
    devServer:{
         proxy:{
             '/api':{
                 target:'http://118.89.234.135:7001',   //目标路径

                 changeOrigin:true, //是否跨域

                    pathRewrite:{
                        "^/api": ''
                    }
             }
         }
    }
}
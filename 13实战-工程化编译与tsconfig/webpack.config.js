module.exports={
    mode: "development",
    entry: './app.ts',
    output: {
        path: __dirname+"/dist",
        filename: '[name].js'
    },

    module: {
        rules:[
            {
                test:/\.tsx?$/,
                use: "ts-loader"
            }
        ]
    }
}
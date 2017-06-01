var webpack=require('webpack');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports={
	devtool:'eval-source-map',
	entry:['webpack/hot/dev-server',__dirname+'/app/main.js'],
	output:{
		path:__dirname+'/build',
		filename:'bundle.js'
	},
	module:{
		loaders:[
           {
           	test:/\.(js|jsx)$/,
           	exclude:/node_modules/,
           	loader:'babel'
           },
           {
           	test:/\.css$/,
           	loader:ExtractTextPlugin.extract("style-loader","css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]")
           },
           {
           	test:/\.(png|jpg)$/,
           	loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
           },
           {
           	test:/\.json$/,
           	loader:'json-loader'
           }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('styles.css')
	],
	devServer:{
		contentBase:'./build',
		colors:true,
		historyApiFallback:true,
		inline:true,
		port:8082,
		process:true
	}
}
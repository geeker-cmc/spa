var webpack=require('webpack');
var ExtractTextPlugin=require('extract-text-webpack-plugin');


module.exports={
	devtool:false,
	entry:{
		bundle:__dirname+'/app/main.js',
		vendor:['react','react-dom','react-router','classnames']
	},
	output:{
		path:__dirname+'/build',
		filename:'[name].js'
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
				loader:ExtractTextPlugin.extract('style-loader','css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]')
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			},
			{
				test:/\.json$/,
				loader:'jsom-loader'
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names:['vendor','mainfest']
		})
	]
}
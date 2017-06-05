import React,{Component} from 'react'
import BottomTab from './BottomTab'
import style from '../css/home.css'
import productsData from '../data/productsData.json'
import {Link} from 'react-router'

class HomeTop extends Component{
	render(){
		return (
			<div data-maxwidth className={style.homeTop}>
				今日推荐
			</div>

			)
	}
}
class RecommendBox extends Component{
	render(){
		return <div className={style.recommendBox}>{this.props.children}</div>
	}
}
class RecommendItem extends Component{
	render(){
		return (
			<div className={style.recommendItem}>
				<div className={style.recommendImgBox}>
					<img className={style.recommendImg} src={require('../images/covers/'+this.props.cover)} />
				</div>
				<div className={style.authorRow}>
					<span className={style.author}>{this.props.author}</span>
					{' . '}
					<span className={style.date}>{this.props.date}</span>
				</div>
				<div className={style.title}>{this.props.title}</div>
				<div className={style.likesRow}>
					<span className={style.likes}>
						{this.props.likes>999?((this.props.likes/1000).toFixed(1)+'k'):this.props.likes}
					</span>
				</div>
			</div>

			)
	}
}

class Home extends Component{
	renderRecommendBox(data){
		return data.map((item,index)=><RecommendItem 
		            key={item.id} 
                    id={item.id} 
                    cover={item.cover} 
                    author={item.author} 
                    date={item.date} 
                    title={item.title} 
                    likes={item.likes}/>)
	}
	render(){
		return (
			<div className={style.home}>
				<HomeTop />
				<RecommendBox>
					{this.renderRecommendBox(productsData)}
				</RecommendBox>
				<BottomTab />
			</div>
			)
	}
}

export default Home;
import React,{Component} from 'react'
import BottomTab from './BottomTab'
import style from '../css/home.css'


class HomeTop extends Component{
	render(){
		return (
			<div data-maxwidth className={style.homeTop}>
				今日推荐
			</div>

			)
	}
}

class Home extends Component{
	render(){
		return (
			<div className={style.home}>
			<HomeTop />
			<BottomTab />
			</div>
			)
	}
}

export default Home;
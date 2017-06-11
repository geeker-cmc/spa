import React,{Component} from 'react'
import BottomTab from './BottomTab'
import style from '../css/personal.css'
import {Link} from 'react-router'
import SettingItem from './SettingItem'

class HeaderInfo extends Component{
	render(){
		return(
		<div className={style.headerinfo}>
			<p className={style.name}>{this.props.name}</p>
			<p className={style.desc}>
				{`买到${this.props.goods}个好物`}
				{' . '}
				{`${this.props.likes}喜欢`}
			</p>
		</div>
		)
	}
}
class HeaderBox extends Component{
	render(){
		return (
			<div className={style.headBox}>
				<div className={style.headImg}></div>
				<HeaderInfo name='Yiming' goods='0' subscription='7' likes='6' />				
			</div>
			)
	}
}
class SettingRoute extends Component{
	render(){
		return (
			<Link to={`/personal/${this.props.name}`} >
				<SettingItem name={this.props.name} title={this.props.title} />
			</Link>
			)
	}
}
class SettingBox extends Component{
	render(){
		return (
			<div className={style.settingBox}>
				<div className={style.settingArea}>
					<SettingRoute name='order' title='我的订单' />
					<SettingRoute name='subscription' title='我的订单' />
					<SettingRoute name='like' title='我的喜欢' />
					<SettingRoute name='coupon' title='优惠券' />
				</div>
				<div className={style.settingArea}>
					<SettingRoute name='help' title='客服与帮助' />
					<SettingRoute name='setting' title='设置' />
				</div>
			</div>
			)
	}
}
export default class Personal extends Component{
	render(){
		return (
		 <div className={style.personal}>
		 	<HeaderBox />
		 	<SettingBox />
			<BottomTab />
		</div>
			)
	}
}
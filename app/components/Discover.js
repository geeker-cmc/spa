import React,{Component} from 'react'
import BottomTab from './BottomTab'
import style from '../css/discover.css'


let DiscoverTop=()=><div date-maxwidth className={style.discoverTop}>发现</div>

export default class Discover extends Component{
	render(){
		return (
			<div className={style.discover}>
				<DiscoverTop />
				<BottomTab />
			</div>
			)
	}
}
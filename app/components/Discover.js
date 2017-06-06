import React,{Component} from 'react'
import BottomTab from './BottomTab'
import {Link} from 'react-router'
import style from '../css/discover.css'


let DiscoverTop=()=><div date-maxwidth className={style.discoverTop}>发现</div>


class DiscoverTopRow extends Component{
	render(){
		return (
			<div className={style.discoverTopRow}>
				<Link to='/ranking' className={style.discoverTopItem}>
					<div>本周好物</div>					
				</Link>
				<Link to='/buyers' className={style.discoverTopItem}>
					<div>所有买手</div>
				</Link>
			</div>
			)
	}
}

class DiscoverSection extends Component{
	render(){
		const name=encodeURIComponent(this.props.name);
		return (
			<Link to={`/topic/${name}`}>
				<div className={style.discoverSection}>
					<div className={style.rightIcon}></div>
					<h3>{this.props.name}</h3>
					<p>{`${this.props.number}篇推荐`}</p>
					<div className={style.sectionImgBox}>
						<div className={style.sectionImg}>
							<img src={require(`../images/discovers/${this.props.imgs[0]}.jpg`)} />
						</div>
						<div className={style.sectionImg}>
							<img src={require(`../images/discovers/${this.props.imgs[1]}.jpg`)} />
						</div>
						<div className={style.sectionImg}>
							<img src={require(`../images/discovers/${this.props.imgs[2]}.jpg`)} />
						</div>
					</div>
				</div>
			</Link>

			)
	}
}
class DiscoverBannerImg extends Component{
	render(){
		return (
			  <div
			     className={style.discoverBannerImg}
			     data-index={this.props.index}
			     style={{left:(this.props.index*84-34)+'%'}}
			  >
			  	
			  </div>
			)
	}
}
class DiscoverBanner extends Component{
	render(){
		return (
			<div className={style.discoverBanner}>
				<Link to='/detail/p003'><DiscoverBannerImg index='0' /></Link>
				<Link to='/detail/p005'><DiscoverBannerImg index='1' /></Link>
				<Link to='/detail/p003'><DiscoverBannerImg index='2' /></Link>
				<Link to='/detail/p005'><DiscoverBannerImg index='3' /></Link>
				<Link to='/detail/p003'><DiscoverBannerImg index='4' /></Link>
			</div>
			)
	}
}

class RecommendItem extends Component{
	render(){
		return (
				<Link to={`/buyer/${this.props.id}`} className={style.recommendItem}>
					<div className={style.recommendItemImg} style={{backgroundColor:this.props.img}}></div>
					<div className={style.recommendItemName}>{this.props.name}</div>
					<div className={style.recommendItemDesc}>{this.props.desc}</div>
					<FollowBtn following={true} />
				</Link>
			)
	}
}

class RecommendSection extends Component{
	render(){
		return (
			<div className={style.recommendSection}>
				<div className={style.rightIcon}></div>
				<h3>本周推荐</h3>
				<p>3个推荐买手</p>
				<div className={style.recommendItemBox}>
					<RecommendItem id='b008' name='八号丸子' desc='给你带来网红零食的一手报告' img='#ff6' />
					<RecommendItem id='b002' name='有怪兽' desc='脑洞少女的次元穿梭日志' img='#fcc' />
					<RecommendItem id='b001' name='盐' desc='一个盐系男子的日常' img='#ccf' />
				</div>
			</div>
			)
	}
}
class DiscoverBox extends Component{
	render(){
		return (
			<div className={style.discover}>
				<DiscoverTopRow />
				<DiscoverSection name='火球精选' number='34' imgs={[1,2,3]} />
				<DiscoverBanner />
				<DiscoverSection name='吃点好的' number='34' imgs={[4,5,6]} />
				<DiscoverSection name='品质生活' number='18' imgs={[7,8,9]} />
				<DiscoverSection name='新奇酷玩' number='25' imgs={[10,11,12]} />
				<DiscoverSection name='型格指南' number='34' imgs={[2,3,13]} />
				<DiscoverSection name='穿衣搭配' number='26' imgs={[14,15,16]} />
				<DiscoverSection name='礼物指南' number='13' imgs={[17,18,19]} />
			</div>
			)
	}
}
export default class Discover extends Component{
	render(){
		return (
			<div className={style.discover}>
				<DiscoverTop />
				<DiscoverBox />
				<BottomTab />
			</div>
			)
	}
}

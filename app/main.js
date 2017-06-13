import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Discover from './components/Discover'
import PersonalBox from './components/PersonalBox'
import Personal from './components/Personal'
import Detail from './components/Detail'

ReactDOM.render(
	(
		<Router history={hashHistory}>
			<Route path='/' component={Home} />
			<Route path='/Home' component={Home} />
			<Route path='/discover' component={Discover} />
			<Route path='/personal' component={PersonalBox}>
				<IndexRoute component={Personal} />
			</Route>
			<Route path='/detail/:id' component={Detail} />
		</Router>
		),document.getElementById('app')
	)
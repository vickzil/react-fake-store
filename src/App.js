import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'

class App extends Component {
  	render() {
    	return (
      		<BrowserRouter>
        		<div className="App">
          			<Navbar />
          			<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/cart" component={Cart} />
          			</Switch>
					<Footer/>
        		</div>
      		</BrowserRouter>
    	);
  	}
  
}

export default App;

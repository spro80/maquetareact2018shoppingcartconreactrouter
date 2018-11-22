import React, { Component } from 'react';

import { Route } from 'react-router-dom'

//Components
import { Information, Header, HorizontalMenu, Contenido, Footer, InformationWelcome   } from './components'


import { Grid, Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';


//Styles
import './App.css';
import './styles.css'


//import logo from './logo.svg';
//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';



class App extends Component {
	render() {
		return (
    
			<div className="App">

			<Route path="/" component={HorizontalMenu} />
			<Route path="/" component={Header} />
			
			<Route exact path="/productos" component={Contenido} />
			<Route exact path="/promociones" component={Contenido} />
			<Route exact path="/mispedidos" component={Contenido} />
			<Route exact path="/contacto" component={Contenido} />
			<Route exact path="/vercarrito" component={Contenido} />
			
			<Route path="/" component={Footer} />

			</div>
      
		);
	}
}

export default App;





/*
class Header extends Component {

	render() {
		return (
		
			<header className="headerContainer">
				<h1 className="headerContainer_h1"> HEADER! </h1>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		);
	}
}
*/

/*
class HorizontalMenu extends Component {

	render() {
	
		return (
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
					
						<h1> !!!!!!!!!!!!!!!!Menu!!!!!!!!!!!!!!!!!!!! </h1> 
				
			
			  </Col>

			</Row>			
		
		);
	
	}

}*/

/*
class Contenido extends Component {

	render() {
	
		return (
		
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
				<div className="contenidoContainer_p">
					<h1> Contenido del Sistema! </h1> 
				</div>
			
			  </Col>

			</Row>
			
		
		);
	
	}

}
*/

/*
class Footer extends Component {

	render() {
	
		return (
		
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
				<div className="footerContainer"> 
					
					Todos Los Derechos Reservados!!!
					
				</div>
			
			  </Col>

			</Row>
			
		
		)
	
	}

}
*/

/*				<HorizontalMenu>
				</HorizontalMenu>
				
				<Header>
				</Header>

				<Contenido>
				</Contenido>

				<Footer>
				</Footer>

							<Route path="/" component={HorizontalMenu} />
			<Route path="/" component={Header} />
			<Route path="/" component={Contenido} />
			<Route path="/" component={Footer} />
*/
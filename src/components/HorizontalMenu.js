import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';


export default class HorizontalMenu extends React.Component{

	render(){
	
		return(

			<Row>
				<Col xs={1} sm={3} md={6} lg={12}>
					
					<div>
						<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
							<div class="container">
								<a class="navbar-brand" href="#">www.todobelleza.cl</a>
								
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
								  <span class="navbar-toggler-icon"></span>
								</button>
								
								<div class="collapse navbar-collapse" id="navbarResponsive">
									<ul class="navbar-nav ml-auto">
										<li class="nav-item active">
											<a class="nav-link" href="#">Inicio
											<span class="sr-only">(current)</span>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Productos</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Promociones</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Mis Pedidos</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Contacto</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Ver Carrito ( 0 ) </a>
										</li>
										/*<li class="nav-item">
											<a class="nav-link" href="#">Administración</a>
										</li>*/
									</ul>
								</div>
							</div>
						</nav>
					</div>

				</Col>
			</Row>
		)
	
	}
	
}


/*
<ul class="sidenav">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
*/

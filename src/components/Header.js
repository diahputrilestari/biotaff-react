import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-dom";
import logo from '../images/logo.png';

export default class Header extends Component {
    render(){
        return (
        	<div>
			<div className="spinner-wrapper">
		        <div className="spinner">
		            <div className="bounce1"></div>
		            <div className="bounce2"></div>
		            <div className="bounce3"></div>
		        </div>
		    </div>
		    <div className="nav navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        		<a className="navbar-brand logo-image" href="index.html"><img src={logo} alt="alternative"/></a>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-awesome fas fa-bars"></span>
		            <span className="navbar-toggler-awesome fas fa-times"></span>
		            {/*<FontAwesomeIcon icon="check-square" />*/}
		        </button>
		        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
		            <ul className="navbar-nav ml-auto">
		                <li className="nav-item">
		                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
		                </li>
		                <li className="nav-item dropdown">
		                    <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
		                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		                        <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">Terms Conditions</span></a>
		                        <div className="dropdown-items-divide-hr"></div>
		                        <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">Privacy Policy</span></a>
		                    </div>
		                </li>

		                <li className="nav-item">
		                    <a className="nav-link" href="contact.html">Contact</a>
		                </li>
		            </ul>
		            <span className="nav-item social-icons">
		                <span className="fa-stack">
		                    <a href="#your-link">
		                        <i className="fas fa-circle fa-stack-2x facebook"></i>
		                        <i className="fab fa-facebook-f fa-stack-1x"></i>
		                    </a>
		                </span>
		                <span className="fa-stack">
		                    <a href="#your-link">
		                        <i className="fas fa-circle fa-stack-2x twitter"></i>
		                        <i className="fab fa-twitter fa-stack-1x"></i>
		                    </a>
		                </span>
		            </span>
		        </div>
		    	</div>
		    </div>
        	)
        }
}
import React from 'react';
import logo from './images/logo.png';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import TNC from './TNC';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
        <div className="spinner-wrapper">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
          </div>
          <div className="nav navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <a className="navbar-brand logo-image" href="/"><img src={logo} alt="alternative"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-awesome fas fa-bars"></span>
                <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/*<a className="dropdown-item"><span className="item-text"><Link to={'/termsconditions'} className="nav-link">Terms Conditions</Link></span></a>*/}
                            <Link to={'/TNC'} className="nav-link"  target="_blank"><button className="TNC_button absolute">Term of Use</button></Link>
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
                            <i className="fa fa-facebook-f fa-stack-1x"></i>
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
        <Route path='/' component={Home} />
        <Route path='/TNC' component={TNC} />
      </Router>
  );
}

export default App;

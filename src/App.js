/*Modules*/
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


/*Components*/
import NavBar from './components/NavBar.jsx';
import MainMenu from './components/MainMenu.jsx';
import MagicShop from './components/MagicShop.jsx';
import Blacksmith from './components/Blacksmith.jsx';
import Inn from './components/Inn.jsx';
import Arena from './components/Arena.jsx';
import HeroPanel from './components/HeroPanel.jsx';
import Footer from './components/Footer.jsx';

/*css*/
// import logo from './logo.svg';
import './App.css';
import './minireset.min.css';

class App extends Component {
  render() {
    return (
              <Router>        
                <div className="main-container">
                  <NavBar/>
                  <Route exact path="/" component={MainMenu} />
                  <Route path="/panel" component={HeroPanel} /> 
                  <Route path="/magic_shop" component={MagicShop} />
                  <Route path="/blacksmith" component={Blacksmith} />         
                  <Route path="/inn" component={Inn} />
                  <Route path="/arena" component={Arena} />
                  <Footer/>
                </div>
              </Router>
    );
  }
}

export default App;

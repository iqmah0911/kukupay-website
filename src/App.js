import React from 'react';
import Home from './pages/home';
import Product from './pages/product';
import  Contact from './pages/contact';
import About from './pages/about';

import "./styles.css";
import "./responsive.css";
import "./Navigation-with-Button.css";
import "./Navigation-Clean.css";
import "./Footer-Dark.css";
import "./Contact-Form-Clean.css";
import "./Clients.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App () {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
      </Switch>

    </Router>
    
    </>
  )
}
export default App;

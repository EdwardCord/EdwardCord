import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//gets components from Components file
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homePage';
import Blog from './Components/pages/Blog';
import Contact from './Components/pages/contact';

//gets posts from collection
//import Posts from './Post';

//includes css file
import './Assets/css/default.min.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/Contact' component={Contact} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

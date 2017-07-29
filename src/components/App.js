import React, { Component, PropTypes } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>Ecommerce</header>
        {this.props.children}
        <footer>Footer</footer>
      </div>  
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
}

export default App;

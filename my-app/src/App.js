import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from "./camera.js";
import ImageUpload from "./imageUpload.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        </header>
        <Webcam />
        <ImageUpload />
        
      </div>
    );
  }
}

export default App;

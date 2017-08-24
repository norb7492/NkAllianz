import React, { Component } from 'react';
import './MainPage.scss';
import MainRouter from './../MainRouter/MainRouter';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss';
//Componentes
import NavBar from './../NavBar/NavBar';

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
      <NavBar/>
        <h1>Hello Nk Allianz</h1>
        <MainRouter/>
      </div>
    );
  }
}

export default MainPage;

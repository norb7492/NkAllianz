import React, { Component } from 'react';
import './MainPage.scss';
import MainRouter from './../MainRouter/MainRouter';

//Componentes
import NavBar from './../NavBar/NavBar';

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <h1>Hello Nk Allianz</h1>
        <NavBar/>
        <MainRouter/>
      </div>
    );
  }
}

export default MainPage;

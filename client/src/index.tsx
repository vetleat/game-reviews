import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import { HashRouter, Route } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
  Col,
  Carousel,
} from 'react-bootstrap';
import {
  AllGames,
  GetGame,
  MainCarousel,
  MainFooter,
  Navigation,
  SearchGame,
  AddGame,
  SubmitGame,
} from './app-components';
// Import components

class MainPage extends Component {
  render() {
    return (
      <>
        <h1>Denne teksten va jævla cheesy</h1>
      </>
    );
  }
}

class SearchPage extends Component {
  render() {
    return (
      <>
        <div>Search page goes here!</div>
      </>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <div id="main-container">
      <div id="content-wrapper">
        {/* <MainCarousel /> */}
        <Navigation />
        <MainCarousel />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/games" component={AllGames} />
        <Route exact path="/games/:offset" component={AllGames} /> {/* for pagination */}
        <Route exact path="/game/:slug" component={GetGame} />
        <Route exact path="/addgames/" component={AddGame} />
        <Route exact path="/submitgame/" component={SubmitGame} />
        <Route exact path="/search/" component={SearchGame} />
        <Route exact path="/search/:query/" component={SearchGame} />
        <Route exact path="/search/:query/:offset" component={SearchGame} />
        {/* <GameCarousel />  */}
        <MainFooter />
      </div>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

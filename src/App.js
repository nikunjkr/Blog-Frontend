import React, { Component } from 'react';

/*imorted Route component and BrowserRouter*/

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleList';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            {/* <Route path="/article" component={ArticlePage} exact/>
          <Route path="/article-list" component={ArticleList} exact /> */}
            <Route path="/about" component={AboutPage} exact />

          </div>

        </div >
      </Router>

    );
  }
}

export default App;

import React, { Component } from 'react';

/*imorted Route component and BrowserRouter*/

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
            <Route path="/articles-list" component={ArticleListPage} exact />
            <Route path="/about/" component={AboutPage} exact />
            <Route component={ErrorPage}/>
            

          </div>

        </div >
      </Router>

    );
  }
}

export default App;

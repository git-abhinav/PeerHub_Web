
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';
import File from './components/home/File';
import store from './store';
import HomePage from './components/home/HomePage';
import Upload from './components/home/Upload';
import Download from './components/home/Download';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/file/:id" component={File} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/Upload" component={Upload} />
            <Route exact path="/Download" component={Download}/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
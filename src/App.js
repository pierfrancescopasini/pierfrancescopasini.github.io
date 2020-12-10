import './App.css';
import React from 'react';
import BasicApp from './components/BasicApp.js';
import AboutPage from './components/AboutPage.js';
import VideosPage from './components/VideosPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import EventsPage from './components/EventsPage.js'

import {
  Route,
} from "react-router-dom";


class App extends React.Component {
  reload = () => {
    window.location.reload();
  }

componentDidMount = () => {
  window.addEventListener('resize', (e) => {
    e.preventDefault();
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      //setTimeout(() => {this.setState({});}, 20);
    }else{
      this.setState({});
    }
  });
  window.addEventListener('orientationchange', (e) => {
    e.preventDefault();
    this.reload();
  });
}

  render(){
      return (
        <div>
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/videos' component={VideosPage} />
                <Route exact path='/projects' component={ProjectsPage} />
                <Route exact path='/events' component={EventsPage} />
                <Route exact path='/' component={BasicApp} />
        </div>
      );
    }
}

export default App;

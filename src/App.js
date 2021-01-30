import './App.css';
import React from 'react';
import BasicApp from './components/BasicApp.js';
import AboutPage from './components/AboutPage.js';
import VideosPage from './components/VideosPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import EventsPage from './components/EventsPage.js';
import PartnersPage from './components/PartnersPage.js';

import {
  Route,
} from "react-router-dom";


class App extends React.Component {
  reload = () => {
    window.location.reload();
  }

componentDidMount = () => {
}

  render(){
      return (
        <div>
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/videos' component={VideosPage} />
                <Route exact path='/projects' component={ProjectsPage} />
                <Route exact path='/events' component={EventsPage} />
                <Route exact path='/partners' component={PartnersPage} />
                <Route exact path='/' component={BasicApp} />
        </div>
      );
    }
}

export default App;

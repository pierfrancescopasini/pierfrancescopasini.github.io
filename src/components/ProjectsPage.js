import React from 'react';
import SpotifyEmbed from './SpotifyEmbed.js'
import ProgressBar from './ProgressBar.js'
import { history } from 'react-router-dom'

class ProjectsPage extends React.Component {
    state = {
        styleSpotify: { display: 'none' },
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        setTimeout(() => {        
            this.setState({ styleSpotify: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }

    render() {
        let dim = window.outerWidth / 4;        
        return (
            <div>
                <h1>Projects</h1>
                <div style={this.state.styleSpotify}><SpotifyEmbed></SpotifyEmbed></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default ProjectsPage;
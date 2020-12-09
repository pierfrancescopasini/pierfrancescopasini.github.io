import React from 'react';
import SpotifyEmbed from './SpotifyEmbed.js'
import ProgressBar from './ProgressBar.js'

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
            this.setState({ styleSpotify: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }

    render() {
        let dim = window.outerWidth / 4;        
        return (
            <div>
                <h1>Spotify</h1>
                <div style={this.state.styleSpotify}><SpotifyEmbed nTracks={100} nAlbums={100} displayAlbums={true}></SpotifyEmbed></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default ProjectsPage;
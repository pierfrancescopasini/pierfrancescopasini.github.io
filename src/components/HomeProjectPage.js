import React from 'react';
import SpotifyEmbed from './SpotifyEmbed.js'
import ProgressBar from './ProgressBar.js'

class HomeProjectPage extends React.Component {
    state = {
        styleSpotify: { display: 'none'},
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        setTimeout(() => {        
            this.setState({ styleSpotify: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
        window.addEventListener('resize', () => {setTimeout(() => {this.setState({})}, 200)});
    }

    render() {
        let dim = window.outerWidth / 4;    
        let nTracks = 3;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){nTracks = 2}    
        return (
            <div style={{}}>
                <h1 style={{color:'#282c34'}}>Spotify</h1>
                <div style={this.state.styleSpotify}><SpotifyEmbed nTracks={nTracks} nAlbums={0} displayAlbums={false}></SpotifyEmbed></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default HomeProjectPage;
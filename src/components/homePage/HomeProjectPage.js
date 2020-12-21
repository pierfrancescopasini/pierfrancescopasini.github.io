import React from 'react';
import SpotifyEmbed from '../SpotifyEmbed.js'
import ProgressBar from '../ProgressBar.js'

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
    }

    render() {
        let dim = window.outerWidth / 4;    
        let nTracks = 3;
        let mob=false;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            nTracks = 2; 
            mob=true
        }   
        if (/iPad/i.test(navigator.userAgent)){
            if (window.matchMedia("(orientation: portrait)").matches) {
                nTracks = 2;
                mob=true
            } else {
                nTracks = 3;
            }        
        } 
        return (
            <div style={{}}>
                <h1 style={mob? {} : {float:'left', marginLeft:'56px'}}>Latest Releases</h1>
                {mob? <div></div> : <div style={{height:'100px'}}></div>}
                <div style={this.state.styleSpotify}><SpotifyEmbed nTracks={nTracks} nAlbums={0} displayAlbums={false}></SpotifyEmbed></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default HomeProjectPage;
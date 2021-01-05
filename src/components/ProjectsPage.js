import React from 'react';
import SpotifyEmbed from './SpotifyEmbed.js'
import ProgressBar from './ProgressBar.js'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';


class ProjectsPage extends React.Component {
    state = {
        styleSpotify: { display: 'none' },
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
        setTimeout(() => {        
            this.setState({ styleSpotify: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ styleSpotify: { display: 'block' }, styleLoad: { display: 'none' } })
        });
        window.addEventListener('resize', () => {})
    }

    render() {
        document.body.style.backgroundColor = '#000000'
        let dim = window.outerWidth / 4;        
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            mob = true;
		}
        return (
            <div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 0.4}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
                <div style={this.state.styleSpotify}>
                <h1>Music</h1>
                {mob? <div></div> : <div style={{height:'28px'}}></div>}
                {
                        !mob && 
                        <Link to={'/'} className='headerIcon'><img onClick={() => {
                            
                        }} className='imghead' height='56px'  src={iconTransparent}></img></Link>
                }
                <div><SpotifyEmbed nTracks={100} nAlbums={100} displayAlbums={true}></SpotifyEmbed></div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
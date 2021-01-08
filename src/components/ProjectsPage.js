import React from 'react';
import SpotifyEmbed from './SpotifyEmbed.js'
import ProgressBar from './ProgressBar.js'
import background from './resources/releaseImage.png'
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
        let back = `url(${background})`;

        if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            mob = true;
        }
        
        return (
            <div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 0.4}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
                <div style={this.state.styleSpotify}>
                <div style={mob ? {backgroundSize:window.innerWidth, backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/2.6, marginTop:'0px', backgroundPosition:'center top'}: {backgroundSize:'100%', backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/1.3, marginTop:'0px', backgroundPosition:'center top'}}>
                <Link to={'/'} className='headerIcon'><img className='imghead' height='50px'  src={iconTransparent}></img></Link>
                    <div style={mob ? { float: 'left', marginTop: window.innerHeight/3.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '25px'} : { float: 'left', marginTop: window.innerHeight/1.6, marginLeft: '20px', color: '#F5F5F5', fontSize: '50px'} }>
                            RELEASES
                    </div>
                </div>
                <div style={{marginTop:'5%'}}><SpotifyEmbed nTracks={100} nAlbums={100} displayAlbums={true}></SpotifyEmbed></div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
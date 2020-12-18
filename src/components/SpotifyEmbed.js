import React from 'react';
import { spotifyPic } from './imports/importLinkSpotify'
import cover_images from "./imports/importPicSpotify";

class SpotifyEmbed extends React.Component {
    state = {
        styleCards: { display: 'flex', flexDirection: 'row', left: 0, right: 0 },
    }

    componentDidMount = () => {
        window.addEventListener('orientationchange', () => {this.setState({})})
    }

    render() {
        console.log(this.props)
        let width, height;
        width = "" + window.innerWidth / 4.5;
        height = "" + window.innerHeight / 3;
        let mob = false;
        if(/iPad/i.test(navigator.userAgent)){
            if (window.matchMedia("(orientation: portrait)").matches) {
                height = "" + window.innerHeight / 2.9;
                width = "" + window.innerHeight / 2.8;
            } else {
                width = "" + window.innerWidth / 3.5;
                height = "" + window.innerHeight / 2;
            }
        }
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                height = "" + window.innerHeight / 2.8;
                width = "" + window.innerHeight / 2.8;
            } else {
                width = "" + window.innerWidth / 2.6;
                height = "" + window.innerHeight / 1.5;
            }
            mob = true
        }

        spotifyPic.sort((a,b) => {
            return parseInt(b.img.replace(/[^0-9]/g,''))-parseInt(a.img.replace(/[^0-9]/g,''));
        })

        return (
            <div style={{ width: '100%', margin:'auto'}}>
                    <div style={{ width: '100%', margin: 'auto' }}>
                        <div className="spotifyGrid" style={{ width: '65%', margin: 'auto' }}>
                           {
                                spotifyPic.map((item) => {
                                    return (
                                    <div>
                                        <div style={{width:'100%'}} onClick={() => {window.location = item.link}}><img style={{width:'100%', cursor: 'pointer', margin:'auto'}} src={cover_images[item.img]}></img></div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        )
    }
}

export default SpotifyEmbed;
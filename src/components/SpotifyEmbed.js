import React from 'react';
import { spotifyPic } from './imports/importLinkSpotify'
import cover_images from "./imports/importPicSpotify";

class SpotifyEmbed extends React.Component {
    state = {
        styleCards: { display: 'flex', flexDirection: 'row', left: 0, right: 0 },
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
            <div>
                    <div>
                        <div className="spotifyGrid" style={mob? {width:'90%', marginLeft:'5%'} : {width: '80%'}}>
                           {
                                spotifyPic.map((item) => {
                                    return (
                                    <div>
                                        <div className='coverImgDiv' style={{width:'100%'}} onClick={() => { item !== null &&  window.open(item.link, '_blank');}}>
                                            <img style={{width:'90%', height:'90%', cursor: 'pointer'}} src={cover_images[item.img] !== null && typeof(cover_images[item.img].default) !== undefined ? cover_images[item.img].default : ''}></img>
                                        </div>
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
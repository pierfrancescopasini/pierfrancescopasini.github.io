import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LinkItem from './LinkItem.js';
import {al_links, tr_links} from './imports/linkSpotify.js';

class SpotifyEmbed extends React.Component {
    state = {
        styleCards: { display: 'flex', flexDirection: 'row', left: 0, right: 0 },
    }

    componentDidMount = () => {
        window.addEventListener('orientationchange', () => {this.setState({})})
    }

    render() {
        let album_links = al_links;
        let track_links = tr_links;

        let width, height;
        width = "" + window.innerWidth / 4.5;
        height = "" + window.innerHeight / 3;
        let mob = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                height = "" + window.innerHeight / 3.5;
                width = "" + window.innerHeight / 3;
            } else {
                width = "" + window.innerWidth / 4;
                height = "" + window.innerHeight / 2;
            }
            mob = true
        }

        album_links = album_links.slice(0, this.props.nAlbums)
        track_links = track_links.slice(0, this.props.nTracks)

        return (
            <div>
                {this.props.displayAlbums ?
                    <div>
                        <h4>Albums</h4>
                        <div id='album-scroll' className="spotifyGrid">
                        </div>
                        <InfiniteScroll
                            dataLength={album_links.length}
                            style={this.state.styleCards}
                            scrollableTarget="single-scroll"
                        >
                            {
                                album_links.map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            marginInline: '5px',
                                            marginRight: '5px'
                                        }}
                                    >
                                        <iframe
                                            className='spotifyCard'
                                            src={'https://open.spotify.com/embed/album/' + item}
                                            width={width}
                                            height={height}
                                            frameBorder="0"
                                            allowtransparency="true"
                                            allow="encrypted-media"
                                            title={item}
                                        >
                                        </iframe>
                                    </div>
                                ))
                            }
                        </InfiniteScroll>
                        <div>
                            <h4>Singles</h4>
                            <div id='singles-scroll' className="spotifyGrid">
                            </div>
                            <InfiniteScroll
                                dataLength={track_links.length}
                                style={this.state.styleCards}
                                scrollableTarget="single-scroll"
                            >
                                {track_links.map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            marginInline: '5px',
                                            marginRight: '5px'
                                        }}
                                    >
                                        <iframe
                                            className='spotifyCard'
                                            src={'https://open.spotify.com/embed/track/' + item}
                                            width={width}
                                            height={height}
                                            frameBorder="0"
                                            allowtransparency="true"
                                            allow="encrypted-media"
                                            title={item}
                                        >
                                        </iframe>
                                    </div>
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                    :
                    <div style={{ width: '100%' }}>
                        <h4>Singles</h4>
                        <div className="spotifyGrid" style={{ left: 'auto' }}>
                            {track_links.map((item) => (
                                <div
                                    key={item}
                                    style={{
                                        marginInline: '5px',
                                        marginRight: '5px'
                                    }}
                                >
                                    <iframe
                                        className='spotifyCard'
                                        src={'https://open.spotify.com/embed/track/' + item}
                                        width={this.props.displayAlbums || mob ? width : window.outerWidth / 4.5}
                                        height={this.props.displayAlbums || mob ? height : window.outerWidth / 4.5}
                                        frameBorder="0"
                                        allowtransparency="true"
                                        allow="encrypted-media"
                                        title={item}
                                    >
                                    </iframe>
                                </div>
                            ))}
                        </div>
                        <div style={{width:'100%', height:'100%', marginTop:'10%'}}><LinkItem path={'/projects'} name={'See More'} home={true}></LinkItem></div>
                    </div>
                }
            </div>
        )
    }
}

export default SpotifyEmbed;
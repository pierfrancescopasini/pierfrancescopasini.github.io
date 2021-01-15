import React from 'react'
import ProgressBar from './ProgressBar.js'
import GridImage from './GridImage'
import {allEv} from './imports/events.js'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';
import background from './resources/eventsImage.png'

class EventsPage extends React.Component {

	state = {
		displayBar: { display: 'block' },
		displayPage: { display: 'none' },
	}

	componentDidMount = () => {
		setTimeout(() => {this.setState({displayPage:{display:'block'}, displayBar:{display:'none'}})}, 500);
		window.scrollTo({top:0, left:0, behavior:'smooth'});
		window.addEventListener('load', () => {
			this.setState({displayPage:{display:'block'}, displayBar:{display:'none'}})
		});
	}

	disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
    }
        
    enableScroll = () => {
        document.body.style.overflow = null;
    }


	render() {
		document.body.style.backgroundColor = "#000000";
		document.body.style.overflowY = '';
		let nElem = Math.ceil(allEv.length/3);
		let mob = false;
		if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
            mob = true;
		}
		if(window.orientation === 0  || window.orientation === 180){
			mob = true;
		}
		let back = `url(${background})`;
		return (
			<div style={{ backgroundColor: 'none', width:window.outerWidth, height: window.outerHeight * 2 }}>
				 <div style={mob ? {backgroundSize:window.innerWidth, backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/2.6, marginTop:'0px', backgroundPosition:'center top'}: {backgroundSize:'100%', backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/1.3, marginTop:'0px', backgroundPosition:'center center'}}>
                <Link to={'/'} className='headerIcon'><img className='imghead' height='50px'  src={iconTransparent}></img></Link>
                    <div style={mob ? { float: 'left', marginTop: window.innerHeight/3.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '25px'} : { float: 'left', marginTop: window.innerHeight/1.8, marginLeft: '20px', color: '#F5F5F5', fontSize: '40px'} }>
                            EVENTS
                    </div>
                </div>
				<div style={this.state.displayPage}>
				<div class='flexTable' style={{width: '100%', backgroundColor: 'none', margin:'auto', marginTop:'5%'}}>	
				<div className='row' style={mob? {width:'90%', marginLeft:'2%'} : {width:'80%', marginLeft:'10%'}}>
					<GridImage nElem={nElem} sEl={0}></GridImage>
					<GridImage nElem={nElem} sEl={1}></GridImage>
					<GridImage nElem={nElem} sEl={2}></GridImage>
				</div>
				</div>
				<div className='fab' style={{}} onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'})}}><i class='arrow up' style = {{marginTop:25, borderColor:'#f5f5f5'}}></i></div>
				</div>
				<div style={this.state.displayBar}><ProgressBar progress={{ amount: 0.8, time: 1 }} styleBar={{ width: window.innerWidth / 4, height: window.innerWidth / 4 }}></ProgressBar></div>
			</div>
		)
	}
}

export default EventsPage
import React from 'react'
import ProgressBar from './ProgressBar.js'
import GridImage from './GridImage'
import {allEv} from './imports/events.js'

class EventsPage extends React.Component {

	state = {
		displayBar: { display: 'block' },
		displayPage: { display: 'none' }
	}

	componentDidMount = () => {
		setTimeout(() => {this.setState({displayPage:{display:'block'}, displayBar:{display:'none'}})}, 500);
		window.scrollTo({top:0, left:0, behavior:'smooth'});
		window.addEventListener('load', () => {
			this.setState({displayPage:{display:'block'}, displayBar:{display:'none'}})
		});
	}



	render() {
		document.body.style.backgroundColor = "#000000";
		let nElem = Math.ceil(allEv.length/3);
		let mob = false;
		if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mob = true;
		}
		return (
			<div style={{ backgroundColor: 'none', width:window.outerWidth, height: window.outerHeight * 2 }}>
				<h1>Events</h1>
                {mob? <div></div> : <div style={{height:'28px'}}></div>}
				<div style={this.state.displayPage}>
				<div style={{width: '100%', backgroundColor: 'none', left:0, right:0}}>		
						<div className='row' style={mob? {width:'90%', height:'90%', margin:'auto'} : {width:'80%', height:'80%', margin:'auto'}}>
							<GridImage nElem={nElem} sEl={nElem*2}></GridImage>
							<GridImage nElem={nElem} sEl={nElem}></GridImage>
							<GridImage nElem={nElem} sEl={0}></GridImage>
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
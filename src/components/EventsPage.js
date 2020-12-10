import React from 'react'
import ProgressBar from './ProgressBar.js'
import GridImage from './GridImage'

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
		document.body.style.backgroundColor = "#282c34";
		let nElem = 11;
		return (
			<div style={{ backgroundColor: '#282c34', width:window.outerWidth, height: window.outerHeight * 2 }}>
				<h1 style={{ backgroundColor: '#282c34', color: '#f5f5f5' }}>Events</h1>
				<div style={this.state.displayPage}>
				<div style={{width: '100%', backgroundColor: '#282c34', left:0, right:0}}>		
						<div className='row' style={{width:'80%', height:'80%', margin:'auto'}}>
							<GridImage nElem={nElem} sEl={nElem*2}></GridImage>
							<GridImage nElem={nElem} sEl={nElem}></GridImage>
							<GridImage nElem={nElem} sEl={0}></GridImage>
						</div>
				</div>
				</div>
				<div style={this.state.displayBar}><ProgressBar progress={{ amount: 0.8, time: 1 }} styleBar={{ width: window.innerWidth / 4, height: window.innerWidth / 4 }}></ProgressBar></div>
			</div>
		)
	}
}

export default EventsPage
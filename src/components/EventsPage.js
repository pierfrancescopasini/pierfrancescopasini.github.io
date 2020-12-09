import React from 'react'
import { Link } from 'react-router-dom'
import images from './importPics.js'
import ProgressBar from './ProgressBar.js'
import Gallery from 'react-grid-gallery'


let events = [
	{ name: 'Evento1', date: '12/12/2017', img: 'Evento1.jpg', link: 'https://www.facebook.com/events/1991748301073144/' },
	{ name: 'Evento2', date: '20/03/2018', img: 'Evento2.jpg', link: 'https://www.facebook.com/events/197104491060399/' },
	{ name: 'Evento3', date: '17/04/2018', img: 'Evento3.jpg', link: 'https://www.facebook.com/sofarsoundsbrescia/videos/1899838816742940' },
	{ name: 'Evento4', date: '12/05/2018', img: 'Evento4.jpg', link: 'https://www.facebook.com/redtheaterfactory/videos/279675422886096' },
	{ name: 'Evento5', date: '16/06/2018', img: 'Evento5.jpg', link: 'https://www.facebook.com/events/157015425143286' },
	{ name: 'Evento6', date: '03/07/2018', img: 'Evento6.jpg', link: 'https://www.facebook.com/events/1151672108305986/' },
	{ name: 'Evento7', date: '10/07/2018', img: 'Evento7.jpg', link: 'https://www.facebook.com/events/2043520079004979?active_tab=about' },
	{ name: 'Evento8', date: '29/07/2018', img: 'Evento8.jpg', link: 'https://www.facebook.com/events/433378647177679' },
	{ name: 'Evento9', date: '19/08/2018', img: 'Evento9.jpg', link: 'https://www.facebook.com/events/1649391045116622' },
	{ name: 'Evento10', date: '20/10/2018', img: 'Evento10.jpg', link: 'https://www.facebook.com/events/2495464117138249/' },
	{ name: 'Evento11', date: '08/11/2018', img: 'Evento11.jpg', link: 'https://www.facebook.com/events/561715560929538/' },
	{ name: 'Evento12', date: '17/11/2018', img: 'Evento12.jpg', link: 'https://www.facebook.com/studiouno.viterbo/photos/a.386556811764096/598803500539425/' },
	{ name: 'Evento13', date: '18/11/2018', img: 'Evento13.jpg', link: 'https://www.facebook.com/events/265737337416474' },
	{ name: 'Evento14', date: '19/11/2018', img: 'Evento14.jpg', link: 'https://www.facebook.com/events/496891380811657' },
	{ name: 'Evento15', date: '27/12/2018', img: 'Evento15.jpg', link: 'https://www.facebook.com/events/321655621755726/' },
	{ name: 'Evento16', date: '28/01/2019', img: 'Evento16.jpg', link: 'https://www.facebook.com/events/794081037595198' },
	{ name: 'Evento17', date: '09/04/2019', img: 'Evento17.jpg', link: 'https://www.facebook.com/events/1001597576896803/' },
	{ name: 'Evento18', date: '19/04/2019', img: 'Evento18.jpg', link: 'https://www.facebook.com/events/575958749565750/' },
	{ name: 'Evento19', date: '04/06/2019', img: 'Evento19.jpg', link: 'https://www.facebook.com/events/2948309968542639' },
	{ name: 'Evento20', date: '13/06/2019', img: 'Evento20.jpg', link: 'https://www.facebook.com/events/354438341857122' },
	{ name: 'Evento21', date: '21/06/2019', img: 'Evento21.jpg', link: 'https://www.facebook.com/events/2591105770900702' },
	{ name: 'Evento22', date: '05/07/2019', img: 'Evento22.jpg', link: 'https://www.facebook.com/events/309420343327004' },
	{ name: 'Evento23', date: '26/07/2019', img: 'Evento23.jpg', link: 'https://www.facebook.com/events/843183662726268' },
	{ name: 'Evento24', date: '19/08/2019', img: 'Evento24.png', link: '' },
	{ name: 'Evento25', date: '19/08/2019', img: 'Evento25.jpg', link: 'https://www.facebook.com/events/806197759754983' },
	{ name: 'Evento26', date: '15/11/2019', img: 'Evento26.jpg', link: 'https://www.facebook.com/events/2511300922528403/' },
	{ name: 'Evento27', date: '21/11/2019', img: 'Evento27.jpg', link: 'https://www.facebook.com/events/2756241184419110' },
	{ name: 'Evento28', date: '23/11/2019', img: 'Evento28.jpg', link: 'https://www.facebook.com/events/1662300497238760/' },
	{ name: 'Evento29', date: '16/07/2020', img: 'Evento29.jpg', link: 'https://dice.fm/event/obqyg-cuori-impavidi-generic-animal-irbis-37-post-nebbia-altri-16th-jul-tribune-idroscalo-milano-tickets' },
	{ name: 'Evento30', date: '23/07/2020', img: 'Evento30.jpg', link: 'https://dice.fm/event/7yq69-cuori-impavidi-eugenio-in-via-gioia-in-concerti-leggeri-altri-2-spettacolo-23rd-jul-tribune-idroscalo-milano-tickets' },
	{ name: 'Evento31', date: '19/11/2020', img: 'Evento31.jpg', link: 'https://www.youtube.com/watch?v=LJtOZH701ZI&t=2286s' },
	{ name: 'Evento32', date: '26/11/2020', img: 'Evento32.jpg', link: 'https://www.youtube.com/watch?v=05sFO3zOdcg&t=3s' },
	{ name: 'Evento33', date: '25/12/2020', img: 'Evento33.jpg', link: 'https://dice.fm/event/lyp8r-mecna-xmas-live-streaming-from-dolomiti-25th-dec-antenna-sala-virtuale-bologna-tickets' },
]

let derived = false;
let years = new Set();
class EventsPage extends React.Component {

	state = {
		displayBar: { display: 'none' },
		displayPage: { display: 'none' }
	}

	deriveData = () => {
		if (!derived) {
			let date = null;
			let dateDum = null;
			try {
				for (let i = 0; i < events.length; i++) {
					console.log(events[i].date);
					dateDum = events[i].date.split('/');
					date = dateDum[1] + '/' + dateDum[0] + '/' + dateDum[2];
					date = new Date(date);
					events[i].date = date;
					years.add(date.getFullYear());
				}
			} catch (e) {
				console.log(e);
			}
			derived = true;
		}
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				displayBar: { display: 'none' },
				displayPage: { display: 'block' }
			})
			console.log(this.state)
		}, 2000)
		window.addEventListener('load', this.setState(
			{
				displayBar: { display: 'none' },
				displayPage: { display: 'block' }
			}
		));

		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.display === "block") {
					panel.style.display = "none";
				} else {
					panel.style.display = "block";
				}
			});
		}
	}



	render() {
		//Manip Stuff
		this.deriveData();
		console.log(years);
		let ordYears = [];
		for (let item of years) {
			console.log(item);
			ordYears.push(item);
		}
		ordYears.sort((a, b) => (b - a));
		console.log(ordYears);
		let ordImg = [];
		for (let i = 0; i < ordYears.length; i++) {
			ordImg.push({ year: ordYears[i], events: events.filter((item) => (item.date.getFullYear() === ordYears[i])) });
			ordImg[i].events.sort((a, b) => {
				if ((a.date.getMonth() - b.date.getMonth()) !== 0) {
					return b.date.getMonth() - a.date.getMonth();
				} else {
					return (b.date.getDate() - a.date.getDate());
				}
			}
			);
		}
		//Stop manip stuff

		let imageData = [];
		for(let i=events.length-1; i >= 0; i--){
			imageData.push({
				src:images[events[i].name], 
				thumbnail:images[events[i].name], 
				alt:events[i].link, 
			});
		}

		document.body.style.backgroundColor = "#282c34";

		return (
			<div style={{ backgroundColor: '#282c34', width:window.outerWidth, height: window.outerHeight * 2 }}>
				<h1 style={{ backgroundColor: '#282c34', color: '#f5f5f5' }}>Events</h1>
				<div style={this.state.displayPage} style={{width: window.innerWidth, backgroundColor: '#282c34', left:0, height:0}}>		
				<Gallery
					style={{width:'100%'}}
					margin='10px'
					rowHeight={window.innerHeight/2.8}
					enableImageSelection={false}
					onClickImage={(e) => {console.log(e.target)}}
					className='imgInGrid'
					images={imageData}
				></Gallery>
				</div>
				<div style={{display:'none'}}>
			
					{
						ordImg.map((year) => {
							return (
								<div>
									<button
										className='accordion'
										style={{ border: '1px', backgroundColor: '#f5f5f5' }}
									><h1 style={{ marginLeft: '5px', fontSize: '48px', color: '#282c34' }}>{year.year}</h1></button>
									<div className='panel'>
										{year.events.map((image) =>
											(
												<img
													key={image.name}
													alt={''}
													className='imglist'
													src={images[image.name]}>
												</img>
											))}
									</div>
								</div>
							)
						})
					}
				</div>
				<div style={this.state.displayBar}><ProgressBar progress={{ amount: 0.2, time: 1 }} styleBar={{ width: window.innerWidth / 4, height: window.innerWidth / 4 }}></ProgressBar></div>
			</div>
		)
	}
}

export default EventsPage
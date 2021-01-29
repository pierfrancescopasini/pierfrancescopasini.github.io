import React from 'react'
import partners from './imports/importPartners'
import links from './imports/importPartnersLink'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';
import background from './resources/partnersImage.png';
import yall from 'yall-js';

let partnersArray = Object.keys(partners);
let partnersCategory = []
for (let i = 0; i < partnersArray.length; i++) {
    partnersCategory.push(partners[partnersArray[i]])
}
class PartnersPage extends React.Component {

    componentDidMount = () => {
        yall();
    }
    render() {
        let mob = false;
        if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
            mob = true;
        }
        let fontSize = '50px';
        let margin = window.innerHeight/1.6;
        if(window.orientation === 0  || window.orientation === 180){
            mob = true;
        }else if(window.orientation === 90  || window.orientation === -90){
            fontSize = '40px';
            margin = window.innerHeight/1.8;
        }
        
        let back = `url(${background})`;
        
        return (
            <div style={{ backgroundColor: "white" }}>
                 <div style={mob ? {backgroundSize:window.innerWidth, backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/2.6, marginTop:'0px', backgroundPosition:'center top'}: {backgroundSize:'100%', backgroundRepeat: 'no-repeat', backgroundImage:back, height:window.innerHeight/1.3, marginTop:'0px', backgroundPosition:'center center'}}>
                <Link to={'/'} className='headerIcon'><img className='imghead' height='50px'  src={iconTransparent}></img></Link>
                    <div style={mob ? { float: 'left', marginTop: window.innerHeight/3.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '25px'} : { float: 'left', marginTop: margin, marginLeft: '20px', color: '#F5F5F5', fontSize: fontSize} }>
                            PARTNERS
                    </div>
                </div>
                {
                    partnersCategory.map(
                        (category, index) =>
                            <div key={Math.random().toFixed(5)}>
                                <div style={{ marginTop: '80px', marginBottom: '60px' }}>
                                    <div>
                                        <h2 style={ mob ? {color: '#000000', marginLeft: '5%', float: 'left', fontSize:'12px'} : { color: '#000000', marginLeft: '5%', float: 'left' }}>
                                            {partnersArray[index] === 'lives' ? 'Live Music' : partnersArray[index] === 'comuni' ? 'Public Authorities' : partnersArray[index]}
                                        </h2>
                                    </div>
                                    <hr style={{ width: '90%', stroke: '#000000' }}></hr>
                                </div>
                                <div style={{ width: '100%', margin: 'auto' }}>
                                    <div
                                        style={category.length > 10 ?
                                            { width: '85%', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%', marginLeft: '15%', marginBottom: '80px' } :
                                            { width: '85%', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', marginLeft: '15%', marginBottom: '80px' }}>
                                        {
                                            category.slice().reverse().map(
                                                (image, indice) => <div key={Math.random().toFixed(4)} style={{ display: 'inline', width: '40%', height: 'auto' }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginTop: '50%',
                                                            cursor:'pointer'
                                                        }}
                                                        onClick={() => {
                                                            let arr = links[partnersArray[index]];
                                                            let length = arr.length -1;
                                                            let item = arr[length-indice];
                                                            const tab = window.open(item.link, '_blank');
                                                        }}
                                                    >
                                                        <img 
                                                            className = 'lazy'
                                                            data-src={image}
                                                            style={{
                                                                display: 'block',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: 'translate(-50%, -50%)',                                                               width: '100%',
                                                                height: '100%',
                                                                overflow: 'auto'
                                                            }}
                                                        ></img>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default PartnersPage;
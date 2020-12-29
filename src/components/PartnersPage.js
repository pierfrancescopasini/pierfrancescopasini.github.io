import React from 'react'
import partners from './imports/importPartners'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';

let partnersArray = Object.keys(partners);
let partnersCategory = []
for (let i = 0; i < partnersArray.length; i++) {
    partnersCategory.push(partners[partnersArray[i]])
}
class PartnersPage extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "white" }}>
                 <Link to={'/'} className='headerIcon'><img onClick={() => {
                            
                        }} className='imghead' height='56px'  src={iconTransparent}></img></Link>
                <h1 style={{ color: '#000000' }}>Partners</h1>
                {
                    partnersCategory.map(
                        (category, index) =>
                            <div key={Math.random().toFixed(5)}>
                                <div style={{ marginTop: '80px', marginBottom: '60px' }}>
                                    <div>
                                        <h2 style={{ color: '#000000', marginLeft: '5%', float: 'left' }}>
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
                                                image => <div key={Math.random().toFixed(4)} style={{ display: 'inline', width: '40%', height: 'auto' }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginTop: '50%'
                                                        }}
                                                    >
                                                        <img src={image}
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
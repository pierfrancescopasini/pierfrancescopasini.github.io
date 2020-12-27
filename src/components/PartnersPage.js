import React from 'react'
import partners from './imports/importPartners'

let partnersArray = Object.keys(partners);
let partnersCategory = []
for(let i=0; i < partnersArray.length; i++){
    partnersCategory.push(partners[partnersArray[i]])
}
class PartnersPage extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:"white"}}>
                <h1 style={{color: '#000000'}}>Partners</h1>
                {
                   partnersCategory.map(
                       (category, index) => 
                       <div key={Math.random().toFixed(2)}>
                            <h2 style={{color: '#000000', marginTop: '100px', marginBottom: '80px'}}>{partnersArray[index]}</h2>
                           <div style={{ width: '50%', display:'grid', gridTemplateColumns: '25% 25% 25% 25%', margin: 'auto', marginBottom: '100px'}}>
                       {
                        category.map(
                               image => <div key={Math.random().toFixed(4)} style={{display: 'inline', width:'100%', height:'auto'}}><img src={image} width='100px' height='auto'></img></div>
                        )
                       }
                       </div>
                       </div>
                   )
                }
            </div>
        )
    }
}

export default PartnersPage;
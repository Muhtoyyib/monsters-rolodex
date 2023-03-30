import React from 'react';
import './card.styles.css';

const CardComponent= ({monster: {name, email, id}}) => (
    <div className='card-container' key={id}>
        <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    
  )


export default CardComponent;




// class CardComponent extends Component{
//     render(){
//         const {name, email, id} = this.props.monster;

//         return(
//             <div className='card-container' key={id}>
//             <img 
//             alt={`monster ${name}`}
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//             />
//             <h2>{name}</h2>
//             <p>{email}</p>
 
//            </div>
//         )
//     }
// }
// export default CardComponent;

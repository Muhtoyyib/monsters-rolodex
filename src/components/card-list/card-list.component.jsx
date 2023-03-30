import React from 'react';
import CardComponent from '../card-component/card-component.component';
import './card-list.styles.css';



const CardList = ({monsters}) => (
    <div className='card-list'>
    {monsters.map((monster)=>{
              return(
               <CardComponent monster={monster}/>
              )
             })}
    </div>
)

export default CardList;



// class CardList extends Component {
//     render() {

//     const {monsters} = this.props;

//     return (
//       <div className='card-list'>
//        {monsters.map((monster)=>{
//         return(
//          <CardComponent monster={monster}/>
//         )
//        })}
//       </div>
//   )
//     }
  
// }

// export default CardList;

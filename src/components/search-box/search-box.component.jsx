import React from 'react';
import './search-box.styles.css';

const SearchBox = ({onSearchChange, placeholder, className}) => (
    <div>
    <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onSearchChange} />
    </div>
  )


export default SearchBox;


// class SearchBox extends Component {
//     render(){
//       
//         return(
//          <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onSearchChange} />
//         )
//     }
// }

//export default SearchBox;
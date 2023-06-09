import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import React from 'react'

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);
 
  console.log('rendered')

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
       return setSearchField(searchFieldString);
      };
            

      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(
          (response) => response.json()
        )
        .then(
          (users) => setMonster(users)
          );
      }, []);

      useEffect(()=>{
        const newFilteredMonster = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
         })

         setFilteredMonster(newFilteredMonster)
      },[monsters, searchField])

  return (
    <div>
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox onSearchChange={onSearchChange} placeholder='search monster' className='monsters-search-box'/>
    <CardList monsters={filteredMonster}/>

    </div>
  )
}

export default App


// class App extends Component {
  
//   constructor(){
//     super()

   
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
  
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(
//       (response) => response.json()
//     )
//     .then(
//       (users) => this.setState(() => {
//         return {monsters: users}
//       })
//     )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return {searchField}
//     })

//   }


//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
  
//     const filteredArray = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })
    
//     return (
//     <div className="App">
//     <h1 className='app-title'>Monsters Rolodex</h1>

//     <SearchBox onSearchChange={onSearchChange} placeholder='search monster' className='monsters-search-box'/>
//     <CardList monsters={filteredArray}/>

  
//     </div>
//   );
// }
//   }
 

// export default App;


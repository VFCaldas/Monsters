import React, {Component} from 'react';
import {CardList} from './components/cardList/cardList.component'
import {SearchBox} from './components/searchbox/search'
import './App.css';

class App extends Component {
 constructor(){
super();

this.state = {
 monsters : [],
 searchField : '',
  };
 }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({
     monsters: users
   }));
 }

  render(){
    const { monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return(
      <div className="App">
        <SearchBox 
         placeholder='Search a Monster'
         handleChange = {e => {this.setState({searchField: e.target.value});
        }}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      
    </div>
    )
  }
    
  
}

export default App;

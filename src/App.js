import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list';
import './App.css';
import SearchBox from './components/search-box/search-box';
import Name from './components/name/name';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setMonsters(users)}
      )
  }, []);

  useEffect(() => {
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField) 
    })
    setFilterMonsters(filterMonster)
  }, [searchField, monsters])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }
  

  return (
    <div className="App">
      <Name/>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList filterMonster={filterMonsters}/>
    </div>
  );
}

export default App;
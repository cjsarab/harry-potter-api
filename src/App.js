import React, {useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import SpellsList from './components/spells/SpellsList';
import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [spells, setSpells] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getItems();
    getSpells();
  }, [query])

  const getItems = function(){
    fetch(`https://hp-api.herokuapp.com/api/characters?name=${query}`)
    .then(res => res.json())
    .then(items => setItems(items));
    setIsLoading(false)
}

const getSpells = function(){
  fetch(`https://hp-api.herokuapp.com/api/spells`)
  .then(res => res.json())
  .then(spells => setSpells(spells));
  setIsLoading(false)  
}

const queryFunction = (q) => {
  setQuery(q)
}


  return (
    <div className="container">
      <Header />
      <Search getQuery={queryFunction}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
      <SpellsList isLoading={isLoading} spells={spells} />
    </div>
  );
}

export default App;

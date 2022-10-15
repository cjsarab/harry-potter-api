import React, {useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getItems();
  }, [query])

  const getItems = function(){
    fetch(`https://hp-api.herokuapp.com/api/characters?name=${query}`)
    .then(res => res.json())
    .then(items => setItems(items));
    setIsLoading(false)
}


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;

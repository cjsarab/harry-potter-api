import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({isLoading, items}) => {
  return (
    isLoading ? (<h1>Loading...</h1>
    ) : (
    <section className="cards">
        {items.map((item, i) => (
            <CharacterItem key={i} item={item}></CharacterItem>
        ))};
    </section>)
  )
}

export default CharacterGrid
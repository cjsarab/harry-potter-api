import React from 'react'
import SpellItem from './SpellItem'

const SpellsList = ({isLoading, spells}) => {
    return (
        isLoading ? (<h1>Loading...</h1>
        ) : (
        <section className="cards">
            {spells.map((spell, i) => (
                <SpellItem key={i} spell={spell}></SpellItem>
            ))};
        </section>
      )
    )  
}

export default SpellsList
import React from 'react'

const SpellItem = ({spell}) => {
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                {spell.name}
            </div>
            <div className='card-back'>
                <h1>{spell.name}</h1>
                <h2>{spell.description}</h2>
            </div>
        </div>
    </div>
  );
};

export default SpellItem;
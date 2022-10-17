import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.image} alt='Character Picture' />
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Actor Name: </strong> {item.actor}
                    </li>
                    <li>
                        <strong>Date of Birth: </strong> {item.dateOfBirth}
                    </li>
                    <li>
                        <strong>Ancestry: </strong> {item.ancestry}
                    </li>
                    <li>
                        <strong>Species: </strong> {item.species}
                    </li>
                    <li>
                        <strong>House: </strong> {item.house}
                    </li>
                    <li>
                        <strong>Patronus: </strong> {item.patronus}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default CharacterItem;
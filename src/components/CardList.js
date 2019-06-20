import React from 'react';
import Card from './Card'; //no need for destructure because it's default

const CardList = ({robots, lala}) => {

    return(
        <div>
            {robots.map((user, i) => {
        return (
            <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    username={robots[i].username}    
            />);
            })
            }
            {lala}
        </div>
    );
}

export default CardList;
// eeheh
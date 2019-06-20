import React from 'react';


const Card = ({name, id, email, username}) => {
    // using destructure inside the arguments. Was (props)
    // const {name, id, email} = props; // can work as well as an option
    return (
        // we must return only one item. For instance,
        // her we are returning only <div> element with 
        // different elements inside this ONE div element. 
        // Can be any other element
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            {/* using rssobohash to get pics of random robots */}
            <img src={`https://robohash.org/${id}?300x300`} alt='robots'/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
        </div>    
    );
}
export default Card;
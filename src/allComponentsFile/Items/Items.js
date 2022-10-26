import React from 'react';
import './Item.css';

const Items = ( { item } ) =>
{
    const { name, age, time, description, img } = item;
    return (

        <div className='card'>
            <div className="card-body">
                <img src={ img } className="card-img" alt="" />
                <div className='card-details'>
                    <h3>{ name }</h3>
                    <h5>Age: { age }</h5>
                    <p>About:{ description }</p>
                    <p><strong>Time Needed: { time }s</strong></p>
                </div>
            </div>
            <button className="card-btn">Add To List</button>
        </div>
    );
};

export default Items;
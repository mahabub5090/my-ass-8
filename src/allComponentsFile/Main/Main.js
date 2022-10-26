import React, { useEffect, useState } from 'react';
import './Main.css';
import Item from '../Items'


const Main = () =>
{

    const [ items, setItems ] = useState( [] );

    useEffect( () =>
    {
        fetch( 'fakeData.json' )
            .then( res => res.json() )
            .then( data => setItems( data ) )
    }, [] )

    return (
        <div>
            <div className='items'>
                <h1>Select Your Today's Exercise</h1>
                <div className="cards">
                    {
                        items.map( item => <Item key={ item.id }item={ item }></Item> )
                    }
                </div>
            </div>
            {/*  */ }
            <div className='aside'>

            </div>
        </div>
    );
};

export default Main;
import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './Main.css';



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
                        items.map( item => <Items key={ item.id } item={ item }></Items> )
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
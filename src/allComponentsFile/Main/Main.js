import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './Main.css';
import Aside from './../Aside/Aside';



const Main = () =>
{

    const [ items, setItems ] = useState( [] );

    useEffect( () =>
    {
        fetch( 'fakeData.json' )
            .then( res => res.json() )
            .then( data => setItems( data ) )
    }, [] )

    const [ exTime, setExTime ] = useState( [] );
    const handleCliked = ( item ) =>
    {
        let exerciseTime = 0;
        exerciseTime = item.time;
        setExTime( exerciseTime )
        
    };

    return (
        <div className='main-part'>
            <div className='items'>
                <h1>Select Your Today's Exercise</h1>
                <div className="cards">
                    {
                        items.map( item => <Items key={ item.id } item={ item } handleCliked={handleCliked}></Items> )
                    }
                </div>
            </div>
            {/*  */ }
            <div className='aside'>
                <Aside exerciseTime={exTime}></Aside>
            </div>
        </div>
    );
};

export default Main;
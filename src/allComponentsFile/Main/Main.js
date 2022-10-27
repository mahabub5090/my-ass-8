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

    const [ exArray, setExArray ] = useState([]);
    const handleCliked = ( item ) =>
    {
        const newExArray = [...exArray,item];
        setExArray( newExArray )
       
    };
   
// console.log(exArray)
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
                <Aside exArray={exArray}></Aside>
               
            </div>
        </div>
    );
};

export default Main;
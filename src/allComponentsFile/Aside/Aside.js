import React from 'react';
import "./Aside.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import TimeToTakeBreak from '../TimeToTakeBreak/TimeToTakeBreak';

const Aside = ( { exArray } ) =>{

    let time = 0;
    for ( const item of exArray )
    {
        time = time + parseInt( item.time );
        
    }


    const timeForBreak = [ 20, 30, 10, 40, 50, 35 ]
    const [ noUseTime, setTime ] = useState( [] );

    const breakHandle = ( breakTime ) =>
    {
        localStorage.setItem( "breakTime", JSON.stringify( breakTime ) )
        setTime( breakTime );
    }

    let useBreakTime = '';
    const getTakeBreakTime = localStorage.getItem( 'breakTime' )
    if ( getTakeBreakTime )
    {
        useBreakTime = ( JSON.parse( getTakeBreakTime ) );
    }


    const complitedWork = () => toast( "Well Done!!! You Are Completed The Excercise." );

    return (
        <div className='aside'>
            <div className='author-details'>
                <div className="Profile-name">
                    <h3>Md.Mahabubar Rahman</h3>
                    <p><small>From: Rangpur, Bangladesh</small></p>
                </div>
                <div className="author-information">
                    <div className="author-info">
                        <h3>60 KG</h3>
                        <h4>Weight</h4>
                    </div>
                    <div className="author-info">
                        <h3>18 Year's</h3>
                        <h4>Age</h4>
                    </div>
                    <div className="author-info">
                        <h3>5.05</h3>
                        <h4>Height</h4>
                    </div>
                </div>
            </div>

            <div className=''>
                <h3>Please Add a Break Time</h3>
                <div className='break-part'>
                    {
                        timeForBreak.map( breakTime => <TimeToTakeBreak breakTime={ breakTime } breakHandle={ breakHandle }></TimeToTakeBreak> )
                    }
                </div>
            </div>


            <div className='exercise-management'>
                <h3>Your's Exercise Details:</h3>
                <div className='ex-details'>
                    <h4>Exercise Time</h4>
                    <h4>{ time + 0 } seconds</h4>
                </div>
                <div className='ex-details'>
                    <h4>Break Time</h4>
                    <h4> { useBreakTime + 0 }seconds</h4>
                    {/* we use "useTime" (in 'p' tag) and display none it for error handleing,bcz we declare a useState but we don't use "useTime" anywhere */ }
                    <p style={ { display: "none" } }>{ noUseTime }</p>
                </div>
                <button className="completed-btn" onClick={ complitedWork }>Activity Completed</button>
                <ToastContainer />
            </div>


        </div>

    );
};


export default Aside;
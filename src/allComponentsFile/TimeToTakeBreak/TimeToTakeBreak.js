import React from 'react';
import './TimeToTakeBreak.css';

const TimeToTakeBreak = ( { breakTime, breakHandle } ) =>
{
    return (
        <div className='break-btn'>
            <button onClick={ () => breakHandle( breakTime ) }>
                { breakTime }sec.
            </button>
        </div>
    );
};

export default TimeToTakeBreak;
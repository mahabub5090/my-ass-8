import React from 'react';
import "./Aside.css";

const Aside = () =>
{
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

            <div className=''></div>

           
                <div className='exercise-management'>
                    <h3>Your's Exercise Details:</h3>
                    <div className='ex-details'>
                        <h4>Exercise Time</h4>
                        <h4> seconds</h4>
                    </div>
                    <div className='ex-details'>
                        <h4>Break Time</h4>
                        <h4> seconds</h4>
                    </div>
                    <button className="completed-btn">Activity Completed</button>

                </div>
            

        </div>

    );
};

export default Aside;
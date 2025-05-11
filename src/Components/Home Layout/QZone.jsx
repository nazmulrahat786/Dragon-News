import React from 'react';
import swimmingImage  from "../../assets/swimming.png";
import playgImage  from "../../assets/playground.png";
import classImage  from "../../assets/class.png";

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playgImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;
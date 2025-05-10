import React from 'react';
import Marquee from 'react-fast-marquee';

const Latasnews = () => {
    return (
        <div className='flex p-3 items-center bg-base-200 gap-5'>
           <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60} >
           <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, eveniet!</p>
           <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, eveniet!</p>
           <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, eveniet!</p>
           </Marquee>
          
        </div>
    );
};

export default Latasnews;
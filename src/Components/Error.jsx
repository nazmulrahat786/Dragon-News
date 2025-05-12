import React from 'react';

const Error = () => {
    return (
        <div className='flex  flex-col justify-center items-center h-screen'>
            <h1 className='text-6xl font-extrabold '>404</h1>
            <h1 className='text-2xl font-extrabold text-base-300'> Error</h1>
            <p className='textarea-xs font-mono'>Internal Error</p>

        </div>
    );
};

export default Error;
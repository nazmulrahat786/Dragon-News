import React, { use } from 'react';
const catagoryPromis = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const catagories = use(catagoryPromis);
    return (
        <div>
            <h1 className='font-bold'>All Catagories</h1>
        </div>
    );
};

export default Categories;
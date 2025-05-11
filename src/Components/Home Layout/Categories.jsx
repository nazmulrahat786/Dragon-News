import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagoryPromis = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const catagories = use(catagoryPromis);
    console.log(catagories);
    return (
        <div>
            <h1 className='font-bold'>All Catagories</h1>

            <div className='grid grid-cols-1 gap-3 my-5'>
                {catagories.map(catagory => <NavLink to={`/category/${catagory.id}`} key={catagory.id}  
                className={"btn bg-base-100 border-0 font-semibold  hover:bg-base-200 text-accent"}
                >{catagory.name} </NavLink>)
                 }
            </div>
        </div>
    );
};

export default Categories;
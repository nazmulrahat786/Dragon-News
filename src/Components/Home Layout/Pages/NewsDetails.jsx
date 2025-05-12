import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import RightAside from '../RightAside';
import NewsDerailsCard from '../../NewsDerailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news , setNews]= useState({})


    useEffect(()=>{
        const newsDetails = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetails)
    },[data, id])
    return (
        <div>
          <header className='py-3'>
            <Header></Header>
          </header>
          <main className='w-11/12 py-10 mx-auto gap-5 grid grid-cols-12'>
<section className='col-span-9'>
    <h1 className='font-bold mb-5'>NewsDetails</h1>
    <NewsDerailsCard news={news}></NewsDerailsCard>
</section>
<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
          </main>
        </div>
    );
};

export default NewsDetails;
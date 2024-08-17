import React from 'react'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'
import Postbox from './Postbox';

function Home() {
    return (
        <>
        {
        /* redirection */}
            <Navbar/>
            <Postbox/>
        <div className='Hompage'>
        </div>
        </>
    )
}

export default Home;

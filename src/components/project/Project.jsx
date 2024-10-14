import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

function Project ({title, client, soft, tasks}) {
    return (
        <section className='project'>
        <Header/>
<h1 className='project__heading'>{title}</h1>
<div className='project__circle'></div>
<li className='project__description'>
    <ul className='project__ul'>
        <h3 className='project__title'>о компании</h3>
            <p className='project__text'>{client}</p>
    </ul>
    <ul className='project__ul'>
        <h3 className='project__title'>софт</h3>
            <p className='project__text'>{soft}</p>
    </ul>
    <ul className='project__ul'>
        <h3 className='project__title'>задачи</h3>
            <p className='project__text'>{tasks}</p>
    </ul>
</li>
</section>
    )
}

export default Project;
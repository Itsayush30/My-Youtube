import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Eaely return
    if(!isMenuOpen) return null;

  return (
    <div className='shadow-lg w-48 p-5'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <ul>
            <h1 className='font-bold'>Subscriptions</h1>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <ul>
            <h1 className='font-bold'>Watch Later</h1>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar;
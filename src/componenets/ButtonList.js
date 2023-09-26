import React from 'react';
import Button from './Button';

const ButtonList = () => {
    return (
    <div className='flex justify-center'>
        <Button name = "All"/>
        <Button name = "Gaming"/>
        <Button name = "Songs"/>
        <Button name = "Live"/>
        <Button name = "Soccer"/>
        <Button name = "Cricket"/>
        <Button name = "Movie"/>
        <Button name = "Comedy"/>
        <Button name = "Thriller"/>
        <Button name = "Cooking"/>
    </div>
  )
}

export default ButtonList;
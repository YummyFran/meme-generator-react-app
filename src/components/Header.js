import React from 'react'
import troll from '../images/troll.png'

const Header = () =>{
    return (
        <header>
            <img src={troll} alt="troll" />
            <h3>Meme Generator</h3>
            <h4>React Project 1</h4>
        </header>
    )
}

export default Header
import React, { useState, useEffect } from "react";

const Meme = () => {
    const [memeData, setMemeData] = useState()
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    const generateMeme = () => {
        const memes = memeData.map(data => data.url)
        setMeme(prevMeme => ({
            ...prevMeme,
            url: memes[Math.floor(Math.random() * memes.length)]
        }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])
    return (
        <main>
            <div className="main">
                <input type="text" placeholder="Top Text" name="topText" onChange={handleChange}/>
                <input type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange}/>
                <button onClick={generateMeme}>Generate Meme</button>
            </div>
            {meme.url && <div className="meme">
                <img src={meme.url} alt="meme"/>
                <p className="topText">{meme.topText}</p>
                <p className="bottomText">{meme.bottomText}</p>
            </div>}
        </main>
    )
}

export default Meme
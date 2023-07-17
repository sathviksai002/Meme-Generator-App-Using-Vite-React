import React from "react"
export default function Meme(){
    // making default state

    
    const[meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemeImages, setAllMemeImages] = React.useState([])

    
    React.useEffect(() => {
        async function getMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    function handleChange(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name] : event.target.value
        }))
    }


    function getMeme(){
        const rand = Math.floor(Math.random() * allMemeImages.length) + 1
        const url = allMemeImages[rand].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage : url
        }))
    }
    

    return(
        <main>
        <div className="meme-component">
        <input 
        type= "text" 
        className = "first-text" 
        placeholder="Enter the first top text"
        onChange = {handleChange}
        name = "topText"
        value = {meme.topText}
        />
        <input 
        type= "text" 
        className = "second-text" 
        placeholder="Enter the bottom text" 
        onChange={handleChange}
        name = "bottomText"
        value = {meme.bottomText}
        />
        <button 
        onClick = {getMeme} 
        className="submit-button">
            Get a new Meme image 🖼
        </button>
        </div>
        <div className="memes">
        <img src = {meme.randomImage}  className="form"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}
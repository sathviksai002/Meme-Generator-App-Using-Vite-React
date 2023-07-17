import React from "react"
import Troll from "../public/images/troll_face.png"


export default function Header(){
    return(
        <header className="meme-header">
            <img src = {Troll} className="troll-face"></img>
            <h3 className="meme-text">Meme generator</h3>
        </header>
    )
}
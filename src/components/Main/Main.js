import React from 'react'
import "./main.css"
import Loupe from "../../images/loupe.png"

function Main() {
    return (
        <section className='main'>
            <header>
                <h1 className='main-title'>En quelle matière avez vous besoin d'aide ?</h1>
                <div className='searchbar'>
                  <input type="text" placeholder='SVT, Maths, Physiques, ...'/>
                  <img src={Loupe} />
                </div>
            </header>
        </section>
    )
}

export default Main
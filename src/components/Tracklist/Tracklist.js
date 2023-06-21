import React from 'react'
import './tracklist.css'
import Track from '../Track/Track'

export default function Tracklist() {
    return (
        <div className="track-list">
            <input type="text"></input>
            <Track />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}
import React from 'react';
import { useParams } from 'react-router-dom';
import songs from '../../data/songs.json'

function SongDetail(props) {

    const params = useParams();
    const { songID } = params;
    const song = songs.results.filter(
        item => item.id === Number(songID)
    ).map(
        item =>
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.detail}</p>
            </div>
    )

    return (

        <>{song}</>
    )
}

export default SongDetail
import React from 'react';
import songs from '../../data/songs.json';
import SongCard from './SongCard';

function Song(props){
    const songItems = songs.results.filter(
        item => item.isActive).map(
        (item) =>(
           
            <div className="col-sm-6" key={item.id} >
                <SongCard 
                id={item.id} 
                title={item.title}
                detail={item.detail}
                url={item.url}
               
                />
            </div>
          
          
        )
    )
    
    return(

        <>
        
        <div className="row">
            {songItems}
            </div>
          
        
           </>
    )
}

export default Song
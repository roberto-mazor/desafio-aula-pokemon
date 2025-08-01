import React from 'react';
import './assets/VideoEmbed.css'



function VideoEmbed(props) {
    return(
        <>
            <div className='videoEmbed'> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mE8E3nT2U70?si=o6CnC6fhURhrNUMt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default VideoEmbed
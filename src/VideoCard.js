import React from 'react';
import "./VideoCard.css";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img 
                src="https://e2.365dm.com/20/08/768x432/skysports-lionel-messi-graphic_5077681.jpg?20200826082834"
                alt=""
        />
        <p>This is a movie about football</p>
        <h2>Movie title</h2>
        <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard

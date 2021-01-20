import React from 'react';
import Video from './video';

const Videolists = (props) => {
    return (
        <ul className='video_list'>
            {props.videos.map((video) => {
                return <Video key={video.id} video={video} />;
            })}
        </ul>
    );
};

export default Videolists;

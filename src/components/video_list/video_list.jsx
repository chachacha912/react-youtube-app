import React from 'react';
import Video from '../video_item/video';

const VideoLists = (props) => {
    return (
        <ul className='video_list'>
            {props.videos.map((video) => {
                return (
                    <Video key={video.id.videoId || video.id} video={video} />
                );
            })}
        </ul>
    );
};

export default VideoLists;

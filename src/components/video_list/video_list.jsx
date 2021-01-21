import React from 'react';
import Video from '../video_item/video';

const VideoLists = ({ videos, onVideoClick }) => {
    return (
        <ul className='video_list'>
            {videos.map((video) => {
                return (
                    <Video
                        key={video.id}
                        video={video}
                        onVideoClick={onVideoClick}
                    />
                );
            })}
        </ul>
    );
};

export default VideoLists;

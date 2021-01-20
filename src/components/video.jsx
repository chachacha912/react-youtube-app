import React from 'react';

const Video = (props) => {
    const { thumbnails, title, channelTitle } = props.video.snippet;
    return (
        <li className='video'>
            <img
                src={thumbnails.default.url}
                alt={title}
                className='thumbnail'
            />
            <span className='title'>{title}</span>
            <span className='channel'>{channelTitle}</span>
        </li>
    );
};

export default Video;

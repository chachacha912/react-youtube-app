import React from 'react';
import styles from './video.module.css';

const Video = ({ video, video: { snippet }, onVideoClick }) => {
    // const { thumbnails, title, channelTitle } = props.video.snippet;
    // console.log(props);
    return (
        <li
            className={styles.video}
            onClick={() => {
                onVideoClick(video);
            }}
        >
            <img
                src={snippet.thumbnails.medium.url}
                alt={snippet.title}
                className={styles.thumbnail}
            />
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </li>
    );
};

export default Video;

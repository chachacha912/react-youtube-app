import React from 'react';
import styles from './video.module.css';

const Video = (props) => {
    const { thumbnails, title, channelTitle } = props.video.snippet;
    // console.log(props);
    return (
        <li className={styles.video}>
            <img
                src={thumbnails.medium.url}
                alt={title}
                className={styles.thumbnail}
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.channel}>{channelTitle}</p>
        </li>
    );
};

export default Video;

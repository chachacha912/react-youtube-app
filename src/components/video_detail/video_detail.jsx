import React from 'react';

const VideoDetail = ({ video }) => (
    <section>
        <iframe
            type='text/html'
            width='640'
            height='360'
            src={`http://www.youtube.com/embed/${video.id}?autoplay=1`}
            frameborder='0'
            allowFullScreen
        ></iframe>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.channelTitle}</p>
        <pre>{video.snippet.description}</pre>
    </section>
);

export default VideoDetail;

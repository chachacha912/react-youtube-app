import { useState, useCallback, useEffect } from 'react';
import './app.css';
import SearchForm from './components/search_form/search_form';
import VideoDetail from './components/video_detail/video_detail';
import VideoLists from './components/video_list/video_list';

const App = ({ youtube }) => {
    const [isLoading, setLoading] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
    const handleSearch = useCallback((query) => {
        // console.log(query);
        setLoading(true);
        youtube
            .search(query) //
            .then((videos) => setVideos(videos))
            .finally(setLoading(false));
    });

    useEffect(() => {
        // console.log('mounted');
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos))
            .finally(setLoading(false));
    }, []);

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            {selectedVideo && <VideoDetail video={selectedVideo} />}
            {isLoading ? (
                'Loading'
            ) : (
                <VideoLists videos={videos} onVideoClick={selectVideo} />
            )}
        </>
    );
};

export default App;

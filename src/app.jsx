import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import SearchForm from './components/search_form/search_form';
import VideoLists from './components/video_list/video_list';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    const handleSearch = useCallback((item) => {
        // console.log(item);
        setLoading(true);
        const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${item}&key=AAA`;
        // key=AAA 에 발급받은 키 입력하기
        getVideos(searchUrl);
    });

    const getVideos = async (url) => {
        const getvideolist = await axios.get(url);
        // console.log('axios', getvideolist.data.items);
        setVideos(getvideolist.data.items);
        setLoading(false);
    };

    useEffect(() => {
        // console.log('mounted');
        getVideos(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AAA'
            // key=AAA 에 발급받은 키 입력하기
        );
    }, []);

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            {isLoading ? 'Loading' : <VideoLists videos={videos} />}
        </>
    );
};

export default App;

import { useState, useCallback, useEffect } from 'react';
import './app.css';
import SearchForm from './components/search_form/search_form';
import VideoLists from './components/video_list/video_list';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    const handleSearch = useCallback((item) => {
        // console.log(item);
        setLoading(true);
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        // key=AAA 에 발급받은 키 입력하기
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${item}&type=video&key=AAA`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) =>
                result.items.map((item) => ({ ...item, id: item.id.videoId }))
            )
            .then((items) => setVideos(items))
            .catch((error) => console.log('error', error))
            .finally(setLoading(false));
    });

    useEffect(() => {
        // console.log('mounted');
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        // key=AAA 에 발급받은 키 입력하기
        fetch(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AAA',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log('error', error))
            .finally(setLoading(false));
    }, []);

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            {isLoading ? 'Loading' : <VideoLists videos={videos} />}
        </>
    );
};

export default App;

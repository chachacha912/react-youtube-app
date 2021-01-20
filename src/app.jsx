import { useState, useCallback, useEffect } from 'react';
import './app.css';
import Searchform from './components/searchform';
import Videolists from './components/videolists';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    const handleSearch = useCallback((item) => {
        console.log(item);
    });

    const getVideos = (url) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        const getvideolist = fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('result.item', result.items);
                return result.items;
            })
            .catch((error) => console.log('error', error));

        console.log('getvideolist', getvideolist);
    };

    useEffect(() => {
        console.log('mounted');
        getVideos(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AAA'
            // key=AAA 에 발급받은 키 입력하기
        );
        // console.log(getvediolist);
        // setVideos(getvediolist);
    }, []);

    return (
        <>
            {isLoading ? 'Loading' : 'we are ready'}
            {/* <Searchform onSearch={handleSearch} /> */}
            {/* <Videolists videos={videos} /> */}
        </>
    );
};
export default App;

import React,{useState,useEffect} from 'react'
import FeedCard from './FeedCard'
import axios from 'axios'

const Feed = () => {

    const [feeds,setFeeds] = useState([])

    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
          'x-rapidapi-key': '4630e2fd7bmsh6135b2d0e438918p195714jsn91f0595b86d7',
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    const upload = async() => {
        try{
            let {data} = await axios.request(options);
            setFeeds(data.data);
            console.log(feeds);
        }catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        upload()
    },[]);

    console.log(feeds);
    

  return (
    <div className='h-full w-[100vw] flex flex-row justify-between gap-10 p-20 flex-wrap '>
        {feeds.length !== 0 && (
             feeds.map((feed,index) =>{
                if (feed.thumbnail) {
                    return (
                      <FeedCard
                        key={index}
                        title={feed.title}
                        channelTitle={feed.channelTitle}
                        publishedTimeText={feed.publishedTimeText}
                        lengthText={feed.lengthText}
                        thumbnail={feed.thumbnail[0].url}
                      />
                    );
                  } else {
                    return null; // Or render a placeholder
                  }
            }
            
            )   
        )}
    </div>

  )
}

export default Feed

{/* <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard /> */}
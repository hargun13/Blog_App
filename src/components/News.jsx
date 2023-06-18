import React, {useState , useEffect} from 'react'
import axios from 'axios';
import placeholder from './placeholder.jpg'
import {BsArrowRight} from 'react-icons/bs'

const News = () => {

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=68fdff514bd24a2585ac6e43d03f9bf2");
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const getRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * news.length);
    return news[randomIndex] || null;
  };

  const random1 = getRandomArticle();
  const random2 = getRandomArticle();
  const random3 = getRandomArticle();
  const random4 = getRandomArticle();

  return (
    <div className='p-16 border-b-[1px] border-gray-300'>

      <h1 className='text-3xl text-[#1b1b1b] font-semibold tracking-widest mb-5 text-center md:text-left'>Trending News</h1>

      <h2 className='text-2xl text-[#684d4d] font-semibold tracking-widest mb-16 text-center md:text-left'>Stay Informed, Stay Ahead: Latest News at Your Fingertips!</h2>

      <div className='md:flex justify-between'>

      {random1 && random1.urlToImage && random1.publishedAt ? ( 
        <div>
          <img src={random1.urlToImage} alt="news1" className='h-[160px] w-[280px] '/>

          <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>{random1.publishedAt}</p>

          <p className='w-[280px] my-4 text-lg font-bold'>{random1.title}</p>

          <p className='w-[280px] my-4 text-md font-normal text-gray-400'>{random1.description}</p>

        </div>
      ) : (
        <div>
          <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

          <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

          <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

          <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

        </div>
         )}

        {random2 && random2.urlToImage && random2.publishedAt ? ( 
          <div>
            <img src={random2.urlToImage} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>{random2.publishedAt}</p>

            <p className='w-[280px] my-4 text-lg font-bold'>{random2.title}</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>{random2.description}</p>

          </div>
          ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )}

        {random3 && random3.urlToImage && random1.publishedAt ? ( 
          <div>
            <img src={random3.urlToImage} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>{random3.publishedAt}</p>

            <p className='w-[280px] my-4 text-lg font-bold'>{random3.title}</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>{random3.description}</p>

          </div>
        ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )}

        {random4 && random4.urlToImage && random1.publishedAt ? ( 
          <div>
            <img src={random4.urlToImage} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>{random4.publishedAt}</p>

            <p className='w-[280px] my-4 text-lg font-bold'>{random4.title}</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>{random4.description}</p>

          </div>
          ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )}

      </div>

      <div className='w-full flex items-center justify-center'>  
        <button 
        
        className='bg-[#090909] text-white rounded-2xl px-9 py-3 text-xl font-bold flex items-center justify-center gap-5 my-12 group bg-gradient-to-b from-gray-800 via-[#1b1b1b]] to-black'>

          Explore More Latest News
          <BsArrowRight size={30} className='transition duration-300 group-hover:translate-x-4 '/>

        </button>
      </div>


    </div>
  )
}

export default News

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=68fdff514bd24a2585ac6e43d03f9bf2
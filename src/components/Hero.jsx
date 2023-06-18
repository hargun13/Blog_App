import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Fade } from 'react-reveal'


const Hero = () => {

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-06-13&to=2023-06-13&sortBy=popularity&apiKey=68fdff514bd24a2585ac6e43d03f9bf2");
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const random1 = news[Math.floor(Math.random() * news.length)]

  const random2 = news[Math.floor(Math.random() * news.length)]

  const random3 = news[Math.floor(Math.random() * news.length)]

  const random4 = news[Math.floor(Math.random() * news.length)]


  if(random1){
    return (
      <div className='p-0 pt-[105px] md:flex border-b-[1px] border-gray-300'>
      
        <div className='md:w-[55%] flex flex-col items-center h-full my-5 md:my-0 p-5'>
            
            <img  src={random1.urlToImage}  alt='hero_big' className='aspect-auto md:w-[600px] w-[800px] rounded-md'/>

            <p className='md:w-[600px] my-2 font-semibold text-sm text-gray-500 tracking-widest'>{random1.publishedAt}</p>

            <p className='md:w-[600px] text-[#090909]  my-2 text-3xl font-bold'>{random1.title}</p>

            <p className='md:w-[600px] my-2 text-gray-600 font-thin'>{random1.description}</p>

        </div>


        <div className='md:w-[45%] p-5'>
          
          <Fade right>
          <div className='flex pb-8 border-b-[1px] border-gray-300'>

            <img src={random2.urlToImage} alt='her_small1' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3'/>

            <div>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>{random2.publishedAt}</p>

            <p className=' my-2 md:text-xl text-lg font-bold text-[#090909]'>{random2.title}</p>
            </div>

          </div>
          </Fade>

          <Fade right>
          <div className='flex py-8 border-b-[1px] border-gray-300'>

            <img src={random3.urlToImage} alt='her_small2' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3'/>

            <div className=''>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>{random3.publishedAt}</p>

            <p className=' my-2 text-xl font-bold text-ellipsis text-[#090909]'>{random3.title}</p>
            </div>

          </div>
          </Fade>

          <Fade right>
          <div className='flex py-8'>

            <img src={random4.urlToImage} alt='her_small3' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3'/>

            <div>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>{random4.publishedAt}</p>

            <p className=' my-2 text-xl font-bold text-[#090909]'>{random4.title}</p>
            </div>

          </div>
          </Fade>

        </div>
      
      </div>
    )
  }

  else{
    return(
      <p>no articles found</p>
    )
  }


}


export default Hero

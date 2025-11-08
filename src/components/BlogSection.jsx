import React, { useState, useEffect } from 'react';
import { Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData} from '../redux/dataSlice';
// Mock Link component since react-router-dom isn't available
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

export default function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const dispatch = useDispatch()
  
    const {blogData, error, status} = useSelector((state)=>state.data)
  console.log(blogData)
    useEffect(()=>{
      dispatch(fetchBlogData())
    },[dispatch])



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlide = Math.max(0, blogData.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, blogData.length - slidesToShow);
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, blogData.length - slidesToShow);
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlide = Math.max(0, blogData.length - slidesToShow);


 if (status == "loading") {
    return (
      <>
        <div className="text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Loading..
        </div>
      </>
    );
  }

  if (blogData?.length == 0) {
    return (
      <>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Blog Data Not Found!
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          {error}
        </div>
      </>
    );
  }
 const formateDate = (date) => {
  if (!date) return "N/A";
  const parsed = new Date(date);
  if (isNaN(parsed)) return "Invalid Date";
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-red-100 px-4 py-2 rounded-full mb-4">
            <span className="text-red-600 font-semibold text-sm">Latest Insights</span>
          </div>
          <h2 className="text-3xl play lg:text-4xl font-bold text-gray-900 mb-4">
            <span className='text-red-600'>Our</span> Blog
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in infrastructure and environmental services.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-red-50 border border-gray-200"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-red-50 border border-gray-200"
            disabled={currentSlide >= maxSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {Array.isArray(blogData) && blogData?.map(post => (
                <div 
                  key={post._id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white aspect-auto flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-lg group">
                    {/* Image section */}
                    <div className="h-1/2 overflow-hidden">
                      <img 
                        src={post?.imageUrl} 
                        alt={post?.title} 
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content section */}
                    <div className="p-2 flex flex-col flex-grow">
                      {/* Date and Category row */}
                      <div className="flex justify-between items-center mb-3 text-xs">
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {formateDate(post?.createdAt)}
                        </div>
                        <div className="inline-flex items-center bg-red-600 px-2 py-1 rounded-sm text-xs font-medium text-white">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-lg text-black mb-2 line-clamp-2 group-hover:text-red-600 group-hover:underline transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      <p  className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm">
                        {/* {post.description} */}
                        {new DOMParser().parseFromString(post?.description, "text/html").body.textContent}
                        {/* {post.description} */}
                      </p>
                      
                      {/* Read More button */}
                      <div className="mt-auto">
                        <Link 
                          to={`/blog-detail/${post.slug}`}
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-300 group-hover:translate-x-1"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
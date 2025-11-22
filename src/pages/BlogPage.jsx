import { useEffect, useState } from "react";
import { Clock, Tag, ArrowRight, Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import blogPosts from '../data/BlogData'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState(null); 
  const dispatch = useDispatch()
  
    const {blogData, error, status} = useSelector((state)=>state.data)
  console.log(blogData)
    useEffect(()=>{
      dispatch(fetchBlogData())
    },[dispatch])

 if (status == "loading") {
    return (
      <>
       <div className='h-20 bg-black w-full'></div>
        <div className="text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Loading..
        </div>
      </>
    );
  }

  if (blogData?.length == 0) {
    return (
      <>
       <div className='h-20 bg-black w-full'></div>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Blog Data Not Found!
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
       <div className='h-20 bg-black w-full'></div>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          {error}
        </div>
      </>
    );
  }
 const formateDate = (date) => {
  if (!date) return "Date";

  try {
    // Ensure it's a Date object
    const newDate = new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return newDate;
  } catch (error) {
    console.error("Invalid date:", error);
    return "Date";
  }
};
  return (
    <>
    <Breadcrumb 
  title="Latest Insides" 
  items={[
    { name: "Blogs", path: "/blog" },
  ]}
//   bgImage="/path-to-your-image.jpg"
/>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(blogData) && [...blogData]?.reverse().map(post => (
                    <div key={post._id} className="px-3">
                      <div className="bg-white aspect-square flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                        {/* Image section */}
                        <div className="h-1/2 overflow-hidden">
                          <img 
                            src={post?.imageUrl} 
                        alt={post?.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content section */}
                        <div className="p-4 flex flex-col flex-grow">
                          {/* Date and Category row */}
                          <div className="flex justify-between items-center mb-3 text-xs">
                            <div className="flex items-center text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {formateDate(post?.createdAt)}
                            </div>
                            <div className="inline-flex items-center bg-black px-2 py-1 rounded-sm text-xs font-medium text-white">
                              <Tag className="h-3 w-3 mr-1" />
                              {post.category}
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-bold text-lg text-black mb-2 line-clamp-1">
                            {post.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                             {new DOMParser().parseFromString(post?.description, "text/html").body.textContent}
                          </p>
                          
                          {/* Read More button */}
                          <div className="mt-auto">
                            <Link 
                              to={`/blog-detail/${post?.slug}`}
                              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
      </div>
    </div>
    </>
  );
}
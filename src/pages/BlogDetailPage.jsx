import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData } from '../redux/dataSlice';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
    const dispatch = useDispatch()
  
    const {blogData, error, status} = useSelector((state)=>state.data)
useEffect(() => {
  // Fetch only if blogData is empty
  if (!blogData || blogData.length === 0) {
    dispatch(fetchBlogData());
  }
}, [dispatch, blogData]);


useEffect(() => {
  if (blogData.length > 0) {
    const currentBlog = blogData.find(blog => blog.slug === slug);
    setBlog(currentBlog);
    if (currentBlog) {
      const otherBlogs = blogData
        .filter(item => item.slug !== currentBlog.slug)
        .slice(0, 4);
      setRelatedBlogs(otherBlogs);
    }
  }
}, [slug, blogData]);


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

 if (!blog) {
  return (
    <>
    <div className='h-20 w-full bg-neutral-950'></div>

    <div className="max-w-4xl mx-auto px-4 py-20 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
      <div className="h-64 bg-gray-200 rounded mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
        </>
  );
}


  return (
    <>
      <Breadcrumb 
        title="Blog Detail" 
        items={[
          { name: "Blogs", path: "/blog" },
          { name: "Blog Detail", path: `/blog-detail/${slug}` },
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-4 group transition-all duration-300">
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to all articles
        </Link>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Blog Content - 9 columns */}
          <div className="lg:col-span-9">
            {/* Blog Header */}
            <div className="mb-6">
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                {blog?.title}
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Admin</span>
                  <p className="text-gray-600 text-sm">Published on {formateDate(blog?.createdAt)}</p>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-2xl">
              <img 
                src={blog?.imageUrl} 
                        alt={blog?.title} 
                className="w-full h-96 lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Blog Content */}
            <div className="prose blog lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-lg" 
                 dangerouslySetInnerHTML={{ __html: blog?.description || "" }}> 
            </div>
            
          </div>
          
          {/* Sidebar - Related Articles - 3 columns */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                  <h2 className="text-xl font-bold">Related Articles</h2>
                  <p className="text-green-100 text-sm mt-1">You might also like</p>
                </div>
                
                <div className="p-2">
                  <div className="space-y-6">
                    {relatedBlogs?.map((article, index) => (
                      <div key={article.id} className={`${index !== relatedBlogs.length - 1 ? 'border-b border-gray-100 pb-6' : ''}`}>
                        <Link to={`/blog-detail/${article?.slug}`} className="group block">
                          <div className="relative rounded-xl overflow-hidden mb-3">
                            <img 
                              src={article?.imageUrl} 
                              alt={article?.title} 
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          {/* <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {article?.category}
                          </span> */}
                          
                          <h3 className="font-bold text-sm mt-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 leading-snug">
                            {article?.title}
                          </h3>
                          
                          <div className="flex items-center mt-2 text-gray-500 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{formateDate(article.createdAt)}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link 
                      to="/blog" 
                      className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      View All Articles
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
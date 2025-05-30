import { useState, useEffect } from 'react';
import { Clock, Heart, MessageCircle, ChevronLeft, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import blogData from '../Data/BlogData'
import Breadcrumb from '../components/Breadcrumb';
export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  
  useEffect(() => {
    const currentBlog = blogData.find(blog => blog.slug === slug);
    setBlog(currentBlog);
    
    if (currentBlog) {
      const otherBlogs = blogData.filter(item => item.id !== currentBlog.id).slice(0, 3);
      setRelatedBlogs(otherBlogs);
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium">Loading...</p>
      </div>
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
    //   bgImage="/path-to-your-image.jpg"
    />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link to="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-6 group transition-all">
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to all articles
      </Link>
      
      {/* Blog Header */}
      <div className="mb-10">
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">{blog.category}</span>
        <h1 className="text-2xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{blog.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <span className="font-medium">Admin</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover"
        />
      </div>
      
      {/* Social Share Sidebar */}
      <div className="lg:flex gap-12">
        <div className="hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <BookmarkPlus className="w-5 h-5" />
          </button>
        </div>
        
        {/* Blog Content */}
        <div className="lg:flex-1">
          <div className="prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          
          {/* Mobile Social Bar */}
          <div className="flex justify-between items-center lg:mt-12 mt-6 lg:hidden p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <span className="font-medium">{blog.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <span className="font-medium">{blog.comments}</span>
            </div>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <BookmarkPlus className="w-5 h-5" />
            </button>
          </div>
          
          {/* Author Section */}
          <div className="mt-1 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-4">
              {/* <div className="w-16 h-16 rounded-full bg-gray-300"></div> */}
              <div>
                {/* <h3 className="font-bold text-lg">Admin</h3> */}
                <p className="text-gray-700 text-justify">Description: {blog.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* More Articles Section */}
      <div className="mt-24">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">More Articles</h2>
          <Link to="/blog" className="flex items-center text-red-600 hover:text-red-800 font-medium group">
            View all 
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((article) => (
            <div key={article.id} className="group">
              <Link to={`/blog-detail/${article.slug}`} className="block">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-red-600">{article.category}</span>
                <h3 className="font-bold text-xl mt-2 group-hover:text-red-600 transition-colors">{article.title}</h3>
              </Link>
              <div className="flex items-center mt-4 text-gray-600 text-sm">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
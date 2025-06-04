import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ArrowRight } from 'lucide-react';
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
      const otherBlogs = blogData.filter(item => item.id !== currentBlog.id).slice(0, 4);
      setRelatedBlogs(otherBlogs);
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-red-600 rounded-full animate-bounce"></div>
          <p className="text-xl font-medium mt-4">Loading...</p>
        </div>
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
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-8 group transition-all duration-300">
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to all articles
        </Link>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Blog Content - 9 columns */}
          <div className="lg:col-span-9">
            {/* Blog Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  {blog.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                {blog.title}
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Admin</span>
                  <p className="text-gray-600 text-sm">Published on {blog.date}</p>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-2xl">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Blog Content */}
            <div className="prose lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-red-500 prose-blockquote:bg-red-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-lg" 
                 dangerouslySetInnerHTML={{ __html: blog.content }}>
            </div>
            
            {/* Author Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  A
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">About the Author</h3>
                  <p className="text-gray-700 leading-relaxed">{blog.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Related Articles - 3 columns */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                  <h2 className="text-xl font-bold">Related Articles</h2>
                  <p className="text-red-100 text-sm mt-1">You might also like</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {relatedBlogs.map((article, index) => (
                      <div key={article.id} className={`${index !== relatedBlogs.length - 1 ? 'border-b border-gray-100 pb-6' : ''}`}>
                        <Link to={`/blog-detail/${article.slug}`} className="group block">
                          <div className="relative rounded-xl overflow-hidden mb-3">
                            <img 
                              src={article.image} 
                              alt={article.title} 
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          
                          <h3 className="font-bold text-sm mt-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                            {article.title}
                          </h3>
                          
                          <div className="flex items-center mt-2 text-gray-500 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{article.date}</span>
                            <span className="mx-1">•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link 
                      to="/blog" 
                      className="flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 group"
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
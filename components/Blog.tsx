
import React, { useState, useEffect } from 'react';
import { Translation, BlogPost } from '../types';

interface BlogProps {
  t: Translation;
}

const Blog: React.FC<BlogProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Scroll to top when post is selected/deselected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const filteredPosts = activeCategory === 'all' 
    ? t.blog.posts 
    : t.blog.posts.filter(post => post.category.toLowerCase() === activeCategory);

  const categories = [
    { id: 'all', label: t.blog.categories.all },
    { id: 'history', label: t.blog.categories.history },
    { id: 'benefits', label: t.blog.categories.benefits },
    { id: 'research', label: t.blog.categories.research },
    { id: 'tips', label: t.blog.categories.tips },
  ];

  // Render JSON-LD for SEO
  const renderSchema = (post: BlogPost) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "image": post.image,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hijama Harmony",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hijamaharmony.se/images/logo.png"
        }
      },
      "datePublished": post.date,
      "description": post.excerpt
    };
    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
  };

  if (selectedPost) {
    return (
      <section className="pt-32 pb-24 bg-stone-50 min-h-screen">
        {renderSchema(selectedPost)}
        <div className="container mx-auto px-6 max-w-4xl">
           <button 
             onClick={() => setSelectedPost(null)}
             className="flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors mb-8 font-medium group"
             aria-label={t.blog.backToBlog}
           >
             <span className="p-2 rounded-full bg-white border border-stone-200 group-hover:border-sage-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
             </span>
             {t.blog.backToBlog}
           </button>

           <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
             <div className="h-64 md:h-96 w-full relative">
                <img 
                  src={selectedPost.image + "&w=1200"} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="600"
                />
                <div className="absolute top-6 left-6">
                   <span className="bg-white/90 backdrop-blur text-sage-800 px-4 py-1 rounded-full text-sm font-bold shadow-sm border border-sage-100 uppercase tracking-wider">
                     {selectedPost.category}
                   </span>
                </div>
             </div>
             
             <div className="p-8 md:p-16">
               <div className="flex items-center gap-4 text-sm text-stone-400 mb-6 border-b border-stone-100 pb-6">
                 <span className="font-medium text-sage-600">{selectedPost.date}</span>
                 <span aria-hidden="true">•</span>
                 <span className="font-medium">{selectedPost.author}</span>
               </div>
               
               <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald-950 font-bold mb-8 leading-tight">
                 {selectedPost.title}
               </h1>

               {/* Applied detailed typography classes for structure and premium feel */}
               <div 
                 className="prose prose-lg prose-stone max-w-none 
                 prose-headings:font-serif prose-headings:font-bold prose-headings:text-emerald-900 
                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                 prose-h3:text-2xl prose-h3:text-emerald-800
                 prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6
                 prose-strong:text-emerald-900 prose-strong:font-semibold
                 prose-ul:my-6 prose-li:my-2 prose-li:text-stone-700
                 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline"
                 dangerouslySetInnerHTML={{ __html: selectedPost.content }}
               >
               </div>

               <div className="mt-16 pt-8 border-t border-stone-100 flex justify-between items-center">
                  <p className="text-stone-400 italic text-sm">Delas på sociala medier</p>
                  <div className="flex gap-4">
                     {/* Social placeholders */}
                     <button aria-label="Share on Facebook" className="w-8 h-8 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                     </button>
                     <button aria-label="Share on Twitter" className="w-8 h-8 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                     </button>
                  </div>
               </div>
             </div>
           </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            {t.blog.subtitle}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 font-medium mb-6">
            {t.blog.title}
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist">
           {categories.map(cat => (
             <button
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               role="tab"
               aria-selected={activeCategory === cat.id}
               className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                 activeCategory === cat.id 
                 ? 'bg-sage-800 text-white shadow-lg shadow-sage-900/20 transform scale-105' 
                 : 'bg-white text-stone-500 border border-stone-200 hover:border-sage-300 hover:text-sage-700 hover:bg-stone-50'
               }`}
             >
               {cat.label}
             </button>
           ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-pointer h-full border border-stone-100"
              onClick={() => setSelectedPost(post)}
              role="article"
            >
              <div className="h-56 w-full relative overflow-hidden">
                 <img 
                   src={post.image + "&w=600"} 
                   alt={post.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   loading="lazy"
                   decoding="async"
                   width="600"
                   height="400"
                 />
                 <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur text-sage-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                      {post.category}
                    </span>
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 text-xs text-stone-400 mb-4 font-medium uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-sage-300 rounded-full" aria-hidden="true"></span>
                    <span>{post.author}</span>
                 </div>
                 
                 <h3 className="font-serif text-2xl text-stone-900 font-bold mb-4 leading-tight group-hover:text-sage-700 transition-colors">
                   {post.title}
                 </h3>
                 
                 <p className="text-stone-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                   {post.excerpt}
                 </p>
                 
                 <div className="flex items-center text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all mt-auto pt-4 border-t border-stone-50">
                    {t.blog.readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";
import BlogCard from "./BlogCard";
import bloggInnlegg from "../bloggInnlegg";

export default function Blog() {
  // const [blogs, setBlogs] = useState([    
// { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
// { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
// { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
// ]);

const liste = bloggInnlegg.map(x => <BlogCard tittel={x.tittel} tekst={x.tekst}/>)

  return (
    <div className="blog">
        {liste}
    </div>
  );
}

/**
 *  <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="Mario's Blogs" />
 */

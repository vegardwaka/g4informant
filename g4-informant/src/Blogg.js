import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

export default function Blogg() {
  const [blogs, setBlogs] = useState([    
{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]);

  return (
    <div className="blogg">
      <BlogList blogs={blogs} title="All Bloggs" />
      <BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="Marios bloggs" />
    </div>
  );
}

//fsddsfdfsd
 
import React from "react";
import BlogCard from "./BlogCard";
import bloggInnlegg from "../json/bloggInnlegg";

export default function Blog() {
  const liste = bloggInnlegg.map(x => {
    return(
       <BlogCard 
          key={x.id} 
          item={x}
       />
    )
  })


  return (
    <section className="blog">
        {liste}
    </section>
  );
}


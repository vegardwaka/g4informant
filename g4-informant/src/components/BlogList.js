export default function BlogList(props) {
    const blogs = props.blogs;
    const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <button className="blog-pdf">{blog.url}</button>
            </div>
            ))}
        </div>
    );
}
 
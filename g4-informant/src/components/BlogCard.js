export default function BlogCard(props) {
    return(
        <div className="blog-card">
            <h1 className="blog-tittel">{props.item.title}</h1>
            <p>{props.item.description}</p>
        </div>
    )
}
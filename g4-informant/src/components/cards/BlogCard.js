export default function BlogCard(props) {
    return(
        <div className="blog-card">
            <h1 className="blog-tittel">{props.item.title}</h1>
            <p>{props.item.description}</p>
            <p className="blog-link"><a href={props.item.url} download>{props.item.urlName}</a></p>
        </div>
    )
}
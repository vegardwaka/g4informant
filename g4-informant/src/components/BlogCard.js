export default function BlogCard(props) {
    return(
        <div className="blog-card">
            <h1 className="blog-tittel">{props.tittel}</h1>
            
            <p>{props.tekst}</p>
        </div>
    )
}
export default function HomeCard(props) {
    return(
        <div className="home-card-container">
            <img src={props.item.image} alt="" />
            <h2 className="home-card-title">{props.item.title}</h2>
            <p className="home-card-desc">{props.item.desc}</p>
        </div>
    )
}
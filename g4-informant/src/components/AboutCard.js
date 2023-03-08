export default function AboutCard(props) {
    return(
        <div className="about-card">
            <img className="about--img" src={`/images/${props.item.img}`} alt="team member" />
            <h3 className="about--name">{props.item.name}</h3>
            <p className="about--desc">{props.item.description}</p>
        </div>
    )
}
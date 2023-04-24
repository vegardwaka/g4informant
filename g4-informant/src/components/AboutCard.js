export default function AboutCard(props) {

    return(
        <div className="about-card">
            <img className="about--img" src={`/images/${props.item.img}`} alt="team member"/>
            <h2 className="about--name">{props.item.name}</h2>
            <p className="about--role">{props.item.role}</p>
            <h5 className="about--desc">{props.item.description}</h5>
        </div>
    )
}
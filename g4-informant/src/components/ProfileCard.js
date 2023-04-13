import Template from "./templates/Template"

export default function ProfileCard(props) {

    return(
        <div className="profile-card">
            <h2>Screen {props.number}</h2>
            <div className="profile-screen">
                <Template 
                  count={4}
                  height="50%"
                  width="50%"
                />
            </div>
            <div className="profile-buttons">
                <button className="profile--display">Display screen</button>
                <button className="profile--edit">Edit</button>
                <button className="profile--delete" onClick={() => props.toggle(props.id)}>Delete</button>
            </div>
        </div>
    )
}
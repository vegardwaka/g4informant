import Template from "./templates/Template"
import { confirmAlert } from 'react-confirm-alert'

export default function ProfileCard(props) {
    
    /* const handleDelete = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        })
    } */

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
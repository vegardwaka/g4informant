import Template from "./templates/Template"

export default function ProfileCard() {
    
    /* const handleSubmit = () => {
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
        });
      }; */

    return(
        <div className="profile-card">
            <h2>Skjerm 1</h2>
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
                <button className="profile--delete">Delete</button>
            </div>
            
        </div>
    )
}
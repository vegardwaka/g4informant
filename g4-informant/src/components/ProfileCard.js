import Template from "./templates/Template"

export default function ProfileCard(props) {

    function deleteScreen() {
        async function deleteScreen(data) {
            await fetch(`http://localhost:3001/data/${props.tittel}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data.message)
            })
            .catch(error => {
              console.error(error)
            })
          }

        async function deleteFromDatabase() {

            //FIX FETCH LINKEN -VEBJØRN FUCK
            const response = await fetch(`https://g4informant.com/api.php/records/infoskjerm/?filter=tittel,eq,${props.tittel}&user_name,eq,${localStorage.getItem('token')}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"infoskjerm_id":props.id ,"tittel": props.tittel,"user_name": props.user_name})
            })
            .then(response => {
                return response.json()
            })
            .then(data => { 
                console.log(data)
                if (data.code === 1001) {
                    window.alert("table not found")
                    return null
                } else if (data.code === 9999) {
                    console.log(data.code)
                    window.alert("Something went wrong. Try again!")
                    return null
                } else {
                    console.log(data)
                    window.alert("Screen deleted!")
                    deleteScreen()
                    props.toggle(props.tittel)
                }
            })
        }
        deleteFromDatabase()
    }

    return(
        <div className="profile-card">
            <h2>Screen {props.tittel}</h2>
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
                <button className="profile--delete" onClick={deleteScreen}>Delete</button>
            </div>
        </div>
    )
}
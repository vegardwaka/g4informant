import ProfileCard from './ProfileCard'

export default function Profile(){
    return(
        <div className="profile-container">
            <h1 className="profile-title">Hi, {localStorage.getItem('token').replace(/"/g, "")}!</h1>
            <div className="profile-workbench">
                <h2 className="profile--header">Your information screens</h2>
                <div className="profile-workbench-container">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </div>
            </div>
        </div>
    )
}
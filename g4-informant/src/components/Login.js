export default function Login() {
    return (
        <div className="login-container">
            <form className="login--form">
                <h2 className="login--title">Logg inn</h2>
                <input type="text" className="input--email" placeholder="Email..."/><br/>
                <input type="password" className="input--password" placeholder="Password..."/><br/>
                <button className="login--button">submit</button>
                <br/>
                <p className="input--feil">Passord er feil!</p>
            </form>
        </div>
    )
}
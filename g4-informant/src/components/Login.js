export default function Login() {
    return (
        <div className="login-container">
            <form className="login--form">
                <input type="text" className="input--email" placeholder="Email..."/><br/>
                <input type="text" className="input--password" placeholder="Password..."/><br/>
                <input type="submit" className="login--button" value="Logg inn"/>
                <br/>
                <p className="input--feil">Passord er feil!</p>
            </form>
        </div>
    )
}
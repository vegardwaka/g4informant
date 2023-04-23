export default function Footer() {
    return (
      <div className="footer">
            <img src="" alt="logo" />
            <div className="footer-gh">
              <h4>G4 Informant</h4>
              <a href="https://github.com/vegardwaka/g4informant"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="githubpic" id="gh-logo"/></a>
              <small>Github Repo</small>
            </div>
            <div className="footer-usn">
              <img src="https://www.usn.no/getfile.php/13520469-1677146025/usn.no/om_USN/Logo%20og%20grafiske%20elementer/USN_logotype.png" alt="usn-logo" id="usn-logo"/>
              <small>Universitetet i Sørøst Noreg</small>
              <br />
            </div>
      </div>
    )
}
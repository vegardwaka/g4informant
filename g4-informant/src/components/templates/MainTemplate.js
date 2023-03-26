export default function MainTemplate(props) {
    let nyListe = []
    for(let i=0; i<props.antall; i++)
        nyListe[i] = i;

    const liste = nyListe.map(x => 
        <div 
            className="div1" 
            onClick={props.swap} 
            style={{width: props.bredde, height: props.hoy}}>
            <button className="feature-button">Add Feature +</button>
        </div>
    )

    return (
        <div className="templateBoxMain">
            {liste}
        </div>
    )
}
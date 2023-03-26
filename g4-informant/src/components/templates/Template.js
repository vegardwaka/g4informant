export default function Template(props) {
    let nyListe = []
    for(let i=0; i<props.antall; i++)
        nyListe[i] = i;

    const liste = nyListe.map(x => 
        <div 
            className="div1" 
            onClick={props.swap } 
            style={{width: props.bredde, height: props.hoy}}>
        </div>
    )

    return (
        <div className="templateBox" >
            {liste}
        </div>
    )
}
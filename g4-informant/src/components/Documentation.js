import DocumentationCard from './cards/DocumentationCard'
import documentation from "../json/documentation"

export default function Documentation(props){
    props.foot(true)
    const card = documentation.map(x =>
        <DocumentationCard
            key={x.id} 
            id={x.id} 
            title={x.title} 
            desc={x.desc}
        />
    )
    
    return(
        <div className="documentation-container">
            <h1 className="workbench-title">Documentation</h1>
            <div className="documentation-card-container">
                {card}
            </div>
        </div>
    )
}
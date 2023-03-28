import Template from './Template'
import TemplateVertical from './TemplateVertical'

export default function TemplateList({ onQueryObj, onQueryHide, onQueryList}) {

    function handleClick(count, height, width) {
        onQueryObj({count: count, height: height, width: width})
        onQueryHide(true)
        onQueryList(false)
    }
    
    return (
        <div className="workbench-template-list" style={{display: onQueryList ? 'block' : 'none'}} >
            <h3 className="template-title">Templates</h3>
            <div className="workbench-templates">
                <Template 
                    count="4"
                    height="50%"
                    width="50%"
                    swap={() => handleClick(4, "50%", "50%")}
                />
                <Template 
                    count="6" 
                    height="50%"
                    width= "33.3%"
                    swap={() => handleClick(6, "50%", "33.3%")}
                />
                <Template 
                    count="2" 
                    height="100%"
                    width="50%" 
                    swap={() => handleClick(2, "100%", "50%")}
                />
                <Template 
                    count="2" 
                    width="100%" 
                    swap={() => handleClick(2, "50%", "100%")}
                />
                <Template 
                    count="4"
                    height="100%"
                    width="25%"
                    swap={() => handleClick(4, "100%", "25%")}
                />
                <Template 
                    count="4"
                    height="25%"
                    width="100%"
                    swap={() => handleClick(4, "25%", "100%")}
                />
                <TemplateVertical 
                    count="4"
                    height="50%"
                    width="50%"
                    swap={() => handleClick(4, "50%", "50%")}
                />
                <TemplateVertical 
                    count="6"
                    height="50%"
                    width="33.3%"
                    swap={() => handleClick(6, "50%", "33.3%")}
                />
            </div>
        </div>
    )
}
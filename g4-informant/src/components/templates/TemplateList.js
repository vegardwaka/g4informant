import Template from './Template'
import TemplateVertical from './TemplateVertical'
import templatesH from "../../json/templatesH"
import templatesV from "../../json/templatesV"

export default function TemplateList({ onQueryObj, onQueryHide, onQueryList}) {

    const templateListH = templatesH.map(x => 
        <Template 
            count= {x.count}
            height={x.height}
            width={x.width}
            swap={() => handleClick(x.count, x.height, x.width)}
        />
    )

    const templateListV = templatesV.map(x =>
        <TemplateVertical 
            count = {x.count}
            height = {x.height}
            width = {x.width}
            swap={() => handleClick(x.count, x.height, x.width)}
        />
    )

    function handleClick(count, height, width) {
        onQueryObj({count: count, height: height, width: width})
        onQueryHide(true)
        onQueryList(false)
    }
    
    return (
        <div className="workbench-template-list" style={{display: onQueryList ? 'block' : 'none'}} >
            <h3 className="template-title">Templates</h3>
            <div className="workbench-templates">
                {templateListH}
                {templateListV}
            </div>
        </div>
    )
}
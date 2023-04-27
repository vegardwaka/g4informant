import Template from './Template'
import templatesH from "../../json/templatesH"

export default function TemplateList({ setTemplateStyle, setHideInputs, setChangeList}) {
    
    const templateListH = templatesH.map(x => 
        <Template 
            count={x.count}
            height={x.height}
            width={x.width}
            swap={() => handleClick(x.count, x.height, x.width)}
        />
    )

    function handleClick(count, height, width) {
        setTemplateStyle({count: count, height: height, width: width})
        setHideInputs(true)
        setChangeList(false)
    }
    
    return (
        <div className="workbench-template-list" style={{display: setChangeList ? 'block' : 'none'}} >
            <h3 className="template-title">Templates</h3>
            <div className="workbench-templates">
                {templateListH}
            </div>
        </div>
    )
}

function Overview({title,number,percent,bgColor,image,icon,txtColor}){
    return(
        <div style={{backgroundColor:bgColor}} className="ocard">
            <div className="oinner">
                <p className="gray">{title}</p>
                <img  className="socialimages" src={image} alt="" />
            </div>
            <div className="oinner">
                <p className="number">{number}</p>
                <p className="percent" style={{color:txtColor}}><img src={icon} alt="" />{percent}</p>
            </div>
        </div>
    )
}

export default Overview
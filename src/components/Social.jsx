
function Social({name,followers,status,today,bgColor,image,icon,txtColor}) {
    return (
        <div style={{backgroundColor:bgColor}} className="scard">
            <p className="name gray"> <img src={image} alt=""></img> {name}</p>
            <h1 className="followers ">{followers}</h1>
            <p className="tag gray">{status}</p>
            <p className="today" style={{color:txtColor}}> <img src={icon} alt="icon" /> {today}</p>
        </div>
    )
}

export default Social
const CardHeader = ({title,logo}) =>{
    return(
        <div className="card-header">
        <i className={`fa-brands fa-${logo}`}></i>
        <h1>{title}</h1>
        <span></span>
        </div>
    )

}
export default CardHeader
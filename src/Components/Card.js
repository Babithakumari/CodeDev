import CardHeader from "./CardHeader"
import CardBody from "./CardBody"

const Card = ({title,logo}) =>{
    return (
        <div className="card">
            <CardHeader title={title} logo={logo}/>
            <CardBody/>

        </div>
    )

}
export default Card;
import {useState} from "react"


const CardBody = () =>{

    const [code,setCode] = useState("")

    const handleChange = (e) =>{
        const newCode = e.target.value
        setCode(newCode)
        

    }
    return(
        <div className="card-body">
            <textarea rows="18" cols="65" onChange={(e)=>handleChange(e)} value={code}>

            </textarea>

        </div>
    )

}
export default CardBody
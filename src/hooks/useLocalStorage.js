import {useEffect,useState} from "react"

// to know name of localstorage
const PREFIX = "codepen-clone-"

const useLocalStorage = (key,initialValue) => {

    
    const prefixedKey = PREFIX + key

    // GET VALUE FROM LOCALSTORAGE
    const [value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)

        if(jsonValue!=null) return JSON.parse(jsonValue)
        else{
            return initialValue
        }

        
    })

    // STORE VALUE INTO LOCALSTORAGE
    useEffect(() =>{
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    
    },[prefixedKey,value])

    return [value,setValue]
    
    

}
export default useLocalStorage;


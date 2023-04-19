import { useNavigate } from "react-router-dom"
import Button from "../../../shared/UI/Button/Button"

export const PageError = () => {
    const navigate = useNavigate()
    return ( 
        <div className="PageError">
            Something went wrong

            <Button onClick={()=>{
                navigate('/')
                location.reload()
            }} type='secondary'>    
                Back To Hame page
            </Button>
        </div>
    )
}
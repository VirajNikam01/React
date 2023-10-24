import { useRouteError } from "react-router-dom"

const Error = ()=>{

    const error = useRouteError()
    console.log(error);

    return(
        <div className="error">
                <h3 style={{backgroundColor:"red", color:"white"}}>ohHu Error Page</h3>
        </div>
    )
}

export default Error;
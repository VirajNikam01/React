import { useRouteError } from "react-router-dom"

const ErrorPage = ()=>{
    const error = useRouteError()
    console.log(error);
    
    return(
        <div className="error-page">
            <h1><b>Error </b> {error.status}</h1>
            <p><b>{error.error.message}</b></p>
        </div>
    )
}

export default ErrorPage;
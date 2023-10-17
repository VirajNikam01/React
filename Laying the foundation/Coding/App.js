import React from 'react'
import ReactDOM from 'react-dom/client'



function Heading(){

    return <h1>Normal Function</h1>
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)
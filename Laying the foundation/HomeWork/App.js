import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=>{


    return(
        <div className="header">
           <i class="fa-brands fa-react logo"></i>
           <div className="search-box">
                    <input type="text"
                    placeholder="search heare..."
                    />
                    <i class="fa-solid fa-magnifying-glass search"></i>
           </div>

           <i class="fa-solid fa-user user"></i>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)
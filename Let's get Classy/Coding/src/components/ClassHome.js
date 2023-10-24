import React, { Component } from 'react'

class ClassHome extends Component{
    constructor(){
        super()
        this.state = {
            info:{}
        }
    }

    async componentDidMount(){
            const request = await fetch("https://api.github.com/users/VirajNikam01")
            const json = await request.json()
            console.log(json);

            this.setState={
                info: json,
            }
    }
    
    render(){
        console.log(this.state.info);
        return(
            <div className='classhome'>
                    class
            </div>
        )
    }
}

export default ClassHome;
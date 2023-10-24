import {useState, useEffect } from "react";

const Home = ()=>{
    const [userInfo, setUserInfo] = useState({})

    useEffect(()=>{
        fetchGit()
    }, [])

    const fetchGit = async ()=>{
      const request = await fetch("https://api.github.com/users/VirajNikam01")
      const json = await request.json()
      setUserInfo(json)
    }
    console.log(userInfo);
    const {name, avatar_url, bio, repos_url, events_url} = userInfo
    console.log(name);

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
           <h1>Name : {name}</h1>
           <img src={avatar_url} alt={name} style={{width:"150px"}} />
           <p style={{textAlign:"center"}}>{bio}</p>

           <a href={repos_url}>Repositories</a>
        </div>
    )
}

export default Home;
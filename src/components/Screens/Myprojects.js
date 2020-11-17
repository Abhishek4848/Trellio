import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import SideNav from "./SideNav";
import "./Project.css";

function Myprojects() {
    
    const [data,setdata] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/profile/me/",{
            method:"get",
            headers:{
                "x-auth-token":localStorage.getItem('token')
            }
        })
        .then((res) => res.json())
        .then((res) => {
            setdata(res)
        })
    },[data])

   // console.log(data)

    let history = useHistory()

    const submitHandler = (pid) => {
        try{
            console.log(pid)
            const url = "http://localhost:5000/api/profile/delete/"+pid
            fetch(url, {
    
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
            })
            .then(res => {
                alert("deleted")
            })
        }
        catch(err){}
        history.push("/Myprojects")
    }

    const updateForm = (pid)=>{
        localStorage.setItem('pid',pid);
        history.push("/UpdatePosts")
    }
    let h = ""
    if(data.length === 0)
    {
        h+="no posts"
    }
    return (
        <div>
        <div className="header">
       <h1>MY PROJECTS</h1>
       </div>
           <SideNav />
        <h1>{h}</h1>
    
   { data.map((response) => {
       return(
        <div className="cards" key={response._id}>
        <div className="card card1">
            <div className="details">
                <span>
                <img src= {response.user.avatar} alt="logo"></img><br></br>
                author : {response.user.name}<br></br>
                posted on : {response.date}
                </span>
                <br></br><br></br>
                <hr></hr>
                <br></br>
                <h2> {response.title} </h2>
                <p> {response.desc} </p>
                <p>Tech Stack: {response.techStack}</p>
                <p>Rating : {response.rating}</p>
                <hr></hr>
               <div className="tags">
                   <button className="random" onClick = {() => submitHandler(response._id)}>DELETE</button>
                   <button className="random" onClick = {() => updateForm(response._id)}>UPDATE</button>
                   <a href = {response.git} rel="noopener noreferrer" target="_blank">
                            <button className="random">View Project</button>
                        </a>
               </div>
               </div>
   </div>
   </div>
       )
   })
}
   
</div> 
    )
}

export default Myprojects

import React,{useState,useEffect,} from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import './POSTS.css';
import SideNav from './SideNav';

function POSTS() {
    const [userdata,setuserdata] = useState([])

    const [desc,setDesc] = useState('')
    const [title,setTitle] = useState('')

    useEffect(() => 
     {
        fetch("http://localhost:5000/api/auth", {

        method: "get",
        headers: {
            "x-auth-token": localStorage.getItem('token')
        }
        })
        .then((res) => res.json())
        .then( res => {
            //console.log(res)
            setuserdata(res)
        })
    },[])
    //console.log(userdata)
    let i = ''
    let name = ''
    if(userdata)
    {
        i = userdata._id
        localStorage.setItem('id',i)
        name = userdata.name
    }
    let history = useHistory();
    const submitHandler = event => {
        try{
            event.preventDefault()
    
            fetch("http://localhost:5000/api/profile", {
    
            method: "post",
    
            body: JSON.stringify({
                desc, title
            }),
            headers: {
                "Content-type": "application/json",
                "x-auth-token": localStorage.getItem('token')
            }
            })
            .then((res) => res.json())
            .then(res => {
                //console.log(res)
                history.push("/Projects")
            })
        }
        catch(err){}
    }
    return (
        // <div>
        //     <Navbar />
            
        //     <p>logged id : {i}</p>
        //     <p>logged in is  {name}</p>
        //     <div>
        //         <form onSubmit = {submitHandler}>
        //         <label>Project Details</label>
        //         <input type="text" onChange = {(e) => setDesc(e.target.value)}></input><br></br>
        //         <label>Project Title</label> 
        //         <input type="text" onChange = {(e) => setTitle(e.target.value)}>
        //         </input>
        //         <br></br>
        //         <input type = "submit" value = "submit"></input>                  
        //         </form>
        //     </div>

        // </div>
        <div>
        <div className="header">
        <h1>Trellio.</h1>
        <h3>MEET . CONNECT . COLLABORATE</h3>
        </div>
        <SideNav />
        <div class="wrapper">
        <div class="title">
          <h1>Start New Project</h1>
        </div>
        <form onSubmit = {submitHandler}>
        <div class="contact-form">
          <div class="input-fields">
            <input type="text" class="input" onChange = {(e) => setDesc(e.target.value)} placeholder="Project Title"></input>
            <input type="text" class="input" onChange = {(e) => setTitle(e.target.value)} placeholder="Description"></input>
            <input type="text" class="input" placeholder="Technologies Used"></input>
            <input type="text" class="input" placeholder="Experience required"></input>
            <input type="submit" class="createbtn" value="Create Project"></input> 
          </div>
        </div>
        </form>
      </div>
      </div>
    )
}

export default POSTS;

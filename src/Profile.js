import { Card } from '@material-ui/core'
import React from 'react'
import MediaCard from './MediaCard'
import Navbar from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios'

function Profile() {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(false)
    const [src, setsrc] = useState("");
  const [title, settitle] = useState("")
  const [first, setfirst] = useState("")
  const [last, setlast] = useState("")
  const [cell, setcell] = useState("")
  const [age, setage] = useState()
  const [email, setemail] = useState("")
  const [location, setlocation] = useState("")
  const [registered, setregistered] = useState("")
  const [username, setusername] = useState("")
  const [id, setid] = useState("")

    useEffect(() => {
        const getuser = async ()=>{
            setloading(true)
            //get request->
            // axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            //     setposts(response.data)
            // })
            //Async await
            const res = await axios.get("https://randomuser.me/api/");
            setuser(res.data);
            setsrc(res.data.results[0].picture.large)
            settitle(res.data.results[0].name.title)
            setfirst(res.data.results[0].name.first)
            setlast(res.data.results[0].name.last)
            setage(res.data.results[0].dob.age)
            setcell(res.data.results[0].cell)
            setusername(res.data.results[0].login.username)
            setemail(res.data.results[0].email)
            setlocation(res.data.results[0].location.city +", "+ res.data.results[0].location.state+", "+res.data.results[0].location.city)
            setid(res.data.results[0].id.name+res.data.results[0].id.value)
            setregistered(res.data.results[0].registered.date)
            setloading(false)
            console.log(user)
        
        } 
         getuser();
        }, [])
        
    return (
        <div>
             <Navbar/>
             
             <div className='card-box'>

             <MediaCard user={user} loading={loading} src={src} title={title} first={first} last={last} age={age} cell={cell} username={username} email={email} location={location} id={id} registered={registered}/>
             </div>
        </div>
    )
}

export default Profile

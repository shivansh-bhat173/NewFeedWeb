import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Post from './Post'

import Pagination from './Pagination';


 
function Postbox() {
    const [posts, setposts] = useState([]);
    const [postsperpage, setpostsperpage] = useState(10);
    const [currPage, setcurrPage] = useState(1);
    const [loading, setloading] = useState(false);
    
   
    // using useEffect to make axios get request(or use async await) as the page first loads the request is madee
    useEffect(() => {
        const getpost = async ()=>{
            setloading(true);
            //get request->
            // axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            //     setposts(response.data)
            // })
            //Async await
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setposts(res.data)
            
            setloading(false);
            
        } 
        
        getpost();
        
    }, [])
    
    
    // logic to cut flow of posts
    const lastidx = currPage*postsperpage;
    const fidx = lastidx-postsperpage;
    const currposts = posts.slice(fidx,lastidx);
    const paginate = (pageNumber) => {setcurrPage(pageNumber)};
    
    return (
        <div className='box'>
        <div className='postbox mb-2'>
            
            
            {/* <span>{currposts.map((post)=>{
                return <Post posts={post} loading={loading} key={post.id} />
            })}</span> */}
            <Post posts={currposts} loading={loading} />
            <div className='pagin-div'>

            <Pagination
        postsperpage={postsperpage}
        totalposts={posts.length}
        paginate={paginate}
        />
        </div>
            </div>
        </div>
    )
}

export default Postbox

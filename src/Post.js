import React from 'react'
import './App.css';
import { useState,useEffect } from 'react';

function Post({posts,loading}) {
    

    
    const [hasup, sethasup] = useState(false);
    const [hasdown, sethasdown] = useState(false)
    const [votes, setvotes] = useState(0);
    if(loading){
        return <h4>Loading...</h4>
    }

    let count = 0;
    function voter(val){
        let element = document.getElementsByClassName('fa-thumbs-up')[0];
        let elem = document.getElementsByClassName('fa-thumbs-down')[0];
        count++;
        // if(hasup===true && hasdown===true){
        //     sethasdown(false)
        //     sethasup(false)
        //     return;
        // }
        if(hasup===true && val==='hasUpVoted'){
            setvotes(votes-1)
            sethasup(false)
            element.classList.remove('fas');
            element.classList.add('far');
            return;
        }
        if(hasdown===true && val==='hasDownVoted'){
            setvotes(votes+1)
            sethasdown(false)
            elem.classList.remove('fas');
            elem.classList.add('far');
            return;
        }

        if(val==='hasUpVoted'){
            if(hasdown==false && hasup===false){
                sethasup(true)
                element.classList.remove('far');
                element.classList.add('fas');
                setvotes(votes+1)
            }
            if(hasup===true && hasdown===false){
                sethasup(false)
                element.classList.remove('far');
                element.classList.add('fas');
                setvotes(votes-1)
            }
            if(hasup=== false && hasdown===true){
                sethasdown(false);
                sethasup(true)
                elem.classList.remove('fas')
                elem.classList.add('far')
                element.classList.remove('far');
                element.classList.add('fas');
                setvotes(votes+2)
            }

        }if(val==='hasDownVoted'){
            if(hasdown==false && hasup===false){
                sethasdown(true)
                elem.classList.remove('far');
                elem.classList.add('fas');
                setvotes(votes-1)
            }
            if(hasup===false && hasdown===true){
                sethasup(false)
                
                element.classList.remove('fas');
                element.classList.add('far');
                setvotes(votes-1)
            }
            if(hasup=== true && hasdown===false){
                sethasdown(true);
                sethasup(false)
                elem.classList.remove('far')
                elem.classList.add('fas')
                element.classList.remove('fas');
                element.classList.add('far');
                setvotes(votes-2)
            }
        }
        } 
    
    
    return (
        <>
            {posts.map((post)=>{
                return (<div className='post' key={post.id}>
                    
                    {/* {console.log(post)} */}
                    <h1 >{post.id}</h1>
                    <h3>Title : {post.title}</h3>
                    
                    <p>Body:{post.body}</p>
                    <div>
                    <i className="far fa-thumbs-up fa-2x" onClick={()=>voter('hasUpVoted')}></i>
                    <span className='votes'>{post.userId+votes}</span>
                    <i className="far fa-thumbs-down fa-2x" onClick={()=>voter('hasDownVoted')}></i>
                    </div>
                    </div>
                    
                    )
            })}
            
            
        </>
    )
}

export default Post

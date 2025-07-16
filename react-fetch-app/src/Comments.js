import { useState } from "react";

function Comments(){
    let URL = "https://dummyjson.com/comments";
    let [comments,setComments]=useState([])

    let loadComments=()=>{
        fetch(URL).then(response=>response.json()).then(result=>setComments(result.comments)).catch(error=>console.log(error))
    }

    return(
        <div>
            <h3>This is Comments App</h3>
            <input type="button" value="Cleck Here" onClick={loadComments}/>
            <br/>
            {/* <p>Total comments are {comment.length}</p> */}
            <ul>
                {
                    comments.map(comment=>
                        <li>
                            {comment.id} {comment.body} {comment.postId} {comment.likes}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Comments;
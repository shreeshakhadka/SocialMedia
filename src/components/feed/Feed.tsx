import Share from "../share/Share"
import "./feed.css"
import {useState} from 'react'
import Post from "../post/Post"


export default function Feed() {
  const[posts, setPosts] = useState([])
  console.log(posts)

  const handleDelete =(index) =>{
    const updatedPosts =[...posts];
    updatedPosts.splice(index,1);
    setPosts(updatedPosts);
  }

  
  

  return (
    <div className="feed">
      <div className="feedWrapper">

      <Share setPosts={setPosts} /> 

      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          onDelete={() => handleDelete(index)}
        />
      ))}
    

      </div>
    </div>
  )
}

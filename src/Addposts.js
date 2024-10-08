import React, { useEffect, useState } from 'react';
import axios from 'axios'
function AddPosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  // function onTitleChange(e){
  //   setTitle(e.target.value)
  //   console.log("value",e)
  // }
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("title",title)
    console.log("body",body)
    const data = { title, body };
    console.log("data",data)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => {
        console.log("response",response)
        })
      .then(res => console.log(res));
  };

  return (
      <div className="App">

        <form onSubmit={(e) => handleSubmit(e)}>
        <div class="postData">

        <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" >
           Create Post
          </button>
        </div>
          
        </form>
      </div>
  );
}
export default AddPosts;
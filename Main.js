import React, { useState, useEffect } from 'react'

const Main = () => {
 
    const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    // Fetch the list of posts from the 1st API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch comments for each post from the 2nd API
    posts.forEach((post) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        .then((response) => response.json())
        .then((data) => {
          setComments((prevComments) => ({
            ...prevComments,
            [post.id]: data,
          }));
        })
        .catch((error) => {
          console.error(`Error fetching comments for post ${post.id}:`, error);
        });
    });
  }, [posts]);

  console.log("posts", posts)
  console.log("comments", comments)


  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h3>Comments:</h3>
          <ul>
            {comments[post.id]?.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}</strong> - {comment.body}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


export default Main

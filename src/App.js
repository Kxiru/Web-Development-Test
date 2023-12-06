import "./style.scss";
import React, { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import CallingCard from "./components/CallingCard";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <p
        style={{
          fontFamily: "Ubuntu",
          textAlign: "center",
          margin: "auto",
          padding: "10px",
        }}
      >
        Canonical Web Development Test
      </p>
      <hr style={{ marginBottom: "20px" }} />
      <div class="row">
        {posts.map((post) => (
          <BlogCard
            author={post._embedded.author[0].name}
            date={post.date}
            title={post.title.rendered}
            img={post.featured_media}
            topic={
              post._embedded["wp:term"][3][0]
                ? post._embedded["wp:term"][3][0].name.toUpperCase()
                : post._embedded["wp:term"][1][0].name.toUpperCase()
            }
            author_link={post._embedded.author[0].link}
            post_link={post.link}
          />
        ))}
      </div>
      <hr></hr>
      <div class="row">
        <CallingCard />
      </div>
    </div>
  );
}

export default App;

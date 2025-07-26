import React from "react";
import Post from "./Post";
import PostCard from "./PostCard";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      const postObjects = data.map(
        (item) => new Post(item.id, item.title, item.body)
      );

      this.setState({ posts: postObjects });
    } catch (error) {
      this.setState({ error });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

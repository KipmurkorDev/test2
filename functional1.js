// Rewrite this React class Based component into a react functional component

// import React, { Component, useState, useEffect } from "react";

// export default class Post extends Component {
//   state = {
//     posts: [],
//     id: "2",
//   };
//   componentDidMount() {
//     this.fetchPost();
//   }

//   componentDidUpdate(prevprops, prevstate) {
//     if (prevstate.id !== this.state.id) {
//       this.fetchPost();
//     }
//   }
//   async fetchPost() {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${this.state.id}`
//     );
//     const data = await response.json();
//     this.setState({ posts: data });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.id}
//           onChange={(e) => this.setState({ id: e.target.value })}
//         />

//         <p>{JSON.stringify(this.state.posts)}</p>
//       </div>
//     );
//   }
// }
//  functional componnents 




 
const Post=()=>{

const [state, setState]=useState({posts: [],id: 2})

useEffect(() => {
    const fetchPost=async()=> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${state.id}`
        );
        const data = await response.json();
        setState({...state, posts: data})

      }
fetchPost()
}, [state.id]);

return (
    <div>
      <input
        type="text"
        value={state.id}
        onChange={(e) =>setState({...state, id: e.target.value })}
      />

      <p>{JSON.stringify(state.posts)}</p>
    </div>
  );


}

export default Post

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    console.log("cDM");
    // fetch("https://api.github.com/users/Yurimurda")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ user: data.message });
    //     console.log(data)
    //   });
      axios
      .get("https://api.github.com/users/Yurimurda")
      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      })
      .catch(err => console.log(err));
      axios
      .get(`https://api.github.com/users/Yurimurda/followers`)
      .then(response => {
        console.log(response);
        this.setState({ followers: response.data.message });
      })
      .catch(err => console.log(err));

  }

  componentDidUpdate() {
    console.log("cDU");
  }



  render() {
    return (
      <div className="App">
        <h1>Github user</h1>
        <div className="user">
          <img width="200" src={this.state.user.avatar_url} alt={this.state.user.avatar_url}/>
            <p className="name">Name: {this.state.user.name}</p>
            <p className="bio">Bio: {this.state.user.bio}</p>
            <p className="creationDate">Date of Creation: {this.state.user.created_at}</p>
            <p className="followers">Followers: {this.state.user.followers}</p>
            {/* <p className="followersList">{this.state.followers.map()}</p> */}
            <p className="following">Following: {this.state.user.following}</p>
        </div>
        
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
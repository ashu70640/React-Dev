import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Parent component did Mount");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Ashutosh Function"} location={"Delhi, India"} />

        <UserClass
          name={"Ashutosh Function Class"}
          location={"Faridabad, India"}
        />
        <UserClass name={"Om Function Class"} location={"Faridabad, India"} />
      </div>
    );
  }
}

export default About;

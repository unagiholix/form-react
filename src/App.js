import "./styles.css";
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleClick(e) {
    alert("User " + this.emailRef.current.value + "has logged in");
  }

  render() {
    return (
      <form>
        <label>
          {" "}
          Email
          <input value={this.emailRef} />
        </label>
        <br />
        <label>
          {" "}
          Password
          <input value={this.passwordRef} />
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </label>
      </form>
    );
  }
}

export default Form;

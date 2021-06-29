import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import "../App.css";

function Profile(props) {

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "spacAround",
        padding: "125px"
      }}
    >
      <div
        style={{
          display: "block",
          marginTop: "100px",
          fontSize: "21px",
          fontFamily: "ubuntu, sans-serif",
          letterSpacing: "3px",
          lineHeight: "20px"
        }}
      >
        <div> {props.FullName}</div>
        <br />
        <br />
        <div> {props.bio}</div>
        <br />
        <br />
        <div> {props.profession}</div>
      </div>
      <div> {props.children}</div>

      <Button
        className="btn-style"
        variant="dark"
        size="sm"
        block
        onClick={() => props.HandleName(props.FullName)}
      >
        {" "}
        Click me!{" "}
      </Button>
    </div>
  );
}

Profile.defaultProps = {
  FullName: "Sherlock Holmes",
  bio:
    "You know my methods, Watson. When you have eliminated the impossible, whatever remains, however improbable, must be the truth?",
  profession: "Detective"

};
Profile.propTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  HandleName: PropTypes.func
};

export default Profile;

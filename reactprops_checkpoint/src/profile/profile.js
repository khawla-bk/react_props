import React from "react";
import PropTypes from "prop-types";

function HandleName(FullName) {
  return alert(FullName);
}

function Profile(props) {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "spacAround",
        padding: "125px",
      }}
    >
      <div
        style={{
          display: "block",
          marginTop: "100px",
          fontSize: "21px",
          fontFamily: "ubuntu, sans-serif",
          letterSpacing: "3px",
          lineHeight: "15px",
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

      <div>{HandleName(props.FullName)}</div>
    </div>
  );
}

Profile.defaultProps = {
  FullName: "Sherlock Holmes",
  bio: "You know my methods, Watson. When you have eliminated the impossible, whatever remains, however improbable, must be the truth?",
  profession: "Detective",
  children: (
    <img
      style={{ width: "240px", borderRadius: "15px" }}
      src="image.jpg"
      alt="Sherlock's photo"
    />
  ),
};
Profile.propTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  HandleName: PropTypes.func,
};

export default Profile;

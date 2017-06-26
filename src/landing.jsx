import React from "react";

export default class Background extends React.Component {


  render() {
    var backGround = {
      backgroundColor: "#2C3338",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: '0',
      left: '0',
      zIndex: '-1',
    }
    return (
      
      <div style={backGround}>
      </div>
    );
  }
}
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
class Badges extends Component {
  render() {
    const tg = this.props;
    console.log(tg.title);
    return (
      <Badge variant="warning" style={{ marginRight: "0.5em" }}>
        python
      </Badge>
    );
  }
}
export default Badges;

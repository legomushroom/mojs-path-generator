import React from "react";
import MojsPathGenerator from "../lib/index";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <MojsPathGenerator options={{ a: 1 }} />
      </div>
    );
  }
}

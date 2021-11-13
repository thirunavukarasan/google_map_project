import React, { Component } from "react";
export const mapContext = React.createContext();

class mapContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      infoWindowStatus: false,
      setInfoWindowStatus: this.setInfoWindowStatus
    };
  }

  setInfoWindowStatus = (infoWindowStatus) => {
    this.setState({ infoWindowStatus: infoWindowStatus });
  }

  render() {
    return (
      <mapContext.Provider value={this.state}>
        {this.state.children}
      </mapContext.Provider>
    );
  }
}

export default mapContextProvider;

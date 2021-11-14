import React, { Component } from "react";
import { markerLocation } from "../asset/js/markerLocation";
export const mapContext = React.createContext();

class mapContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      markerLimit: markerLocation.length,
      infoWindowStatus: false,
      infowWindowToast: false,
      orangeNumber: 5,
      setInfoWindowStatus: this.setInfoWindowStatus,
      setInfowWindowToast: this.setInfowWindowToast,
      setMarkerLimit: this.setMarkerLimit,
      setOrangeNumber: this.setOrangeNumber
    };
  }

  setInfoWindowStatus = (infoWindowStatus) => {
    localStorage.setItem('WIN_STA',infoWindowStatus);
    this.setState({ infoWindowStatus: infoWindowStatus });
  }

  setMarkerLimit = (limit) => {
    this.setState({ markerLimit: limit })
  }

  setOrangeNumber = (num) => {
    this.setState({ orangeNumber: num })
  }

  setInfowWindowToast = (infowWindowToast) => {
    this.setState({infowWindowToast})
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

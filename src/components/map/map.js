import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { markerLocation } from '../../asset/js/markerLocation';
import { DialogBox } from "../dialogBox/dialogBox";
import InfoWindowBind from '../infoWindowEx/inforWindoBind';
import { mapContext } from '../../context/mapContext';
const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    static contextType = mapContext;

    constructor(props) {
        super(props)
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false
        };
    }

    componentDidMount() {
        this.setState({ showingInfoWindow: this.context.infoWindowStatus });
    }

    onMarkerClick = async (props, marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

        this.context.setInfoWindowStatus(true);

    }


    onInfoWindowClose = async () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
        this.context.setInfoWindowStatus(false);

    }


    onMapClicked = async () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
            this.context.setInfoWindowStatus(false);
        }
    };
    render() {
        return (
            <React.Fragment>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 7.00,
                            lng: 81.00
                        }
                    }
                    onClick={this.onMapClicked}
                >
                    {
                        markerLocation.map(location => {
                            return (
                                <Marker position={{ lat: location.lat, lng: location.lan }} key={location.name}
                                    onClick={this.onMarkerClick}
                                    name={location.name}
                                    option={{ icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
                                >
                                </Marker>
                            )
                        })
                    }
                    <InfoWindowBind
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.context.infoWindowStatus}
                    >
                        <DialogBox />
                    </InfoWindowBind>
                </Map>
            </React.Fragment>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBNA8xxkfNfIpH6wguXnGaTTcQ5NCcboB0'
})(MapContainer);
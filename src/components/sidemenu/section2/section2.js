import React, { Component } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { mapContext } from '../../../context/mapContext';
import { markerLocation } from '../../../asset/js/markerLocation';
export class Section2 extends Component {
    static contextType = mapContext;

    constructor() {
        super()
        this.state = {
            selectedMarker: 'A'
        }
        this.marker = [{ name: 'All', key: 'A', limit: mapContext.length }, { name: 'Show 5 Marker', key: 'M', limit: 5 }, { name: 'Show 10 Marker', key: 'P', limit: 10 }, { name: 'Show 15 Marker', key: 'x', limit: 15 }, { name: 'Show 20 Marker', key: 'y', limit: 20 }, { name: 'Show 25 Marker', key: 'w', limit: 25 }, { name: 'Show 30 Marker', key: 'z', limit: 30 }];
    }

    setmarkerLimit(key, limit) {
        this.setState({ selectedMarker: key });

        const orangeLength = markerLocation.slice(0, limit).filter(data => data.color === 'orange').length;
        
        this.context.setOrangeNumber(orangeLength);
        this.context.setMarkerLimit(limit);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ marginLeft: '8px' }}>
                    <p className="p-text-bold p-mb-2" style={{ color: 'black' }}>Filter</p>
                    <div className="">
                        <div className="p-grid">
                            {
                                this.marker.map(marker => {
                                    return (
                                        <div key={marker.name} className="p-field-radiobutton p-col-6" style={{ padding: '2px 7px' }}>
                                            <RadioButton inputId={marker.key} name="category" value={marker.key} onChange={(e) => this.setmarkerLimit(marker.key, marker.limit)} checked={this.state.selectedMarker === marker.key} />
                                            <label htmlFor={marker.key}>{marker.name}</label>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react';
import { RadioButton } from 'primereact/radiobutton';

export class Section2 extends Component {
    constructor() {
        super()
        this.state = {
            selectedMarker: 'A'
        }
        this.marker = [{ name: 'All', key: 'A' }, { name: 'Show 5 Marker', key: 'M' }, { name: 'Show 10 Marker', key: 'P' }, { name: 'Show 15 Marker', key: 'x' }, { name: 'Show 20 Marker', key: 'y' }, { name: 'Show 25 Marker', key: 'w' }, { name: 'Show 30 Marker', key: 'z' }];
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ marginLeft: '4px' }}>
                    <p className="p-text-bold p-mb-2" style={{ color: 'black' }}>Filter</p>
                    <div className="">
                        <div className="p-grid">
                            {
                                this.marker.map(marker => {
                                    return (
                                        <div key={marker.name} className="p-field-radiobutton p-col-6" style={{ padding: '2px 7px' }}>
                                            <RadioButton inputId={marker.key} name="category" value={marker.key} onChange={(e) => {
                                                this.setState({ selectedMarker: e.value })
                                            }
                                            } checked={this.state.selectedMarker === marker.key} />
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
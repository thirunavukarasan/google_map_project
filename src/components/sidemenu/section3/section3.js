import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';

export class Section3 extends Component {
    constructor() {
        super()
        this.state = {
            selected: "Today"
        }
        this.Time = [
            { name: 'Today', code: 'Td' },
            { name: 'Tomorrow', code: 'Tm' },
        ];
        this.onTimeChange = this.onTimeChange.bind(this)
    }

    onTimeChange(e) {
        console.log(e)
        this.setState({ selected: e.target.value.name })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ marginLeft: '4px' }}>
                    <p className="p-text-bold p-mb-2" style={{ color: 'black' }}>Time Window</p>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <Dropdown value={this.state.selected} options={this.Time} onChange={this.onTimeChange} optionLabel="name" placeholder={this.state.selected} style={{ width: '90%' }} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
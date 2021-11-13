import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export class Section1 extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="p-grid">
                    <div className="p-col-3" id="menuBar">
                        <Button icon="pi pi-bars" className=" p-button-sm p-button-secondary" />

                    </div>
                    <div className="p-col-9">
                        <h3 className="p-text-bold" style={{ color: "black" }}>Intelligence</h3>
                    </div>
                </div>
                <div className="p-grid p-mt-2" style={{ marginLeft: '0px' }}>
                    <div className="p-col-12">
                        <span className="p-input-icon-left" >
                            <i className="pi pi-search" />
                            <InputText placeholder="Sri Lanka" style={{ width: '100%' }} />
                        </span></div>
                    <div className="p-col-12">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search By Supplier" style={{ width: '100%' }} />
                        </span></div>
                </div>
            </React.Fragment>
        )
    }
}
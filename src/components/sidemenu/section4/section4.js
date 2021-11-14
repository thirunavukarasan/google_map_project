import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { mapContext } from '../../../context/mapContext';
export class Section4 extends Component {
    static contextType = mapContext;

    render() {
        const array = new Array(this.context.orangeNumber).fill('');
        return (
            <React.Fragment>
                <div className="p-grid" style={{ marginLeft: '5px' }}>
                    {
                        array.map((ele, i) => {
                            return (
                                <React.Fragment key={`${i}`}>
                                    <div className="p-col-12">
                                        <Card title="A really long title that's unncessary but it happened to be in the database" subTitle="earum | earum nam"  >
                                            <p className="p-m-0" style={{ lineHeight: '1', fontWeight: 400 }}>Some text here that's longer than it's supposed to be..</p>
                                        </Card>
                                        <Button label="View On Map" className="p-button-rounded p-button-secondary p-button-sm p-mt-2 " />
                                    </div>
                                    <hr
                                        style={{
                                            color: 'grey',
                                            backgroundColor: 'grey',
                                            width: '90%'
                                        }}
                                    />

                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}
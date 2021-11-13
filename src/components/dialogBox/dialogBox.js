import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './dialogBox.css';
import { mapContext } from '../../context/mapContext';

export class DialogBox extends Component {
    static contextType = mapContext;
    constructor(props) {
        super(props)
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }

    like() {
        // this.context.setInfoWindowStatus(false);
    }

    dislike() {
        // this.context.setInfoWindowStatus(false);
    }

    footer = () => (
        <span className="">
            <p className="p-ml-1">Like or DisLike</p>
            <Button icon="pi pi-thumbs-up" className="p-button-success p-button-sm p-mr-2 p-ml-1" onClick={this.like} />
            <Button icon="pi pi-thumbs-down" className="p-button-danger p-button-sm" onClick={this.dislike} />
        </span>
    );

    render() {
        return (
            <div id="infoWindow" className="p-mb-1">
                <Card title="A really long title that's unncessary but it happened to be in the database" subTitle="Kavitha Source | Category" style={{ width: '18em' }} footer={this.footer} >
                    <p className="p-m-0" style={{ lineHeight: '1', fontWeight: 400, color: 'black' }}>Some text here that's longer than it's supposed to be..</p>
                </Card>
                <Button label="Send as email" className="p-button-secondary p-button p-mt-2 p-ml-1" />
            </div>
        )
    }
}
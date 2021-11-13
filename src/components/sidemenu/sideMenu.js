import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Section1 } from './section1/section1';
import { Section2 } from './section2/section2';
import { Section3 } from './section3/section3';
import { Section4 } from './section4/section4';

import './sideMenu.css'
export class SideMenu extends Component {
    render() {
        return (
            <div id="sideMenu">
                <Card id="section1">
                    <Section1 />
                </Card>
                <Card id="section2">
                    <Section2 />
                </Card>
                <Card id="section3">
                    <Section3 />
                </Card>
                <Card id="section4" >
                    <Section4 />
                </Card>
            </div>
        )
    }
}
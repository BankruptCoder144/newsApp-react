import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";

class MySprinner extends Component {
    render() {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
}

export default MySprinner;
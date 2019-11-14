import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';

export default class Base extends Component {
    render() {
        return(
            <Button variant= {this.props.variant} value={this.props.value} onClick={this.props.click} className="position">
                    {this.props.text} 
            </Button>
        );
    }
}
import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <input 
                name={this.props.name} 
                id={this.props.id} 
                type={this.props.type || 'text'}
                min={this.props.min}
            />
        )
    }
}
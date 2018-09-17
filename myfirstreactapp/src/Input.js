import React, {Component} from 'react';

class Input extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <input value={this.props.value} onChange={this.props.handleChange}/>
                <button onClick={this.props.handleClick} >submit</button>
            </div>
        );
    }
}

export default Input;
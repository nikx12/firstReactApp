import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}
export default Header;
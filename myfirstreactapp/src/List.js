import React, {Component} from 'react';

class List extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((item, index) => 
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;
import React, {Component} from 'react';
import Input from './Input';
import List from './List';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'SOALINDIA',
            value:'',
            list:[],
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let temp = this.state.list;
        temp.push(this.state.value)
        this.setState({
            list: temp,
        })
        // console.log(this.state.value);
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })

    }
    render() {
        const list = this.state.list;
        // const liCollection = [];
        // for(let i=0;i<list.length;i++){
        //      console.log(list[i]);
        //      liCollection.push(<li key={i} >{list[i]}</li>);
        // }

         
        return (
            <div>
                <Input value={this.state.value} handleChange={this.handleChange} handleClick={this.handleClick} />
                <List list={this.state.list}/>
            </div>
        );
    }
}

App.defaultProps = {
    name: 'School'

}

export default App;
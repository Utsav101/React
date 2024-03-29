import React, { Component } from 'react';
import './index.css';

class AddTodo extends Component {
    state = {
        content: ''
    }
    
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    
    render() {
        return (
            <div className="entry">
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input className="textbox" type = "text" placeholder="Enter new task" onChange = {this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo

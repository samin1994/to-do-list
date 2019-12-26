import React from 'react'

class AddComponent extends React.Component {

    state = {
        newTask: ''
    }

    constructor(props) {
        super(props)
    }

    clickHandler = () => {
        this.props.addTask(this.state.newTask)
        this.setState({newTask: ''});
    }

    newTask = (event) => {
        //console.log(e.target.value)
        this.setState({newTask: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.newTask} onChange={this.newTask}></input>
                <button onClick={this.clickHandler}>Add New Task</button>
            </div>
        )
    }
} export default AddComponent;

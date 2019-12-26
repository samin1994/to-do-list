import React from 'react';
import Add from './AddComponent';
import Tasks from './TasksList';
import Filters from './FiltersComponent';

class MainComponent extends React.Component {

    state = {
        newTask: '',
        tasksList: [
            {name: "Task1", finished: true},
            {name: "Task2", finished: true},
            {name: "Task3", finished: true},
        ],
        filter: 'all',
        

    }

    constructor(props) {
        super(props);
    }

    addTask = (task) => {
        this.setState({newTask: task});
        const newTask = {
            name: task,
            finished: false
        }

        let newList = [...this.state.tasksList, newTask];
        this.setState({tasksList: newList});
        
    }

    doneTask = (name) => {
        let newList = [...this.state.tasksList]
        for (let i=0; i< newList.length; i++) {
            if (newList[i].name === name) {
                newList[i].finished = !(newList[i].finished)
            }
        }
        
        this.setState({tasksList: newList})
    }

    changeFilter = (newFilter) => {
        this.setState({filter: newFilter})
        
    }

    getTasks = () => {
        if (this.state.filter === 'all') {
            return this.state.tasksList
        }
        if (this.state.filter === 'todo') {
            let todoList = []
            for (let j = 0; j< this.state.tasksList.length ; j++) {
                
                if (this.state.tasksList[j].finished !== true) {
                    todoList.push(this.state.tasksList[j])
                }
            }
            return todoList
        }
        if (this.state.filter === 'finished') {
            let finishedList = []
            for (let j = 0; j< this.state.tasksList.length ; j++) {
                
                if (this.state.tasksList[j].finished === true) {
                    finishedList.push(this.state.tasksList[j])
                }
            }
            return finishedList
        }
    }


    render() {
        return (
            <>
                <Add addTask={this.addTask}/>
                <Tasks filter={this.state.filter} tasksList={this.getTasks()} done={this.doneTask}/>
                <Filters change={this.changeFilter}/>
            </>
        )
    }
} export default MainComponent
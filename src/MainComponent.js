import React from 'react';
import Add from './AddComponent';
import Tasks from './TasksList';
import Filters from './FiltersComponent';
import axios from 'axios';

const baseUrl = 'http://192.168.43.179:8082/todos';

class MainComponent extends React.Component {

    state = {
        newTask: '',
        tasksList: [],
        filter: 'all',
        

    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        
        axios.get(baseUrl).then((ans) => {
            this.setState({tasksList: ans.data})
        })
        
    }

    addTask = (task) => {
        if (task === '') {
            alert('Task Name Can Not Be Empty!');
        }
        else {
            this.setState({newTask: task});
            const newTask = {
                text: task,
                done: false
            }
            axios.post(baseUrl, newTask).then(() => {
                this.fetchData();
            })
            let newList = [...this.state.tasksList, newTask];
            this.setState({tasksList: newList});
            }
        
    }

    doneTask = (id) => {
         let newList = [...this.state.tasksList]
         for (let i=0; i< newList.length; i++) {
             if (newList[i].id === id) {
                 newList[i].done = !(newList[i].done)
             }
         }
       
        axios.put(`${baseUrl}/toggle/${id}`).then(() => {
            this.fetchData();
        })
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
                
                if (this.state.tasksList[j].done !== true) {
                    todoList.push(this.state.tasksList[j])
                }
            }
            return todoList
        }
        if (this.state.filter === 'finished') {
            let finishedList = []
            for (let j = 0; j< this.state.tasksList.length ; j++) {
                
                if (this.state.tasksList[j].done === true) {
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
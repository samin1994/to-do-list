import React from 'react';

class FiltersComponent extends React.Component {

    state = {
        filter: 'all'
    }

    constructor(props) {
        super(props);
    }

    changeFilter = (newFilter) => {
        this.setState({filter: newFilter})
        this.props.change(newFilter)
    }

    render() {
        return (
            <div>
                <label>All</label><input checked={this.state.filter === 'all'} onChange={() => this.changeFilter('all')} type="radio" name="filter" value="all"></input>
                <label>Finished</label><input checked={this.state.filter === 'finished'} onChange={() => this.changeFilter('finished')} type="radio" name="filter" value="finished"></input>
                <label>Todo</label><input checked={this.state.filter === 'todo'} onChange={() => this.changeFilter('todo')} type="radio" name="filter" value="todo"></input>
            </div>
        )
    }

} export default FiltersComponent
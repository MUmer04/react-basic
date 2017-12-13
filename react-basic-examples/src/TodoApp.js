import React, {Component} from 'react';
import AddNewTask from './TodoAddtask';
import TodoList from './TodoAppList'
class TodoApp extends Component {
constructor(props){
super(props);
}

render(){
    return(
        <div>
            <TodoList />
            <AddNewTask />
        </div>
    )
}

}
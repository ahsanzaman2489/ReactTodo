/**
 * Created by ahsan.zaman on 08/09/2017.
 */

import React from 'react';
import Todostore from '../stores/TodoStores';
import TodoActions from '../actions/AppActions';
import Todo from '../components/todo';


export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: Todostore.getAllTodos(),
        }
    }

    getTodos = () => {
        this.setState({
            todos: Todostore.getAllTodos()
        });
    }

    componentWillMount() {
        Todostore.on('change', this.getTodos)
    }

    componentWillUnmount() {
        Todostore.removeListener('change', this.getTodos)
    }

    creatTodo = () => {
        const value = $('#TodoText').val();

        if (value != '') TodoActions.createTodo($('#TodoText').val());
        else {
            return;
        }
    }


    render() {
        const todosComponent = this.state.todos.map(todo => {
                return <Todo key={todo.id} removeHandler={this.deleteTodo} statusHandler={this.ChangeStatus} {...todo}/>
            }
        )

        return (
            <div>
                <h1 class="text-center">Todos</h1>
                <div class="row">
                    <div class="col-md-4 col-md-offset-2">
                        <input type="text" id="TodoText" class="form-control"/>
                    </div>
                    <div class="col-md-4">
                        <button onClick={this.creatTodo} class="btn btn-success">Create</button>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-6 col-md-offset-3">
                        <ul class="todo">{todosComponent}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

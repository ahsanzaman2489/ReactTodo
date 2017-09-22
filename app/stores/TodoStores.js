import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/appDispatchers';


class TodoStores extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {id: 123, text: '1st todo', completed: false},
            {id: 1234, text: '2nd todo', completed: false},
            {id: 12345, text: '3rd todo', completed: false},
        ]
    }

    createTodo = (text) => {
        this.todos.push({
            id: Date.now(),
            text: text,
            completed: false
        })

        this.emit('change');
    }

    delelteTodo = (id) => {
        let index = null;
        this.todos.map((todo, i) => {
            if (todo.id == id) {
                index = i;
            }
        })

        if (index != null) {
            this.todos.splice(index, 1)
        }

        this.emit('change');
    }

    changeStatusTodo = (id) => {
        console.log(id)
        this.todos.map((todo, i) => {
            if (todo.id == id) {
                if (todo.completed) {
                    todo.completed = false;
                } else {
                    todo.completed = true;
                }
            }
        })
        this.emit('change');
    }


    handleActions = (action) => {
        switch (action.type) {
            case 'CREATE_TODO': {
                this.createTodo(action.text);
            }
            case 'DELETE_TODO': {
                this.delelteTodo(action.id);
            }
            case 'CHANGE_STATUS_TODO': {
                this.changeStatusTodo(action.id);
            }
        }
    }

    getAllTodos() {
        return this.todos;
    }

}


const todoStore = new TodoStores();

Dispatcher.register(todoStore.handleActions)
window.Dispatcher = Dispatcher;
export default todoStore;

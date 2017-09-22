import Dispatcher from '../dispatchers/appDispatchers';
const AppActions = {
    createTodo(text){
        Dispatcher.dispatch({
            type: 'CREATE_TODO',
            text: text
        })
    }
    , deleteTodo(id){
        Dispatcher.dispatch({
            type: 'DELETE_TODO',
            id: id
        })
    }, ChangeStatusTodo(id){
        Dispatcher.dispatch({
            type: 'CHANGE_STATUS_TODO',
            id: id
        })
    }
};

export default AppActions;

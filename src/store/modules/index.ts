import { combineReducers } from 'redux';
import { TodoState, TodoReducer } from './todos';


export interface StoreState {
    todos: TodoState;
}

export default combineReducers ({
    todos: TodoReducer,
});

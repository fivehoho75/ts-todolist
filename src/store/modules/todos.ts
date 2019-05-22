import { createAction, handleActions } from 'redux-actions';

export interface TodoItemDataParams {
    id: number;
    text: string;
    done: boolean;
};

export interface TodoState {
    todoItems: TodoItemDataParams[];
    input: string;
};

const initialState: TodoState = {
    todoItems: [],
    input: '',
};

export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";

export const actionCreators = {
    create: createAction( CREATE ),
    remove: createAction( REMOVE ),
    toggle: createAction( TOGGLE ),
    changeInput: createAction( CHANGE_INPUT ),
};

export const TodoReducer = handleActions<TodoState>({
    [CREATE]: (state: TodoState, action: any) => ({
        input: '',
        todoItems: state.todoItems.concat({
            id: state.todoItems.length,
            text: action.payload,
            done: false,
          }),
    }),
    [REMOVE]: (state: TodoState, action: any) => ({
        ...state,
        todoItems: state.todoItems.filter(item => item.id !== action.payload), 
    }),
    [TOGGLE]: (state: TodoState, action: any) => ({
        ...state,
        todoItems: state.todoItems.map(
            item => item.id === action.payload ? { ...item, done: !item.done} : item
        ),    
    }),
    [CHANGE_INPUT]: (state: TodoState, action: any) => ({
        ...state,
        input: action.payload,
    }),
}, initialState);

/*
interface CreateAction {
    type: typeof CREATE;
    payload: TodoItemDataParams;
}

interface RemoveAction {
    type: typeof REMOVE;
    meta: {
        id: number;
    }
}

interface ToggleAction {
    type: typeof TOGGLE;
    meta: {
        id: number;
    }
}

interface ChangeInputAction {
    type: typeof CHANGE_INPUT;
    meta: {
        input: string;
    }
}

export type TodoActionTypes =
    | CreateAction
    | RemoveAction
    | ToggleAction
    | ChangeInputAction;

let autoId = 0;

function create(text: string) {
    return {
        type: CREATE,
        payload: {
            id: autoId++,
            text: text,
            done: false
        }
    };
}

function remove(id: number) {
    return {
        type: REMOVE,
        meta: {
            id
        }
    };
}

function toggle(id: number) {
    return {
      type: TOGGLE,
      meta: {
        id
      }
    };
}
  
function changeInput(input: string) {
    return {
      type: CHANGE_INPUT,
      meta: {
        input
      }
    };
}

export const actionCreators = {
    create,
    toggle,
    remove,
    changeInput
};

const initialState: TodoState = {
    todoItems: [],
    input: ""
};

export function todoReducer(
    state = initialState,
    action: TodoActionTypes
) : TodoState {
    switch (action.type) {
        case CREATE:
            return {
                input: "",
                todoItems: [...state.todoItems, action.payload]
            };
        case REMOVE:
            return{
                ...state,
                todoItems: state.todoItems.filter(todo => todo.id !== action.meta.id)
            };
        case TOGGLE:
            return {
                ...state,
                todoItems: state.todoItems.map(todo => {
                if (todo.id === action.meta.id) {
                  todo.done = !todo.done;
                }
                return todo;
              })
            };
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.meta.input
            };
        default:
            return state;
    }
}*/
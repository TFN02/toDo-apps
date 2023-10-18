import { Reducer, combineReducers } from 'redux';
import { todosReducer } from './todos/reducer';

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

interface RootState {
  todos: Todo[];
}

type TodoActionTypes =
  | { type: 'ADD_TODO'; payload: { id: number; text: string; complete: boolean } }
  | { type: 'DELETE_TODO'; payload: { id: number } }
  | { type: 'TOGGLE_TODO'; payload: { id: number } };


type ActionTypes = TodoActionTypes;

const rootReducer: Reducer<RootState, ActionTypes> = combineReducers({
  todos: todosReducer as unknown as Reducer<Todo[], TodoActionTypes>,
});

export default rootReducer;

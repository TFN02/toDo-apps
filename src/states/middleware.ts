import { Middleware, Dispatch, MiddlewareAPI } from 'redux';
import  RootState  from './rootReducer';

const todoDeletionCheck: Middleware<{}, typeof RootState> = (store: MiddlewareAPI) => (next: Dispatch) => (action) => {
  if (action.type === 'DELETE_TODO') {
    const { todos } = store.getState();
    const todosToBeDeleted = todos.find((todo: { id: string; }) => todo.id === action.payload.id);

    if (todosToBeDeleted && !todosToBeDeleted.complete) {
      alert('Tidak bisa menghapus task yang belum selesai.');
      return;
    }
  }

  return next(action);
};

export { todoDeletionCheck };

import { applyMiddleware, createStore } from 'redux';
import { todoDeletionCheck } from './middleware';
import rootReducer from './rootReducer';
 
const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));
 
export { store };
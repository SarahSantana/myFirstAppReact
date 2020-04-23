import { createStore } from 'redux';
import reduces from '../reducers';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reduces, devTools);

export default store;
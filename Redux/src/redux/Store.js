import BookReducer from './BookReducer';
import MultipleReducer from './MultipleReducer';

import { createStore } from 'redux';

const Store = createStore({
	BookReducer,
	MultipleReducer
})

export default Store
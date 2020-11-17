import React, { Component } from 'react';
import { Provider } from 'react-redux'

import BookContainer from './components/bookContainer'
import HookBookContainer from './components/hookBookContainer'

import Store from './redux/Store';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>	
				<div>
					<BookContainer/>
					<HookBookContainer/>
				</div>
			</Provider>
        );
    }
}

export default App;
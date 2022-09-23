import React from 'react';
import {Provider} from 'react-redux';
import BookContainer2 from './components/bookContainer2'
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer2 />
    </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App';

// hellosの初期データ
const initalHellos = [{
  value: 'Hello World!',
  note: '最初のデータです',
}];

// hellosのreducer定義
const hellos = (state = initalHellos, action) => {
  switch (action.type) {
    case 'ADD_HELLO':
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
};

// reducerの作成
const reducer = combineReducers({
  hellos,
});

// Storeの作成
const store = createStore(reducer);

// ProvierにStoreを登録
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

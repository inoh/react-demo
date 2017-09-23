react-demo
==========

## Reduxとは

Component間のデータを一元管理するための仕組み（Flux）を実現するためのライブラリ
フロントで使用するデータベースみたいなもの（ReduxでStoreに該当）で既存データはStoreから取得する
Storeを更新するためにはActionをreducerに投げることで更新できる

## Redux install

```
> npm install redux
> npm install --save react-redux
```

## Reduxでやること

- reducerの作成（データを管理したり更新する定義）
- StoreをProviderに接続
- Storeからデータを取得しComponentに設定
- reducerに対してアクションを発行（dispatchをする）

#### 前段

Helloを管理するシステムを想定する

```
import React, { PropTypes } from 'react';

const Button = ({ value, children }) => (
  <button onClick={() => alert(value)}>{children}</button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
```

### reducerの作成（データを管理したり更新する定義）

HelloのComponentにデータを管理したり、伝達するための土台を作成する

```
import { combineReducers } from 'redux'

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
```

### StoreをProviderに接続

```
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Storeの作成
const store = createStore(reducer);

// ProvierにStoreを登録
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Storeからデータを取得しComponentのpropsに設定

```
import { connect } from 'react-redux'

const App = ({ hellos }) => (
  <div>
    {hellos.map(hello => (
      <Hello value={hello.value}>
        {hello.note}
      </Hello>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  hellos: state.hellos,
});

connect(mapStateToProps)(App);
```

### reducerに対してアクションを発行（dispatchをする）

```
const App = () => {
  // Helloを追加するactionをdispatch（reducer経由でStoreに伝達）する
  const onClick = () => {
    this.props.dispatch({
      type: 'ADD_HELLO',
      payload: {
        value: 'add',
        note: '追加したよ',
      },
    });
  }

  return (
    <button onClick={this.onClick}>追加</button>
  );
};

connect(mapStateToProps)(App);
```

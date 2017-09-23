import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import Hello from '../components/Hello';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    hellos: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
    })).isRequired,
  }

  onClick = () => {
    const { dispatch } = this.props;

    // Helloを追加するactionをdispatch（reducer経由でStoreに伝達）する
    dispatch({
      type: 'ADD_HELLO',
      payload: {
        value: 'add',
        note: '追加したよ',
      },
    });
  }

  render() {
    const { hellos } = this.props;

    return (
      <div>
        {hellos.map(hello => (
          <Hello value={hello.value}>
            {hello.note}
          </Hello>
        ))}

        <button onClick={this.onClick}>追加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hellos: state.hellos,
});

export default connect(mapStateToProps)(App);

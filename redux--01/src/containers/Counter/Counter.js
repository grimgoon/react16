import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
<<<<<<< HEAD
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={this.props.onDeleteResult}>{result.value}</li>
=======
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
>>>>>>> 2ce9f100650678804f83dc02502ac1f3da56ce31
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
<<<<<<< HEAD
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
  return {
      onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
      onSubtractCounter: () => dispatch({type: 'SUBTRACT', payload: 15}),
      onAddCounter: () => dispatch({type: 'ADD', payload: 10}),
      onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
      onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
      deleteResult: () => dispatch({type: 'DELETE_RESULT'}),
  }  
=======

        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
>>>>>>> 2ce9f100650678804f83dc02502ac1f3da56ce31
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
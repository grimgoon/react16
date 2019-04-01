export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: INCREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}


export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value,
    }
}


export const saveResult = res => {
    return {
        type: STORE_RESULT,
        result : res
    }
}

export const store_result = result => dispatch => {
    setTimeout(() => {
        dispatch(saveResult(result));
    }, 2000);
}

export const delete_result = (resultId) => {
    return {
        type: DELETE_RESULT,
        resultElId : resultId
    }
}

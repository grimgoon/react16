import * as actionTypes from './actionTypes';

export const saveResult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result : res
    }
}

export const store_result = result => (dispatch, getState) => {
    setTimeout(() => {
        const oldCounter = getState().ctr.counter;
        dispatch(saveResult(result));
        console.log(oldCounter);
    }, 2000);
}

export const delete_result = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId : resultId
    }
}

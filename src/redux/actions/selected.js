export const setSelectedJob = (id) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SELECTED_JOB",
            payload: id
        })
    }
}

export const setSelectedCandidate = (id) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SELECTED_CANDIDATE",
            payload: id
        })
    }
}
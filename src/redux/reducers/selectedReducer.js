const initialState = {
    jobId: null,
    candidateId: null
}

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_JOB":
            return {
                ...state,
                jobId: action.payload
            }
        case "SET_SELECTED_CANDIDATE":
            return {
                ...state,
                candidateId: action.payload
            }
        default:
            return state;
    }
}

export default selectedReducer;
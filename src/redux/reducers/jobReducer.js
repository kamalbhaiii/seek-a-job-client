const initialState = {
    data: null,
    err: null,
    loading: false
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case "JOB_INITIALIZE":
            return {
                ...state,
                loading: true
            }
        case "JOB_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "JOB_FAILED":
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        case "JOB_RESET":
            return {
                ...state,
                loading: false,
                err: null,
                data: null
            };
        default:
            return state;
    }
}

export default jobReducer;
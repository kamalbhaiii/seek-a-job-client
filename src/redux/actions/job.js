import { sampleJobData } from "../../utils/sampleData"

export const jobInitialize = () => ({
    type: "JOB_INITIALIZE"
})

export const jobSuccess = (data) => ({
    type: "JOB_SUCCESS",
    payload: data
})

export const jobFailed = (err) => ({
    type: "JOB_FAILED",
    payload: err
})

export const jobReset = () => ({
    type: "JOB_RESET"
})

export const getJobById = (id) => {
    return (dispatch) => {
        dispatch(jobInitialize());
        // Replace the logic return below with the actual api call.
        const reqData = sampleJobData?.filter((data, key) => data._id === id);
        console.log(reqData, id)
        if (reqData && reqData.length > 0) {
            console.log("If")
            console.log(reqData[0])
            dispatch(jobSuccess(reqData[0]))
        } else {
            console.log("else")
            dispatch(jobFailed("Job associated with this id isn't available."))
        }
        // Till here.
    }
}
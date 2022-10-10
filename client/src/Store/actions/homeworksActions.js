import { HOMEWORK_FAILURE, HOMEWORK_SUCCESS, HOMEWORK_REQUEST } from "../types"

export const homeworksRequest=()=>({
    type:HOMEWORK_REQUEST,
})
export const homeworksSuccess=(data)=>({
    type:HOMEWORK_SUCCESS,
    payload:data
})
export const homeworksFailure=(error)=>({
    type:HOMEWORK_FAILURE,
    payload:error
})

export const gethomeworks=(path)=>dispatch=>{
    dispatch(homeworksRequest)
    fetch(`${API_ENDPOINT}task/${path}`, {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
    }).then(response=>response.json())
    .then(data=>{dispatch(homeworksSuccess(data.result))})
    .catch(error=>{
        console.log(error)
        dispatch(homeworksFailure(error))})
}

export const deleteTask=(id)=>dispatch=>{
    dispatch(homeworksRequest)
    fetch(`${API_ENDPOINT}task/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
    }).then(response=>response.json())
    .then(()=>dispatch(getHomeworks('')))
    .catch(error=>{
        console.log(error)
        dispatch(homeworksFailure(error))})
}

export const editHomeworksStatus=(data)=>dispatch=>{
    
    const statusArray = ["NEW", "IN PROGRESS", "FINISHED"]
    const newStatusIndex = statusArray.indexOf(data.status)>1? 0: statusArray.indexOf(data.status)+1
    dispatch(homeworksRequest)
    fetch(`${API_ENDPOINT}task/${data._id}`, {
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
        body:JSON.stringify({
            task:{
                title:data.title,
                importance: data.importance,
                status: statusArray[newStatusIndex],
                description:data.description
            }
        })
    }).then(response=>response.json())
    .then(()=>dispatch(gethomeworks('')))
    .catch(error=>{
        console.log(error)
        dispatch(homeworksFailure(error))})
}
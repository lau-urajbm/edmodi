import {
  USER_DATA_FAILURE,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  GET_USER_ROLE,
} from "../types";
import axios from "axios";

export const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});
export const userDataSuccess = (data) => ({
  type: USER_DATA_SUCCESS,
  payload: data,
});
export const userDataFailure = (error) => ({
  type: USER_DATA_FAILURE,
  payload: error,
});

export const registerProf =
  (userName, password, isProf) => async (dispatch) => {
    try{
    dispatch(userDataRequest);
    console.log("en la action", userName);
    const res = await axios.post(`http://localhost:3001/auth/register`, {
      userName,
      password,
      isProf,
    });

   return res
    /*  localStorage.setItem('token', res.data)
    console.log(localStorage.getItem('token')) */
  }catch(err){
    return err
  }
};
export const registerStudent =
  (userName, password, isProf) => async (dispatch) => {
    try{
    dispatch(userDataRequest);
    console.log("en la action", userName);
    const res = await axios.post(`http://localhost:3001/auth/register`, {
      userName,
      password,
      isProf,
    });

   return res
    /*  localStorage.setItem('token', res.data)
    console.log(localStorage.getItem('token')) */
  }catch(err){
    return err
  }
};

export const loginProf = (userName, password) => async (dispatch) => {
  try {
    dispatch(userDataRequest);

    console.log("en la action", userName);
    const res = await axios.post(`http://localhost:3001/auth/login`, {
      userName,
      password,
    });

    console.log(res);
    dispatch(userDataSuccess(res.data))
    return res;

    /*  localStorage.setItem('token', res.data)
    console.log(localStorage.getItem('token')) */
  } catch (err) {
    return err;
  }
};

export const loginStudent = (userName, password) => async (dispatch) => {
    try {
      dispatch(userDataRequest);
  
      console.log("en la action", userName);
      const res = await axios.post(`http://localhost:3001/auth/login/student`, {
        userName,
        password,
      });
  
      console.log(res);
      dispatch(userDataSuccess(res.data))
      return res;
  
      /*  localStorage.setItem('token', res.data)
      console.log(localStorage.getItem('token')) */
    } catch (err) {
      return err;
    }
  };

export const getRole = (token)=>async(dispatch)=>{
  try{
    const res = await axios.get(`http://localhost:3001/auth/role`, {
      headers: {'x-access-token': token},
    })
    dispatch({
      type: GET_USER_ROLE,
      payload: res.data,
    })

  }catch(err){
    dispatch(userDataFailure(err))
  }
}

/* export const gethomeworks=(path)=>dispatch=>{
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
} */

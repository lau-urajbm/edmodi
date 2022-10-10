import { GET_USER_ROLE, USER_DATA_FAILURE, USER_DATA_REQUEST, USER_DATA_SUCCESS  } from "../types"
const initialState ={
    loading: false,
    user:[],
    error:''
}

const usersReducer=(state = initialState, action)=>{
    switch(action.type){

        case USER_DATA_REQUEST:
            return{
                ...state,
                loading:true
            }
        case USER_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                error:'',
                user:action.payload
            }
        case USER_DATA_FAILURE:
            return{
                
                loading:false,
                error:action.payload,
                user:[]
            }
        case GET_USER_ROLE:
            return{
                ...state,
                loading:false,
                error:'',
                user:action.payload

            }
        


        default:
            return state
    }
    
}
export default usersReducer
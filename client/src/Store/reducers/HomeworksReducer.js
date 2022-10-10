import { HOMEWORK_FAILURE, HOMEWORK_SUCCESS, HOMEWORK_REQUEST } from "../types"

const initialState ={
    loading: false,
    homeworks: [],
    
    error:''
}

const homeworksReducer=(state = initialState, action)=>{
    switch(action.type){

        case HOMEWORK_REQUEST:
            return{
                ...state,
                loading:true
            }
        case HOMEWORK_SUCCESS:
            return{
                
                loading:false,
                error:'',
                task:action.payload
            }
        case HOMEWORK_FAILURE:
            return{
                loading:false,
                error:action.payload,
                task:[]
            }
        


        default:
            return state
    }
    
}
export default homeworksReducer
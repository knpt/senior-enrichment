import axios from 'axios';

//ACTION TYPE
const GET_CURRENT_STUDENT = "GET_CURRENT_STUDENT";

//ACTION CREATOR

export function getCurrentStudent(currentStudent){
    const action = {type: GET_CURRENT_STUDENT, currentStudent}
    return action
}

//THUNK CREATOR

export function fetchStudent(id){
    return function thunk(dispatch){
        return axios.get(`/api/students/${id}`)
        .then(res=> res.data)
        .then(student => {
            const action = getCurrentStudent(student);
            dispatch(action)
        })
    }
}

//REDUCER

export default function reducer (currentStudent = [], action){
    switch (action.type){

        case GET_CURRENT_STUDENT:
            return action.currentStudent;
        
        default:
            return currentStudent
    }
}
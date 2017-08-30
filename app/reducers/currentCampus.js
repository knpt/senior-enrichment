import axios from 'axios';

//ACTION TYPE
const GET_CURRENT_CAMPUS = "GET_CURRENT_CAMPUS";

//ACTION CREATOR

export function getCurrentCampus(currentCampus){
    const action = {type: GET_CURRENT_CAMPUS, currentCampus}
    return action 
}
//THUNK CREATOR

export function fetchCampus(id){
    return function thunk(dispatch){
        return axios.get(`/api/campuses/${id}`)
        .then(res=>res.data)
        .then(campus => {
            const action = getCurrentCampus(campus);
            dispatch(action)
        })
    }
}
//REDUCER

export default function reducer (currentCampus = [], action){
    switch (action.type){

        case GET_CURRENT_CAMPUS:
            return action.currentCampus;
        
        default:
            return currentCampus
    }
}
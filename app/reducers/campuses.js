import axios from 'axios';

//ACTION TYPE
const GET_CAMPUSES = "GET_CAMPUSES";
const GET_CAMPUS = "GET_CAMPUS";
const CREATE_CAMPUS = "CREATE_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const POST_CAMPUS = "POST_CAMPUS"

//ACTION CREATORS

export function getCampuses(campuses){
    const action = {type: GET_CAMPUSES, campuses};
    return action;
}

export function getCampus(campus){
  const action = {type: GET_CAMPUS, campus};
  return action;
}

export function postCampus(campus){
    const action = {type: POST_CAMPUS, campus};
    return action 
}

//add more action creators for create/remove/update campus

//THUNK CREATOR
export function fetchCampuses(){
  return function thunk(dispatch){
    return axios.get('/api/campuses')
      .then(res=> res.data)
      .then(campuses=> {
        const action = getCampuses(campuses);
        dispatch(action)
      })
  }
}

export function fetchCampus(){
    return function thunk(dispatch){
        return axios.get('/api/campuses/:id')
          .then(res=> res.data)
          .then(campus => {
             const action = getCampus(campus);
             dispatch(action)
          })
    }
}

export function postCampusThunk(campusInfo){
    return function thunk(dispatch){
        return axios.post('/api/campuses', campusInfo)
          .then(res=> res.data)
          .then(campus=> {
              const action = postCampus(campus)
              dispatch(action)
          })
    }
}

//REDUCER

export default function reducer (campuses= [], action){

    switch(action.type){

        case GET_CAMPUSES:
            return action.campuses;

        case POST_CAMPUS:
            return [...campuses, action.campus]
        // case GET_CAMPUS:
        //     return [...campuses, action.campus];

        default: 
            return campuses;
    }
}
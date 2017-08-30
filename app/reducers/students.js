import axios from 'axios';

//ACTION TYPE
const GET_STUDENTS = "GET_STUDENTS";


//ACTION CREATORS
export function getStudents(students){
    const action = {type: GET_STUDENTS, students};
    return action
}

//THUNK CREATOR
export function fetchStudents(){
    console.log("SFKBSKFJBSKFBSKHBFKBFSKH")
    return function thunk(dispatch){
        return axios.get('/api/students')
          .then(res=>res.data)
          .then(students => {
              const action = getStudents(students);
              dispatch(action)
          })
    }
}

//REDUCER

export default function reducer(students = [], action){

    switch(action.type){

        case GET_STUDENTS:
            return action.students;
        
        default: 
            return students
    }
}
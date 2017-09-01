import axios from 'axios';

//ACTION TYPE
const GET_STUDENTS = "GET_STUDENTS";
const POST_STUDENT = "POST_STUDENT"


//ACTION CREATORS
export function getStudents(students){
    const action = {type: GET_STUDENTS, students};
    return action
}

export function postStudent(student){
    const action = {type: POST_STUDENT, student}
    return action
}

//THUNK CREATOR
export function fetchStudents(){
    return function thunk(dispatch){
        return axios.get('/api/students')
          .then(res=>res.data)
          .then(students => {
              const action = getStudents(students);
              dispatch(action)
          })
    }
}

export function postStudentThunk(credentials){
    return function thunk(dispatch){
        return axios.post('/api/students', credentials)
          .then(res=> res.data)
          .then(student=> {
              const action = postStudent(student)
              dispatch(action)
          })
    }
}


//REDUCER

export default function reducer(students = [], action){

    switch(action.type){

        case GET_STUDENTS:
            return action.students;
        
        case POST_STUDENT: 
            return [...students, action.student]

        default: 
            return students
    }
}
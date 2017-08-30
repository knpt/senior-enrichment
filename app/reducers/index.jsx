import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'
import currentCampus from './currentCampus'

const initialState = {}




//REDUCER
const rootReducer = combineReducers({
  campuses,
  students, 
  currentCampus
})



// function(state = initialState, action) {
//   switch(action.type) {

//     case GET_CAMPUSES:
//       return action.campuses
//     default: return state
//   }
// };

export default rootReducer

// export * from './campuses'
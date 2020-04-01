import userTypes from './types'
const { SET_CURRENT_USER } = userTypes;

// SET User on Sign UP / Sign IN 
export const setCurrentUser =  user => {
  return {
    type: SET_CURRENT_USER ,
    payload: user
  }
}
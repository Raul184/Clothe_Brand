import { SET_CURRENT_USER } from './types'


// SET User on Sign UP / Sign IN 
export const setCurrentUser =  user => {
  return {
    type: SET_CURRENT_USER ,
    payload: user
  }
}
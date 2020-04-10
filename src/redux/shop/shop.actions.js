import {
  UPDATE_COLLECTION
} from './types'

// Update Collections on FrontEnd
export const updateCollects = collectsMapped => {
  return {
    type: UPDATE_COLLECTION ,
    payload: collectsMapped
  }
}
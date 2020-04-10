import {
  UPDATE_COLLECTION ,
  DATA_FETCH
} from './types'

// Update Collections on FrontEnd
export const updateCollects = collectsMapped => ({
    type: UPDATE_COLLECTION ,
    payload: collectsMapped
})

export const spinOnLoading = () => ({
  type: DATA_FETCH 
})
import { takeEvery } from 'redux-saga/effects'
import {
  FETCH_COLLECTIONS_START ,
  FETCH_COLLECTIONS_SUCCESS ,
  FETCH_COLLECTIONS_FAILURE
} from './shop.types'

export function* fetchCollectionsAsync() {
  console.log('ran');
}

export function* fetchCollectionsStart() {
  yield takeEvery( 
    FETCH_COLLECTIONS_START ,
    fetchCollectionsAsync 
  )
}
import { takeEvery , call , put } from 'redux-saga/effects'
import {
  FETCH_COLLECTIONS_START ,
  FETCH_COLLECTIONS_SUCCESS ,
  FETCH_COLLECTIONS_FAILURE
} from './shop.types'

import { 
  fetchCollectionsSuccess , 
  fetchCollectionsFailure 
} from './shop.actions'

// FIREBASE
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';


export function* fetchCollectionsAsync() {
  // collectionRef.get().then(snapshot=> {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //   dispatch(action(collectionsMap))
  // })
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call( convertCollectionsSnapshotToMap , snapshot );
    yield put(
      fetchCollectionsSuccess(collectionsMap)
    );
  } 
  catch (error) {
    yield put(
      fetchCollectionsFailure(error.message)
    )
  }
}


export function* fetchCollectionsStart() {
  yield takeEvery( 
    FETCH_COLLECTIONS_START ,
    fetchCollectionsAsync 
  )
}

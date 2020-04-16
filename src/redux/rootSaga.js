import { all , call } from 'redux-saga/effects'
//sagas
import { fetchCollectionsStart } from './shop/shop.sagas';



export default function* rootSaga(){
  yield all([ call( fetchCollectionsStart )])
}
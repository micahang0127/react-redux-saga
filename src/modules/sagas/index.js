import { takeEvery, put, call } from "redux-saga/effects";
import api from "../../lib/api/index";
import allAction from "../actions/index";

function* getCourier() {
  try {
    // call로 API를 호출하고 put으로 dispatch 합니다.
    // 여기서 call 함수의 인자는 Promise를 반환해야 합니다.
    // 이렇게 비동기로 받은 데이터를 put, 즉 dispatch 하는 것 입니다.
    const { data } = yield call(api.searchCourier);
    console.log(data);
    yield put(allAction.loadCourierSuccess(data));
  } catch (error) {
    yield put(allAction.loadCourierFail(error));
  }
}

function* rootSata() {
  // takeEvery
  // dispatch에 의해 action.type이 "LOAD_COURIER'인 객체가 올 때 getCourier를 실행시키라는 의미
  yield takeEvery("LOAD_COURIER", getCourier);
}

export default rootSata;

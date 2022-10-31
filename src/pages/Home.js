import React, { useEffect } from "react";
import "../styles/Home/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../modules/actions/index";

/*
saga 미들웨어가 존재하기 때문에 dispatch가 rootSaga로 넘어갑니다.
그 안에서 takeEvery()를 만나 type이 일치하는 것이 확인되고 getCourier로 넘어갑니다.
여기선 비동기로 로직을 실행한 다음에 put으로 action의 loadCourierSuccess()를 dispatch합니다.
마지막으로 리듀서로 넘어가 state가 업데이트 됩니다!
*/
const Home = () => {
  const result = useSelector((state) => state.couriers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAction.loadCourier());
  }, []);

  return (
    <div className="HomeContainer">
      <div className="HomeMainContainer"></div>
    </div>
  );
};

export default Home;

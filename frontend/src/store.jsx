import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  verifyOTPReducer,
  userSendChangePasswordReducer,
  userConfirmChangePasswordReducer,
  userUpdatePasswordReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  verifyOTP: verifyOTPReducer,
  userSendChangePassword: userSendChangePasswordReducer,
  userConfirmChangePassword: userConfirmChangePasswordReducer,
  userUpdatePassword: userUpdatePasswordReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  verifyOTP: {},
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

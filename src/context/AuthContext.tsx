import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import { Routes } from "../../App";

export interface IAction {
  type: string;
  payload: any;
}

export enum AUTH {
  SIGNUP_SUCCEEDED = "SIGNUP_SUCCEEDED",
  SIGNUP_FAILED = "SIGNUP_FAILED",
  SIGNIN_SUCCEEDED = "SIGNIN_SUCCEEDED",
  SIGNIN_FAILED = "SIGNIN_FAILED",
  SIGNOUT_SUCCEEDED = "SIGNOUT_SUCCEEDED",
  SIGNOUT_FAILED = "SIGNOUT_FAILED",
}

const DefaultAuthState = {
  token: null,
  errorSignin: "",
  errorSignup: "",
  errorSignout: "",
};

const authReducer = (state = DefaultAuthState, action: IAction) => {
  switch (action.type) {
    case AUTH.SIGNUP_SUCCEEDED:
      return {
        ...state,
        token: action.payload,
        errorSignup: "",
        errorSignin: "",
      };
    case AUTH.SIGNUP_FAILED:
      return {
        ...state,
        errorSignup: action.payload,
      };
    case AUTH.SIGNIN_SUCCEEDED:
      return {
        ...state,
        token: action.payload,
        errorSignin: "",
        errorSignup: "",
      };
    case AUTH.SIGNIN_FAILED:
      return {
        ...state,
        errorSignin: action.payload,
      };
    case AUTH.SIGNOUT_SUCCEEDED:
      return {
        ...state,
        errorSignout: "",
      };
    case AUTH.SIGNOUT_FAILED:
      return {
        ...state,
        errorSignout: action.payload,
      };
    default:
      return state;
  }
};

const signup = (dispatch: any) => async ({ email, password }: any) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: AUTH.SIGNUP_SUCCEEDED, payload: response.data.token });
    navigate(Routes.TrackList);
  } catch (err) {
    dispatch({
      type: AUTH.SIGNUP_FAILED,
      payload: err.message,
    });
  }
};

const tryLocalSignin = (dispatch: any) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: AUTH.SIGNIN_SUCCEEDED, payload: token });
    navigate(Routes.TrackList);
  } else {
    navigate(Routes.authFlow);
  }
};

const signin = (dispatch: any) => async ({ email, password }: any) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: AUTH.SIGNIN_SUCCEEDED, payload: response.data.token });
    navigate(Routes.TrackList);
  } catch (err) {
    dispatch({
      type: AUTH.SIGNIN_FAILED,
      payload: err.message,
    });
  }
};

const signout = (dispatch: any) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({
      type: AUTH.SIGNOUT_SUCCEEDED,
      token: null,
    });
    navigate(Routes.ResolveAuth);
  } catch (err) {
    dispatch({
      type: AUTH.SIGNOUT_FAILED,
      payload: err.message,
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, tryLocalSignin },
  DefaultAuthState
);

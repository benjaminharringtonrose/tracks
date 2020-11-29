import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const DefaultAuthState = {
  isSignedIn: false,
};

const authReducer = (state = DefaultAuthState, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch: any) => {
  return async ({ email, password }: any) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = (dispatch: any) => {
  return ({ email, password }: any) => {
    // make api request to sign in with that email and password
    // if we sign in, modify our state, and say that we are authenticated
    // if signing in fails, reflect an error message
  };
};

const signout = (dispatch: any) => {
  return () => {
    // signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  DefaultAuthState
);

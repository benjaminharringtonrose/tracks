import createDataContext from "./createDataContext";
import { IAction } from "./AuthContext";

enum LOCATION {
  ADD_CURRENT = "ADD_CURRENT",
}

const DefaultState = {
  recording: false,
  locations: [],
  currentLocation: null,
};

const locationReducer = (state = DefaultState, action: IAction) => {
  switch (action.type) {
    case LOCATION.ADD_CURRENT:
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

const startRecording = (dispatch: any) => () => {};
const stopRecording = (dispatch: any) => () => {};
const addLocation = (dispatch: any) => (location: any) => {
  dispatch({ type: LOCATION.ADD_CURRENT, payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  DefaultState
);

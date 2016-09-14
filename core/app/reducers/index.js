import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import repReducer  from "./rep_reducer";
import chatReducer from "./chat_reducer";



const rootReducer = combineReducers({
  reps: repReducer,
  form: formReducer,
  chatMessages: chatReducer,
});

export default rootReducer;

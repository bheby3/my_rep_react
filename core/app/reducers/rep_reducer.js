import {
  REPRESENTATIVES_GET,
  SENATORS_GET,
  GET_STATES,
} from "../actions/index";

export default function (state = [], action = "") {
  switch (action.type) {

    case(REPRESENTATIVES_GET):
      if (action.payload.status === 200){
        return Object.assign({}, state, {reps:action.payload.data});
      } else {
        return state;
      }
      break;
    case(SENATORS_GET):
      if (action.payload.status === 200){
        return Object.assign({}, state, {reps:action.payload.data});
      } else {
        return state;
      }
      break;
    case(GET_STATES):
      if (action.payload.status === 200){
        return Object.assign({}, state, {states:action.payload.data});
      } else {
        return state;
      }
      break;
    /*case(USER_GET):
      if (action.payload.status === 200) {
        return Object.assign({}, state, action.payload.data);
      } else {
        return state;
      }
      break;
    case(USER_LOGIN):
      return Object.assign({}, state, action.payload.data);
    case(USER_REGISTER):
      return Object.assign({}, state, action.payload.data);
    case(GET_USER_TEAMS):
      return Object.assign({}, state, {teams: action.payload.data});
    case(USER_LOGOUT):
      return {};
    case(USER_SEARCH):
      return Object.assign({}, state, {searchResults: action.payload.data});
    case(INITIATE_SOCKET):
      return Object.assign({}, state, action.payload.data, {socket: action.payload});*/
    default:
      return state;
  }
}
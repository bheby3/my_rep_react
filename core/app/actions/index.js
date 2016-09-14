import axios from "axios";

export const REPRESENTATIVES_GET = "GET_REPRESENTATIVES";
export const SENATORS_GET = "GET_SENATORS";

const ROOT_URL = window.location.origin;

export function getRepresentatives(props) {
  const request = axios.get(`${ROOT_URL}/representatives/` + props.state);

  return {
    type: REPRESENTATIVES_GET,
    payload: request
  };
}

export function getSenators(props) {
  const request = axios.get(`${ROOT_URL}/senators/` + props.state);

  return {
    type: SENATORS_GET,
    payload: request
  };
}

/*export function getStates() {
  // const request = axios.get(`${ROOT_URL}/senators/` + props.state);
  const request =  ['AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
    'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MS', 'MO', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
    'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA',
    'WV', 'WI', 'WY'];
  return {
    type: GET_STATES,
    payload: request
  };
}*/


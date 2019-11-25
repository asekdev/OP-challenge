import { SELECT_PLAN } from "./types";

//actions
export const updateSelectedPlan = payload => {
  return {
    type: SELECT_PLAN,
    payload
  };
};

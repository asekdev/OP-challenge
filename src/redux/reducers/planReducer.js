import { SELECT_PLAN } from "../actions/types";

export const initialState = {
  planDate: {
    start: new Date()
  },
  planSelected: {
    interval: null,
    paymentCount: null
  },
  totalCart: 123.45
};

const planReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_PLAN:
      return {
        ...state,
        planSelected: {
          ...state.planSelected,
          interval: payload.interval,
          paymentCount: payload.paymentCount
        }
      };
    default:
      return state;
  }
};

export default planReducer;

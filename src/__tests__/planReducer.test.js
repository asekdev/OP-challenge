import planReducer, { initialState } from "../redux/reducers/planReducer";
import { updateSelectedPlan } from "../redux/actions/actions";

describe("Reducer Tests", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("should return initial state", () => {
    const expectedState = state;
    expect(planReducer(undefined, {})).toEqual(expectedState);
  });

  it("should update the planSelected state", () => {
    const expectedState = {
      ...state,
      planSelected: {
        ...state.planSelected,
        interval: "weekly",
        paymentCount: 3
      }
    };
    expect(
      planReducer(
        state,
        updateSelectedPlan({ interval: "weekly", paymentCount: 3 })
      )
    ).toEqual(expectedState);
  });
});

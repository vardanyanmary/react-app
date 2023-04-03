interface ActionType {
  type: string;
  payload: unknown;
}

interface CounterStateSchema {
  count: number;
}

const initialState: CounterStateSchema = {
  count: 0,
};

export function counterReducer(
  state = initialState,
  action: ActionType
): CounterStateSchema {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

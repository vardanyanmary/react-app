interface ActionType {
  type: string;
  payload: unknown;
}

interface SettingsStateSchema {
  propertyFromSettings: boolean;
}

const initialState: SettingsStateSchema = {
  propertyFromSettings: true,
};

export function settingsReducer(
  state = initialState,
  action: ActionType
): SettingsStateSchema {
  switch (action.type) {
    case "increment":
      return { ...state };
    default:
      return state;
  }
}

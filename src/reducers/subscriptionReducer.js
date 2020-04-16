import { v4 as uuidv4 } from "uuid";

export const subscriptionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SUBSCRIPTION":
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.subscription.name,
          price: action.subscription.price,
          cycle: action.subscription.cycle,
          date: action.subscription.date,
        },
      ];

    case "REMOVE_SUBSCRIPTION":
      return state.filter((subscription) => subscription.id !== action.id);

    case "EDIT_SUBSCRIPTION":
      return state.map((subscription) =>
        subscription.id === action.subscription.id
          ? action.subscription.updatedSubscription
          : subscription
      );

    default:
      return state;
  }
};

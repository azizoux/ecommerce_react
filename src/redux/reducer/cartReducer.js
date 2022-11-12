const INITIAL_STATE = {
  cart: [],
  mugs: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM": {
      const newCart = [...state.cart];
      newCart.push(action.payload);

      return {
        cart: newCart,
        mugs: state.mugs,
      };
    }
    case "UPDATEITEM": {
      const indexItemUpdate = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      const newArr = [...state.cart];
      newArr.splice(indexItemUpdate, 1, action.payload);

      return {
        cart: newArr,
        mugs: state.mugs,
      };
    }
    case "DELETEITEM": {
      const newState = [...state.cart];
      newState.splice(action.payload, 1);

      return {
        cart: newState,
      };
    }
    case "PAYEITEM": {
      return {
        cart: [],
        mugs: action.payload.mugs,
      };
    }
    case "INIT": {
      return {
        cart: action.payload.cart,
        mugs: action.payload.mugs,
      };
    }
    default:
  }

  return state;
}

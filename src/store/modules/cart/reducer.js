export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.findIndex(
        (p) => p.id === action.product.id
      );
      if (existingProduct >= 0) {
        state[existingProduct].amount = state[existingProduct].amount + 1;
        return [...state];
      } else {
        return [...state, { ...action.product, amount: 1 }];
      }

    default:
      return state;
  }
}

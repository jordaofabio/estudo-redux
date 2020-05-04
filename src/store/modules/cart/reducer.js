import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const existingProduct = draft.findIndex(
          (product) => product.id === action.product.id
        );
        if (existingProduct >= 0) {
          draft[existingProduct].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    default:
      return state;
  }
}

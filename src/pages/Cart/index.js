import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ProductTable, Total } from './styles';
import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const dispatch = useDispatch();

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
    if (product.amount === 1) {
      dispatch(CartActions.removeFromCart(product.id));
    }
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Produtos</th>
            <th />
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btLeft"
                    onClick={() => decrement(product)}
                  >
                    -
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    className="btRight"
                    onClick={() => increment(product)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

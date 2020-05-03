import React from 'react';
import { Container, ProductTable, Total } from './styles';
import formatPrice from '../../util/format';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import imagemIlustrativa from '../../assets/images/monitor-ilustrativo.jpg';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd.</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={imagemIlustrativa} alt="Produto ilustrativo" />
            </td>
            <td>
              <strong>Produto Ilustrativo</strong>
              <span>R$ 5.199,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 1399,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1399,80</strong>
        </Total>
      </footer>
    </Container>
  );
}

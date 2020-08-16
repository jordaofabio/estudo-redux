import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from './styles';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  const addToCartRequest = '';
  const [products, setProducts] = useState([]);

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartRequest(id));
  };

  const listProducts = async (page = 1) => {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    setProducts(data);
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <strong>{product.name}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <FaPlus size={16} color={'#FFF'} /> {amount[product.id]}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

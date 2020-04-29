import React from 'react';
import imagemIlustrativa from '../../assets/images/monitor-ilustrativo.jpg';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Main() {
  return (
    <ProductList>
      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={imagemIlustrativa} alt="Produto Ilustrativo" />
        <strong>Produto Ilustrativo</strong>
        <span>R$ 5.199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color={'#FFF'} /> 2
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}

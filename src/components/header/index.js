import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';
import { MdShoppingCart } from 'react-icons/md';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Minha Loja" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>2 itens</span>
        </div>
        <MdShoppingCart size={36} color="#555" />
      </Cart>
    </Container>
  );
}

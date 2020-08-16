import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';
import { MdShoppingCart } from 'react-icons/md';

export default function Header() {
  const cartItens = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Minha Loja" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          {cartItens > 0 && (
            <span>
              {cartItens > 1 ? `${cartItens} produtos` : `${cartItens} produto`}
            </span>
          )}

          {cartItens === 0 && <span>Vazio</span>}
        </div>
        <MdShoppingCart size={36} color="#707070" />
      </Cart>
    </Container>
  );
}

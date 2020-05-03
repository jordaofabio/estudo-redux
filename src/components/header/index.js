import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';
import { MdShoppingCart } from 'react-icons/md';

function Header({ cartItens }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Minha Loja" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartItens > 1 ? `${cartItens} itens` : `${cartItens} item`}
          </span>
        </div>
        <MdShoppingCart size={36} color="#555" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cart: state.cart,
  cartItens: state.cart.length,
}))(Header);

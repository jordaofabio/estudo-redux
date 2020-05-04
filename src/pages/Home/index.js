import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';
class Home extends Component {
  state = {
    products: [],
  };

  handleAddProduct = (product) => {
    const { addToCart } = this.props;
    addToCart(product);
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.formattedPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <FaPlus size={16} color={'#FFF'} /> 2
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);

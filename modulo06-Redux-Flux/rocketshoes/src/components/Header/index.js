import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

// esse cart é o que está no connect no final deste componente
function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
    </Container>
  );
}

export default Header;

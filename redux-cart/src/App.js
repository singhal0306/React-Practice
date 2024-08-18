import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCardData, fetchCartData } from './store/cart-actions';

import React, { useEffect } from 'react';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCardData(cart))
    }
  }, [cart, dispatch])

  return (
    <React.Fragment>
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;

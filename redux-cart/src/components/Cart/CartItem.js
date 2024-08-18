import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice'
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const onAdd = () => {
    dispatch(cartActions.addItemToCart({ title, id, price }))
  }
  const onSub = () => {
    dispatch(cartActions.removeItemToCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onSub}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import Modal from '../ui/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: 'itemId', name: 'Sushi', amount: 3, price: 13.77 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes['button']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

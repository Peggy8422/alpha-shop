import {CartContext} from './CartContext.js';
import {SubmitContext} from '../../App.js';
import Product from './Product.js';
import {useContext} from 'react';
import styles from './Cart.module.scss';

function CartFooter({text, price}) {
  return (
    <section className={styles.cartFooter}>
      <div className={styles.text}>{text}</div>
      <div className={styles.price}>{typeof price === 'number' ? '$' : ''}{price}</div>
    </section>
  );
}

function Cart({deliverPrice, setNewCartItems, setNewSubmitContent}) {
  const cartItems = useContext(CartContext);
  const submitContent = useContext(SubmitContext);
  return (
    <section className={styles.cartContainer + " col col-5"}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ul className={styles.productList}>
        {cartItems.map(cartItem => {
          return <Product
            key={cartItem.id}
            item={cartItem} 
            setNewCartItems={setNewCartItems} 
            setNewSubmitContent={setNewSubmitContent}
          />
        })}
      </ul>
      <CartFooter text="運費" price={Number(deliverPrice) > 0 ? Number(deliverPrice) : '免費'} />
      <CartFooter text="小計" price={Number(submitContent.total)} />
    </section>
  );
}

export default Cart;
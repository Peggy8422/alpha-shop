import {cartItems} from './Cart.jsx';
import {ReactComponent as IconMinus} from '../icons/minus.svg';
import {ReactComponent as IconPlus} from '../icons/plus.svg';
import styles from './CartContainer.module.scss';

function CartFooter({text, price}) {
  return (
    <section className={styles.cartFooter}>
      <div className={styles.text}>{text}</div>
      <div className={styles.price}>{price}</div>
    </section>
  );
}

function ProductContainer({item}) {
  return (
    <li className={styles.productContainer} data-count="2" data-price={item.price}>
      <img className={styles.image} src={item.img} alt={item.name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <IconMinus className={styles.productAction} />
            <span className={styles.productCount}>{item.quantity}</span>
            <IconPlus className={styles.productAction} />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </li>
  );
}

function ProductList() {
  return (
    <ul className={styles.productList}>
      {cartItems.map(cartItem =>
        <ProductContainer item={cartItem} key={cartItem.id}/>
      )}
    </ul>
  );
}

function CartContainer() {
  return (
    <section className={styles.cartContainer + " col col-5"}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList />
      <CartFooter text="運費" price="免費" />
      <CartFooter text="小計" price="$0" />
    </section>
  );
}

export default CartContainer;
import {cartItems} from './Cart.jsx';
import {useState} from 'react';
import {ReactComponent as IconMinus} from '../icons/minus.svg';
import {ReactComponent as IconPlus} from '../icons/plus.svg';
import styles from './CartContainer.module.scss';

function CartFooter({text, price}) {
  return (
    <section className={styles.cartFooter}>
      <div className={styles.text}>{text}</div>
      <div className={styles.price}>{typeof price === 'number' ? '$' : ''}{price}</div>
    </section>
  );
}

function ProductContainer({item, productsPrice, setProductsPrice}) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li className={styles.productContainer} data-price={item.price}>
      <img className={styles.image} src={item.img} alt={item.name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <IconMinus className={styles.productAction} onClick={() => {
              if (quantity > 0 && productsPrice > 0) {
                setQuantity(quantity - 1);
                setProductsPrice(productsPrice - item.price);
              }
            }} />
            <span className={styles.productCount}>{quantity}</span>
            <IconPlus className={styles.productAction} onClick={() => {
              setQuantity(quantity + 1);
              setProductsPrice(productsPrice + item.price);
            }} />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </li>
  );
}

function ProductList({productsPrice, setProductsPrice}) {
  return (
    <ul className={styles.productList}>
      {cartItems.map(cartItem =>
        <ProductContainer 
          item={cartItem} 
          key={cartItem.id} 
          productsPrice={productsPrice} 
          setProductsPrice={setProductsPrice} 
        />
      )}
    </ul>
  );
}

function CartContainer({deliverPrice, productsPrice, setProductsPrice}) {
  return (
    <section className={styles.cartContainer + " col col-5"}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList productsPrice={productsPrice} setProductsPrice={setProductsPrice} />
      <CartFooter text="運費" price={Number(deliverPrice) > 0 ? Number(deliverPrice) : '免費'} />
      <CartFooter text="小計" price={Number(deliverPrice) + Number(productsPrice)} />
    </section>
  );
}

export default CartContainer;
import {CartContext} from './CartContext.js';
import {SubmitContext} from '../../App.js';
import {useState} from 'react';
import {useContext} from 'react';
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

function ProductContainer({item, setNewCartItems, setNewSubmitContent}) {
  const [quantity, setQuantity] = useState(0); //額外設置計算渲染各別item數量的變數
  const cartItems = useContext(CartContext);
  const submitContent = useContext(SubmitContext);
  //增減商品數量，原本使用單純計算購物車小計顯示的方式，改為重新存取整個購物清單資料更新後的內容(quantity改變的部分)
  return (
    <li className={styles.productContainer} data-price={item.price}>
      <img className={styles.image} src={item.img} alt={item.name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <IconMinus className={styles.productAction} onClick={() => {
              if (quantity > 0 ) {
                setQuantity(quantity - 1);
                setNewCartItems(cartItems.map(cartItem =>
                  cartItem.id === item.id ?
                  {...cartItem, quantity: quantity - 1}
                  :
                  cartItem
                ));
                setNewSubmitContent({
                  ...submitContent, total: submitContent.total - item.price
                });
                // setProductsPrice(productsPrice - item.price);
              }
            }} />
            <span className={styles.productCount}>{quantity}</span>
            <IconPlus className={styles.productAction} onClick={() => {
              setQuantity(quantity + 1);
              setNewCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ?
                {...cartItem, quantity: quantity + 1}
                :
                cartItem
              ));
              setNewSubmitContent({
                ...submitContent, total: submitContent.total + item.price
              });
              // setProductsPrice(productsPrice + item.price);
            }} />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </li>
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
          return <ProductContainer
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
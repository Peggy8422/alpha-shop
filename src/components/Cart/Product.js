import {CartContext} from './CartContext.js';
import {SubmitContext} from '../../App.js';
import {useState, useContext} from 'react';
import {ReactComponent as IconMinus} from '../icons/minus.svg';
import {ReactComponent as IconPlus} from '../icons/plus.svg';
import styles from './Cart.module.scss';

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
            }} />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </li>
  );
}

export default ProductContainer;
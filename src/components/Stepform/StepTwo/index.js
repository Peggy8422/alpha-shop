import React, {useContext} from 'react';
import {CartContext} from '../../Cart/CartContext.js';
import {SubmitContext} from '../../../App.js';
import styles from './StepTwo.module.scss';
import '../base.module.scss';

function RadioInfo({text, price, period}) {
  return (
    <>
      <div className={styles.radioInfo}>
        <div className="col col-12">
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.period + " col col-12"}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder}></div>
    </>
  );
}


function RadioGroup({id, price, children, ischecked = true, setPrice, setNewSubmitContent}) {
  const cartItems = useContext(CartContext);
  const submitContent = useContext(SubmitContext);
  return (
    <label htmlFor={id} className={styles.radioGroup + " col col-12"}>
      <input 
        className={styles.inputRadio} 
        id={id} 
        type="radio" 
        value={price} 
        name="shipping" 
        defaultChecked={ischecked}
        onChange={(e) => {
          let productsTotal = cartItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next);
          setPrice(e.target.value);
          setNewSubmitContent({
            ...submitContent,
            total: productsTotal + price
          });
        }}
      />
      {children}
    </label>
  );
}

function StepTwoContent({setDeliverPrice, setNewSubmitContent}) {  
  return (
    <section className={styles.formBody}>
      <RadioGroup id="shipping-standard" price={0} setPrice={setDeliverPrice} setNewSubmitContent={setNewSubmitContent}>
        <RadioInfo text="運送標準" price="免費" period="約 3~7 個工作天" />
      </RadioGroup>
      <RadioGroup id="shipping-dhl" price={500} ischecked={false} setPrice={setDeliverPrice} setNewSubmitContent={setNewSubmitContent}>
        <RadioInfo text="DHL貨運" price="500" period="48 小時內送達" ischecked={false} />
      </RadioGroup>
    </section>
  );
}

function StepTwoWrapper({setDeliverPrice, setNewSubmitContent}) {
  return (
    <form className={styles.formContainer + " col col-12"}>
      <h3 className={styles.formTitle}>運送方式</h3>
      <StepTwoContent setDeliverPrice={setDeliverPrice} setNewSubmitContent={setNewSubmitContent} />
    </form>
  );
}

export default StepTwoWrapper;
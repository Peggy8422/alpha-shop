import './App.css';
import {useState} from 'react';
import StepFormContainer from './components/Stepform/StepFormContainer.js';
import CartContainer from './components/Cart/CartContainer.js';
import ProgressControl from './components/Stepform/ProgressControl.js';
import styles from './components/Stepform/base.module.scss';
import {cartItems} from './components/Cart/Cart.jsx';

function App() {
  //製作切換頁狀態的改變，設置頁面步驟狀態
  const [step, setStep] = useState(1);
  //計算運費，設置運費狀態
  const [deliverPrice, setDeliverPrice] = useState(0);
  //計算所有子元件有影響金額變動的地方，設置小計狀態及取用種子資料作為初始值計算
  const [productsPrice, setProductsPrice] = useState(cartItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next, 0));

  return (
    <div className="App">
      {/* Header */}
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepFormContainer step={step} setDeliverPrice={setDeliverPrice} />
          <CartContainer deliverPrice={deliverPrice} productsPrice={productsPrice} setProductsPrice={setProductsPrice} />
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

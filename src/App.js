import './App.css';
import {useState, useContext, createContext} from 'react';
import {CartContext} from './components/Cart/CartContext.js';
import StepForm from './components/Stepform';
import Cart from './components/Cart';
import ProgressControl from './components/Stepform/ProgressControl';
import styles from './components/Stepform/base.module.scss';
// import {cartItems} from './components/Cart/Cart.jsx';

//提交表單的Context資料
export const SubmitContext = createContext({
  total: 0, //購物車小計
  card_name: '', //持卡人姓名
  card_num: '', //卡號
  valid_date: '', //有效期限
  ccv_num: '', //CVC或CCV
}) 

function App() {
  //製作切換頁狀態的改變，設置頁面步驟狀態
  const [step, setStep] = useState(1);
  //計算運費，設置運費狀態
  const [deliverPrice, setDeliverPrice] = useState(0);
  //初始購物車資料
  const initialCartData = useContext(CartContext);
  const [newCartItems, setNewCartItems] = useState(initialCartData);
  //初始提交確認下單資料
  const initialSubmitData = useContext(SubmitContext);
  const [newSubmitContent, setNewSubmitContent] = useState(initialSubmitData);

  return (
    <div className="App">
      {/* Header */}
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <SubmitContext.Provider value={newSubmitContent}>
            <StepForm step={step} setDeliverPrice={setDeliverPrice} setNewSubmitContent={setNewSubmitContent} />
            <CartContext.Provider value={newCartItems}>
                <Cart deliverPrice={deliverPrice} setNewCartItems={setNewCartItems} setNewSubmitContent={setNewSubmitContent} />
            </CartContext.Provider>
            <ProgressControl step={step} setStep={setStep} deliverPrice={deliverPrice} setNewSubmitContent={setNewSubmitContent} />
          </SubmitContext.Provider>
        </div>
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

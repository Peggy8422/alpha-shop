import './App.css';
import {useState, useContext} from 'react';
import {CartContext} from './components/Cart/CartContext.js';
import StepForm from './components/Stepform';
import Cart from './components/Cart';
import ProgressControl from './components/Stepform/ProgressControl.js';
import styles from './components/Stepform/base.module.scss';
// import {cartItems} from './components/Cart/Cart.jsx';

function App() {
  //製作切換頁狀態的改變，設置頁面步驟狀態
  const [step, setStep] = useState(1);
  //計算運費，設置運費狀態
  const [deliverPrice, setDeliverPrice] = useState(0);
  //計算所有子元件有影響金額變動的地方，設置小計狀態
  // const [productsPrice, setProductsPrice] = useState(0);
  const initialData = useContext(CartContext);
  const [newCartItems, setNewCartItems] = useState(initialData);

  return (
    <div className="App">
      {/* Header */}
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepForm step={step} setDeliverPrice={setDeliverPrice} />
          <CartContext.Provider value={newCartItems}>
            <Cart deliverPrice={deliverPrice} setNewCartItems={setNewCartItems} />
          </CartContext.Provider>
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

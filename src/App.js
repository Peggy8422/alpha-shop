import './App.css';
import { useState } from 'react';
import StepFormContainer from './components/Stepform/StepFormContainer.js';
import CartContainer from './components/Cart/CartContainer.js';
import ProgressControl from './components/Stepform/ProgressControl.js';
import styles from './components/Stepform/base.module.scss';


function App() {
  //製作切換頁狀態的改變，設置狀態
  const [step, setStep] = useState(1)

  return (
    <div className="App">
      {/* Header */}
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepFormContainer step={step} />
          <CartContainer />
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

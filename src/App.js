import './App.css';
import StepFormContainer from './components/Stepform/StepFormContainer.js';
import CartContainer from './components/Cart/CartContainer.js';
import ProgressControl from './components/Stepform/ProgressControl.js';
import styles from './components/Stepform/base.module.scss';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepFormContainer />
          <CartContainer />
          <ProgressControl />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

import {useContext} from 'react';
import {SubmitContext} from '../../App';
import styles from './ProgressControl.module.scss';
import {ReactComponent as IconLeftArrow} from '../icons/left-arrow.svg';
import {ReactComponent as IconRightArrow} from '../icons/right-arrow.svg';


function Button({className, text, onStepToggle}) {
  return (
    <button className={className} onClick={onStepToggle}>
      {text === '上一步' && <IconLeftArrow />}
      {text}
      {text === '下一步' && <IconRightArrow />}
    </button>
  );
}

function ButtonGroup({children}) {
  return (
    <section className={styles.buttonGroup + " col col-12"}>
      {children}
    </section>
  );
}

function ProgressControl({step, setStep}) {
  const submitContent = useContext(SubmitContext);

  function handleStepForward() {
    setStep(step + 1)
  }

  function handleStepBackward() {
    setStep(step - 1)
  }

  function handleSubmit() {
    console.log(submitContent)
  }

  return (
    <section className={styles.progressControlContainer}>
      {step === 1 && <ButtonGroup>
        <Button className={styles.next} text="下一步" onStepToggle={handleStepForward} />
      </ButtonGroup>}
      {step === 2 && <ButtonGroup>
        <Button className={styles.prev} text="上一步" onStepToggle={handleStepBackward} />
        <Button className={styles.next} text="下一步" onStepToggle={handleStepForward} />
      </ButtonGroup>}
      {step === 3 && <ButtonGroup>
        <Button className={styles.prev} text="上一步" onStepToggle={handleStepBackward} />
        <Button className={styles.next} text="確認下單" onStepToggle={handleSubmit} />
      </ButtonGroup>}
    </section>
  );
}

export default ProgressControl;
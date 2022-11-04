import styles from './ProgressControl.module.scss';
import {ReactComponent as IconLeftArrow} from '../icons/left-arrow.svg';
import {ReactComponent as IconRightArrow} from '../icons/right-arrow.svg';



function Button({className, text}) {
  return (
    <button className={className}>
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

function ProgressControl() {
  return (
    <section className={styles.progressControlContainer}>
      <ButtonGroup>
        <Button className={styles.next} text="下一步" />
      </ButtonGroup>
      {/* <ButtonGroup>
        <Button className={styles.prev} text="上一步" />
        <Button className={styles.next} text="下一步" />
      </ButtonGroup>
      <ButtonGroup>
        <Button className={styles.prev} text="上一步" />
        <Button className={styles.next} text="確認下單" />
      </ButtonGroup> */}
    </section>
  );
}

export default ProgressControl;
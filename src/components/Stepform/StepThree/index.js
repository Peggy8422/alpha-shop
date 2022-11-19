import {InputGroup} from '../StepOne';
import React, {useContext} from 'react';
import {SubmitContext} from '../../../App.js';
import styles from './StepThree.module.scss';
import '../base.module.scss';



function StepThreeContent({setNewSubmitContent}) {
  const submitContent = useContext(SubmitContext);
  return (
    <section>
      <div className="col col-12">
        <InputGroup global=" input-w-4" labelTitle="持卡人姓名">
          <input type="text" placeholder="John Doe" onChange={(e) => setNewSubmitContent(
            {...submitContent, card_name: e.target.value}
          )} />
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-4" labelTitle="卡號">
          <input type="text" placeholder="1111 2222 3333 4444" onChange={(e) => setNewSubmitContent(
            {...submitContent, card_num: e.target.value}
          )} />
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-3" labelTitle="有效期限">
          <input type="text" placeholder="MM/YY" onChange={(e) => setNewSubmitContent(
            {...submitContent, valid_date: e.target.value}
          )} />
        </InputGroup>
        <InputGroup global=" input-w-3" labelTitle="CVC / CCV">
          <input type="text" placeholder="123" onChange={(e) => setNewSubmitContent(
            {...submitContent, ccv_num: e.target.value}
          )} />
        </InputGroup>
      </div>
    </section>
  );
}

function StepThreeWrapper({setNewSubmitContent}) {
  return (
    <form className={styles.formContainer}>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <StepThreeContent setNewSubmitContent={setNewSubmitContent} />
    </form>
  );
}

export default StepThreeWrapper;
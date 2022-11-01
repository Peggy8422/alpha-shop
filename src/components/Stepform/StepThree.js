import {InputBox, InputGroup} from './StepOne.js';

function StepThreeContent() {
  return (
    <section>
      <div className="row">
        <InputGroup labelTitle="持卡人姓名">
          <InputBox type="text" placeholder="John Doe" />
        </InputGroup>
      </div>
      <div className="row">
        <InputGroup labelTitle="卡號">
          <InputBox type="text" placeholder="1111 2222 3333 4444" />
        </InputGroup>
      </div>
      <div className="row">
        <InputGroup labelTitle="有效期限">
          <InputBox type="text" placeholder="MM/YY" />
        </InputGroup>
        <InputGroup labelTitle="CVC / CCV">
          <InputBox type="text" placeholder="123" />
        </InputGroup>
      </div>
    </section>
  );
}

function StepThreeWrapper() {
  return (
    <form >
      <h3>付款資訊</h3>
      <StepThreeContent />
    </form>
  );
}

export default StepThreeWrapper;
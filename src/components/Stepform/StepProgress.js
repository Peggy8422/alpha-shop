import './step-form.css';

function Step({step, label}) {
  return (
    <span className="progress-group">
      <span className="progress-icon">
        <span className="text">{step}</span>
      </span>
      <span className="progress-label">{label}</span>
    </span>
  );
}

function ConnectBar() {
  return <span className="progress-bar"></span>
}

function StepProgress() {
  return (
    <>
      <h2 className="top-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        <Step 
          step={1}
          label={'寄送地址'}
        />
        <ConnectBar />
        <Step 
          step={2}
          label={'運送方式'}
        />
        <ConnectBar />
        <Step 
          step={3}
          label={'付款資訊'}
        />
      </section>
    </>
  );
}

export default StepProgress;
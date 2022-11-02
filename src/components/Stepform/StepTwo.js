function RadioInfo({text, price, period}) {
  return (
    <>
      <div className="row">
        <div className="text">{text}</div>
        <div className="price">{price}</div>
      </div>
      <div className="period">{period}</div>
    </>
  );
}

function RadioGroup({id, isChecked = true, children}) {
  return (
    <label htmlFor={id} className="radioGroup">
      <input id={id} type="radio" name="shipping" checked={isChecked}/>
      {children}
    </label>
  );
}

function StepTwoContent() {
  return (
    <section>
      <RadioGroup id="shipping-standard">
        <RadioInfo text="運送標準" price="免費" period="約 3~7 個工作天" />
      </RadioGroup>
      <RadioGroup id="shipping-dhl" isChecked={false} >
        <RadioInfo text="DHL貨運" price="500" period="48 小時內送達" />
      </RadioGroup>
    </section>
  );
}

function StepTwoWrapper() {
  return (
    <form >
      <h3>運送方式</h3>
      <StepTwoContent />
    </form>
  );
}

export default StepTwoWrapper;

function Button({className, text}) {
  return (
    <button className={className}>
      {text}
    </button>
  );
}

function ButtonGroup({children}) {
  return (
    <section className="buttonGroup">
      {children}
    </section>
  );
}

function ProgressControl() {
  return (
    <section className="progressControlContainer">
      <ButtonGroup>
        <Button className="next" text="下一步" />
      </ButtonGroup>
      <ButtonGroup>
        <Button className="prev" text="上一步" />
        <Button className="next" text="下一步" />
      </ButtonGroup>
      <ButtonGroup>
        <Button className="prev" text="上一步" />
        <Button className="next" text="確認下單" />
      </ButtonGroup>
    </section>
  );
}

export default ProgressControl;
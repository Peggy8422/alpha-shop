import React from 'react';
import styles from './StepOne.module.scss';
import './base.module.scss';

export function InputBox({type, placeholder}) {
  return <input type={type} placeholder={placeholder} />;
}

//註記：有查詢到關於 react-select 提供的 Select元件的用法，以及defaultValue設定預設值搭配 useState()的做法，後續作業進度推進會再嘗試

export function SelectBox({children}) {
  return (
    <div className={styles.selectContainer}>
      <select>
        {children}
      </select>
    </div>
  );
}

export function Option({value, text}) {
  return <option value={value}>{text}</option>;
}

export function InputGroup({global, labelTitle, children}) {
  return (
    <div className={styles.inputGroup + global}>
      <label className={styles.inputLabel}>{labelTitle}</label>
      {children}
    </div>
  );
}


function StepOneContent() {
  return (
    <section className={styles.formBody}>
      <div className="col col-12">
        <InputGroup global=" input-w-2" labelTitle="稱謂">
          <SelectBox>
            <Option value="mr" text="先生" />
            <Option value="ms" text="女士"/>
            <Option value="mx" text="不明"/>
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="姓名">
          <InputBox type="text" placeholder="請輸入姓名"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-3" labelTitle="電話">
          <InputBox type="tel" placeholder="請輸入行動電話"/>
        </InputGroup>
        <InputGroup global=" input-w-3" labelTitle="Email">
          <InputBox type="email" placeholder="請輸入電子郵件"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-2" labelTitle="縣市">
          <SelectBox>
            <Option value="" text="請選擇縣市"/>
            <Option value="KLU" text="基隆市"/>
            <Option value="TPH" text="新北市"/>
            <Option value="TPE" text="臺北市"/>
            <Option value="TYC" text="桃園市"/>
            <Option value="HSH" text="新竹縣"/>
            <Option value="HSC" text="新竹市"/>
            <Option value="MAC" text="苗栗市"/>     
            <Option value="MAL" text="苗栗縣"/>
            <Option value="TXG" text="臺中市"/>
            <Option value="CWH" text="彰化縣"/>
            <Option value="CWS" text="彰化市"/>
            <Option value="NTC" text="南投市"/>
            <Option value="NTO" text="南投縣"/>
            <Option value="YLH" text="雲林縣"/>
            <Option value="CHY" text="嘉義縣"/>
            <Option value="CHI" text="嘉義市"/>
            <Option value="TNN" text="臺南市"/>
            <Option value="KHH" text="高雄市"/>
            <Option value="IUH" text="屏東縣"/>
            <Option value="PTS" text="屏東市"/>
            <Option value="ILN" text="宜蘭縣"/>
            <Option value="ILC" text="宜蘭市"/>
            <Option value="HWA" text="花蓮縣"/>
            <Option value="HWC" text="花蓮市"/>
            <Option value="TTC" text="臺東市"/>
            <Option value="TTT" text="臺東縣"/>
            <Option value="PEH" text="澎湖縣"/>
            <Option value="KMN" text="金門縣"/>
            <Option value="LNN" text="連江縣"/>      
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="地址">
          <InputBox type="text" placeholder="請輸入地址"/>
        </InputGroup>
      </div>

    </section>
  );
}

//導出"步驟一"表單
function StepOneWrapper() {
  return (
    <form className={styles.formContainer + " col col-12"}>
      <h3 className={styles.formTitle}>寄送地址</h3>
      <StepOneContent />
    </form>
  );
}

export default StepOneWrapper;
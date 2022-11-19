import React from 'react';
import {useState} from 'react';
import styles from './StepOne.module.scss';
import '../base.module.scss';

const destricts = [
  { value: "KLU", name: "基隆市" },
  { value: "TPH", name: "新北市" },
  { value: "TPE", name: "臺北市" },
  { value: "TYC", name: "桃園市" },
  { value: "HSH", name: "新竹縣" },
  { value: "HSC", name: "新竹市" },
  { value: "MAC", name: "苗栗市" },
  { value: "MAL", name: "苗栗縣" },
  { value: "TXG", name: "臺中市" },
  { value: "CWH", name: "彰化縣" },
  { value: "CWS", name: "彰化市" },
  { value: "NTC", name: "南投市" },  
  { value: "NTO", name: "南投縣" },
  { value: "YLH", name: "雲林縣" },
  { value: "CHY", name: "嘉義縣" },
  { value: "CHI", name: "嘉義市" },
  { value: "TNN", name: "臺南市" },
  { value: "KHH", name: "高雄市" },
  { value: "IUH", name: "屏東縣" },
  { value: "PTS", name: "屏東市" },
  { value: "ILN", name: "宜蘭縣" },
  { value: "ILC", name: "宜蘭市" },  
  { value: "HWA", name: "花蓮縣" },
  { value: "HWC", name: "花蓮市" },
  { value: "TTC", name: "臺東市" },
  { value: "TTT", name: "臺東縣" },
  { value: "PEH", name: "澎湖縣" },
  { value: "KMN", name: "金門縣" },
  { value: "LNN", name: "連江縣" }
]


//註記：有查詢到關於 react-select 提供的 Select元件的用法，以及defaultValue設定預設值搭配 useState()的做法，後續作業進度推進會再嘗試
//先使用了 useState()的做法
export function SelectBox({children}) {
  const [choice, setChoice] = useState();
  return (
    <div className={styles.selectContainer}>
      <select 
        value={choice}
        defaultValue="default"
        onChange={(e) => setChoice(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
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
            <option value="mr">先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="姓名">
          <input type="text" placeholder="請輸入姓名"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-3" labelTitle="電話">
          <input type="tel" placeholder="請輸入行動電話"/>
        </InputGroup>
        <InputGroup global=" input-w-3" labelTitle="Email">
          <input type="email" placeholder="請輸入電子郵件"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-2" labelTitle="縣市">
          <SelectBox>
            <option value="default" disabled>請選擇縣市</option>
            {destricts.map(destrict => 
              <option value={destrict.value} key={destrict.value}>{destrict.name}</option>
            )}     
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="地址">
          <input type="text" placeholder="請輸入地址"/>
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
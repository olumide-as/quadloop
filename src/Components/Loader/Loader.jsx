import React from 'react'
import ReactDOM from "react-dom";
import styles from "./Loader.css";
import { Carbon } from '../../Assets'


const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={Carbon} alt="Loading..." />
      </div>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader
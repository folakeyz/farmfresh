import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'

import WTB from '../WTB/WTB'



const  WheretoBuy = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>Where To Buy</span>
            <br /><br />
    </div>
    <WTB />
    </div>
            
     
      
      <Footer />
      </>
    )
}
export default WheretoBuy;
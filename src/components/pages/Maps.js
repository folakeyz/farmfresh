import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'

import Map from '../WTB/Map'



const  Location = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>Where To Buy</span>
            <br /><br />
    </div>
    <Map />
    </div>
            
     
      
      <Footer />
      </>
    )
}
export default Location;
import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'
import Distributor from '../Distributor/Distributor'



const  Distributors = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>Distributor</span>
            <br /><br />
            </div>
     <Distributor />
      </div>
    
      <Footer />
      </>
    )
}
export default Distributors;
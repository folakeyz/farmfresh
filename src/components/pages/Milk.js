import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'
import ProductPage from '../ProductPage/ProductPage'



const  Milk = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>Milk</span>
            <br /><br />
    </div>
    <ProductPage />
    </div>
            
     
      
      <Footer />
      </>
    )
}
export default Milk;
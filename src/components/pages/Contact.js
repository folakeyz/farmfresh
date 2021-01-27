import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'



const  Contact = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>Contact Us</span>
            <br /><br />
    </div>
    <Contacts />
    </div>
            
     
      
      <Footer />
      </>
    )
}
export default Contact;
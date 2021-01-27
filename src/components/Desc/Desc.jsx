import React from 'react'
import styles from './styles.module.css';
import img from '../../assets/product.png';

const Desc = () => {
    return (
        <div className={styles.desc}>
              <div className={styles.headingsection}>
            <span className={styles.subheading}>FarmFresh</span>
            </div>
             <div className={styles.grid}>
             <div className={styles.cards}>
            <p>We produce lots of vegetables in our Farm, you will get everything Fresh. 
                Also, the cows produce lots of milk. We rely on healthy methods to nueture our cows, 
                We are currently producing 150 liters of Milk everyday. Also, for Gardening, our farmers are skilled, 
                they understand very well how to grow organic foods.</p>
        </div>
        <div className={styles.cards}>
            <img src={img} alt="FarmFresh" />
            </div>
            </div>
        </div>
    )
}

export default Desc;
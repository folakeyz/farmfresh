import React from 'react'
import styles from './styles.module.css';
import slide from '../../assets/Slide.JPG';
import slide2 from '../../assets/Strawberry1L.jpg';
import slide3 from '../../assets/Pineapple1L.jpg';

const Products = () => {
    return (
        <div className={styles.products}>
             <div className={styles.headingsection}>
            <span className={styles.subheading}>Our Products</span>
            </div>
            <div className={styles.grid}>
                <div className={styles.product}>
                    <div className={styles.grids}>
                        <div className={styles.cards}>
                            <img src={slide} alt="Products" />
                        </div>
                        <div className={`${styles.cards} ${styles.cardsTop}`}>
                            <img src={slide2} alt="Products" />
                        </div>
                        <div className={styles.cards}>
                            <img src={slide3} alt="Products" />
                        </div>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.pcards}>
                        <h5>Milk</h5>
                        <p>Farm Fresh milk is obtained from exotic Friesian cows reared on the highlands of Vom, Jos.</p>
                    </div>
                    <div className={styles.pcards}>
                        <h5>Stirred Yoghurt</h5>
                        <p>With a variety of delicious flavours, no preservatives and real fruit pulp, be guaranteed that you will have a fresh and healthy treat.
Our stirred yoghurt comes in 2 sizes: 200g and 100g.</p>
                    </div>
                    <div className={styles.pcards}>
                        <h5>Drinking Yoghurt</h5>
                        <p>With a variety of delicious flavours and no preservatives, be guaranteed that you will have a fresh and healthy treat. Our drinking yoghurt comes in 2 sizes: 1L and 350ml.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Products;
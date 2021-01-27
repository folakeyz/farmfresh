import React from 'react'
import styles from './styles.module.css';
import slide2 from '../../assets/lowfat.jpg';
import slide3 from '../../assets/fullcream.jpg';

 const ProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>

            <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={slide3} alt="Products" />
                    </div>
                    <div className={styles.imgText}>
                        <h5><b>FarmFresh Full Cream Pasteurised Milk</b></h5>
                        <p>Ingredients</p>
                        <p>Fresh Cow's Milk</p>
                        <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 251.3kJ/61.2kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.2g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.3g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 4.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.7g</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={slide2} alt="Products" />
                    </div>
                    <div className={styles.imgText}>
                        <h5><b>FarmFresh Low Fat Pasteurised Milk</b></h5>
                        <p>Ingredients</p>
                        <p>Fresh Cow's Milk</p>
                        <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 218.4kJ/61.2kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 1.5g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.3g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 4.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.7g</p>
                    </div>
                </div>

          
            </div>
            
        </div>
    )
}
export default ProductPage;
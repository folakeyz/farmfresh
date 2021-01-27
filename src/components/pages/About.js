import React from 'react'
import styles from './styling.module.css'
import Footer from '../Footer/Footer'



const  About = () => {
    return (
      <>
      <div className={styles.container}>
      <div className={styles.headingsection}>
            <span className={styles.subheading}>About Us</span>
            <br /><br />
            </div>
      <p>
     FarmFresh yoghurt is a premium brand of yoghurt that is made from high quality fresh milk
from our well nourished high breed of Holstein Friesian cows. Our product is produced with
state of the art modern technology that ensures no direct human interaction with the product
along the process path, hence guaranteeing high quality products.

     </p>
     <p>
     The product is quality assured through a well implemented food safety management system
(HACCP), which monitors every process step with the help of our state of the art laboratory
and our qualified and vastly experienced personnel in quality assurance.
     </p>
     <p>This product brings all forms of goodness that are offered by the best yoghurt drinks in terms
of nutrition and satisfaction of taste as desired by our customers. Our product is rich in
protein, calcium, vitamin and other nutrients for nourishment. It also contains active life
cultures which are known for their numerous health benefits. It is known for its richness in
probiotics and prebiotics which aids digestive health and provides other key health benefits.
Our yoghurt comes in various flavours such as strawberry, vanilla, mango, pineapple,
banana, sweetened, and unsweetened. We also have full cream and low fat milk.
</p>
<p>Farm fresh is packed in tetra rex packs which aids in maintaining the temperature of our
product while maintaining our high quality.
The yoghurt comes in different sizes ranging from 250ml to 1 litre to suit different range of
consumers.
Farm fresh yoghurt has NO added preservative and therefore is stored at temperatures
between 3-7 degree celsius.</p>
      </div>
    
      <Footer />
      </>
    )
}
export default About;
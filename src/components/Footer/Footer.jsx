import React from 'react'
import styles from './styles.module.css';
import logo from '../../assets/logo.png';
import naija from '../../assets/naija.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
            <div className={styles.cards}>
                <h5>QUICK LINKS</h5>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>News</li>
                    <li>Recipes</li>
                    <li>Contact US</li>
                </ul>
            </div>
            <div className={styles.cards}>
                <img src={logo} alt="Logo" />
                <img src={naija} alt="Logo" />
            </div>
            <div className={styles.cards}>
        <p>+234 (0) 9038862224</p>
        <p>+234 (0) 9038862225</p>
        <p>+234 (0) 9038862226</p>

        <p>Follow Us </p>
        <a href="https://www.facebook.com/FarmFresh.IDL"><FacebookIcon /></a>
        <a href="https://twitter.com/IDL_FARMFRESH"><TwitterIcon /></a>
        <a href="https://instagram.com/integrateddairies/"><InstagramIcon /></a>
            </div>
            </div>
            <div className={styles.rights}>
            &copy; 2020 FarmFresh All Rights & Reserved
            </div>
           
        </div>
    )
}
export default Footer;
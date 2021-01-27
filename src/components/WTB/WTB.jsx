import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const WTB = () => {
    return (
        <div className={styles.container}>
             <div className={styles.grid}>
             <div className={styles.card}>
            <Link to="/Where-to-buy/NorthCentral">NORTH CENTRAL</Link>
            <p>Plateau, Nassarawa, Benue, FCT, Kogi</p>
            </div>

            <div className={styles.card}>
            <h5>NORTH EAST</h5>
            <p>Bauchi, Gombe</p>
            </div>

            <div className={styles.card}>
            <h5>NORTH WEST</h5>
            <p>Kaduna, Kano</p>
            </div>

            <div className={styles.card}>
            <h5>SOUTH WEST</h5>
            <p>Lagos, Oyo</p>
            </div>

            <div className={styles.card}>
            <h5>SOUTH EAST</h5>
            <p>Kaduna, Kano</p>
            </div>

            <div className={styles.card}>
            <h5>SOUTH SOUTH</h5>
            <p>PortHarcourt, Crossriver</p>
            </div>

            </div>
        </div>
    )
}
export default WTB;

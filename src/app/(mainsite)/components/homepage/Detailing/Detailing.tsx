import Link from 'next/link';
import styles from './detailing.module.css';

export default function Detailing(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>Take Your Family on an Adventure!</h2>
        <p>Mandy’s Family Friendly Dream Travel specializes in family vacations while offering a range of services like booking flights, hotels, cruises, and luxury getaways. As a travel consultant, Mandy creates personalized itineraries, ensuring a seamless, stress-free trip tailored to your needs.</p>
        <Link className='main-link' href={`/contact`}>Book Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/globe.png" alt="image of a globe" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};
import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Mandy’s Family Friendly Dream Travel</h2>
        <p>Mandy’s Family Friendly Dream Travel is a family-based agency specializing in family-friendly vacations and a variety of travel services, including flights, hotels, cruises, and more. We offer personalized itineraries for both domestic and international trips, from luxury getaways to fun excursions. Start by submitting a form or calling to discuss your plans, and we’ll research the best options for you.</p>
        <Link className='main-link' href={`/contact`}>Book Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/about.png" alt="image of a globe" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};
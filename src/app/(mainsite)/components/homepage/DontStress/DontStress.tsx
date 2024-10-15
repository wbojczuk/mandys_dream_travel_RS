"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function DontStress(){
return (
 <div className={styles.find}>

    <h2>Be your family’s travel hero! Book with Mandy.</h2>

    <h3>Let Mandy handle the hard part and you can enjoy the amazing part!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Book Now</Link>
    </div>
 
    <img src='/img/hero.webp' alt='Image of road' className='bg-img' />
    <div style={{backgroundColor: "rgba(18,194,236,0.59)"}} className='shader'></div>
 </div>
)};
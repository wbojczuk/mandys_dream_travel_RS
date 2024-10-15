"use client"

import Link from 'next/link';
import styles from './more.module.css';

export default function More(){
return (
 <div className={styles.more}>
    <h2><span className="underline">Why Mandy’s?</span></h2>

    <div className={styles.itemsWrapper}>

        <div className={styles.item}>
            <h3><span>Family Friendly</span></h3>
            <p>We want to make traveling as a family as fun as possible for both you and the kids! This is a core value at Mandy’s</p>
            <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Book Now</Link>
    </div>
        </div>
        

    <div className={styles.imgWrapper}>
        <img src="/img/why.webp" alt="image of family on beach" />
    </div>

    <div className={styles.item}>
            <h3><span>Unforgettable</span></h3>
            <p>With expert training and experience in tourism and hospitality. Mandy will make your trip one to remember!</p>
            <div className={`center ${styles.linkWrapper}`}>
            <Link className='main-link' href='/contact'>Book Now</Link>
    </div>
        </div>
        
</div>

    <img src='/img/why-bg.webp' alt='Image of beach' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.77)"}} className="shader"></div>
 </div>
)};
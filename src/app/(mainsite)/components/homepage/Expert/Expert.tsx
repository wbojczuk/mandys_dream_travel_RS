import styles from './expert.module.css';

export default function Expert(){
return (
 <div className={styles.expert}>
    <h2>Travel With An Expert Itinerary</h2>
    <img src='/img/expert.webp' alt='Image of mom on mountain' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(152, 218, 50, .27)"}}></div>
 </div>
)};
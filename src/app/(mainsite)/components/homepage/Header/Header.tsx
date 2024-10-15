import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Travel The <span className="underline">World!</span></h1>
    <h2>With Mandy’s Family Friendly Dream Travel</h2>
 
    <img src='/img/header-bg.webp' alt='Image of ' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(245, 127, 21, 0.03)"}}></div>
 </header>
)};
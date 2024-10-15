import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"
export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.formWrapper}>
          <h2>Get in touch</h2>
          <p>Contact us. We’re always happy to hear from someone and answer any questions you may have</p>
          <FreeEstimateForm />
        </div>
        <div className={styles.imgWrapper}>

            <div className={styles.contentWrapper}>
              <h5>Email</h5>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>

            <div className={styles.contentWrapper}>
              <h5>Phone Number</h5>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>

            <div className={`${styles.contentWrapper} ${styles.facebook}`}>
            <a href={`https://www.facebook.com/profile.php?id=61565699543842`} target="_blank">
              <h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg> Facebook</h5>
            </a>
            </div>
            
            <div className={`${styles.contentWrapper} ${styles.facebook}`}>
            <a href={`https://www.instagram.com/familyfriendlydreamtravel`} target="_blank">
              <h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg> Instagram</h5>
            </a>
            </div>

            <img src="/img/contact-box.webp" alt="image of people sittiing on bench" className="bg-img" />
            <div style={{backgroundColor: "rgba(242, 126, 3, .61)"}} className="shader"></div>
        </div>
        
          <img src='/img/contact.webp' alt='Image of hiking' className='bg-img' />
          <div style={{backgroundColor: "rgba(0,39,49,.78)"}} className='shader'></div>
    </section>
  )
}

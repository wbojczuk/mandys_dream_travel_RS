import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1><span className="underline">{props.pageTitle}</span></h1>

        <img src="/img/pagetitle-bg.png" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(7,164,201,.59)"}} className="shader"></div>
    </header>
  )
}

import Head from 'next/head'
import styles from '/styles/Home.module.css'


export default function Home() {
  return (
    <body className={styles.body}>
        <nav className={styles.navy}>
            <div className={styles.logo}>CodingNepal</div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Team</a>
                    <ul>
                        <li><a href="#">Collab</a></li>
                        <li><a href="#">Human Prac</a></li>
                        <li><a href="#">Wiki</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Awards</a>
                    <ul>
                        <li><a href="#">Award #1</a></li>
                        <li><a href="#">Award #2</a></li>
                        <li>
                            <a href="#">Award#3<span class="fa fa-plus"></span></a>
                            <ul>
                                <li><a href>nice</a></li>
                                <li><a href>handsom</a></li>
                                <li><a href>hyelo</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">Lab</a></li>
                <li><a href="#">Human Practices</a></li>
            </ul>
        </nav>
        <img src="/labhead.png" width="100%"></img>
    </body>
  )
}
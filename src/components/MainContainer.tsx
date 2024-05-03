import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/MainContainer.module.css'

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function MainContainer({ children }: Props) {
    return (
        <>
            <NavBar/>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </>
    )
}
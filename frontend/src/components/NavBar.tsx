import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            Image
            <div>
                <div><Link href={'/about'}>Quem somos</Link></div>
                <div><Link href={'/people'}>Professores</Link></div>
                <div><Link href={'/contact'}>Contato</Link></div>
                <div><Link href={'/login'}>Área para colaboradores</Link></div>
            </div>
        </div>
        
    )
}
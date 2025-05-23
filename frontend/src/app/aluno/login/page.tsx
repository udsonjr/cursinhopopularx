import '../../../styles/globals.css'
import styles from '../../../styles/Login.module.css'
import logo from '../../../../public/images/logo-completo.png'
import Image from 'next/image'
import { TextField, Button } from '@mui/material';

export default function Login() {
    return (
        <div className={styles.centralized}>
            <Image src={logo} alt='Logo' height={200}/>
            <TextField 
                required
                id='login-id-input'
                label="RA ou e-mail"
            />
            <TextField 
                id='login-password-input'
                label="Senha"
                type='password'
                autoComplete='currentPassword'
            />
            <Button variant="contained">Login</Button>
        </div>
    )
}
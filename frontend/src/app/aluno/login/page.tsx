import '../../../styles/globals.css'
import styles from '../../../styles/Login.module.css'
import logo from '../../../../public/images/logo-completo.png'
import Image from 'next/image'
import StyledTextField from '@/components/StyledTextField';
import StyledButton from '@/components/StyledButton';
import { Link } from '@mui/material';
import colors from '@/theme/colors';

export default function Login() {
    return (
        <div className={styles.centralized} style={{backgroundColor: colors.background}}>
            <Image src={logo} alt='Logo' height={200}/>

            <StyledTextField 
                required
                id='login-id-input'
                label="RA ou e-mail"
            />
            <StyledTextField 
                id='login-password-input'
                label="Senha"
                type='password'
                autoComplete='currentPassword'
            />
            <StyledButton variant="contained" type="button" color="primary">Login</StyledButton>
            <Link color={colors.primary} underline='hover'>Esqueci minha senha</Link>
        </div>
    )
}
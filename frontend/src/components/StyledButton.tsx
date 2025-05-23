'use client';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import colors from '../theme/colors';

interface CustomButtonProps extends ButtonProps {
  width?: string;
}

const StyledButton = styled((props: CustomButtonProps) => (
  <Button {...props} disableElevation />
))<ButtonProps>(({ theme, color = 'primary', width = '150px'}) => {
  const isPrimary = color === 'primary';

  return {
    fontWeight: 600,
    width: width,
    margin: '10px 5px',
    padding: '10px 20px',
    borderRadius: '8px',
    textTransform: 'none',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: isPrimary ? colors.primary : 'transparent',
    color: isPrimary ? '#fff' : colors.primary,
    border: isPrimary ? 'none' : `2px solid ${colors.primary}`,

    '&:hover': {
      backgroundColor: isPrimary
        ? '#880000'
        : 'rgba(170, 0, 0, 0.08)',
    },
    '&:disabled': {
      backgroundColor: isPrimary ? colors.grey : 'transparent',
      color: colors.grey,
      borderColor: colors.grey,
    },
  };
});

export default StyledButton;

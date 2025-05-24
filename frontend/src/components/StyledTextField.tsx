'use client';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import colors from '../theme/colors';

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField {...props} variant="outlined" />
))<TextFieldProps>(({ theme }) => {
    return {
        margin: '10px 5px',
        borderRadius: '15px',
        backgroundColor: '#eee',
        '& label.Mui-focused': {
            color: colors.primary,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: colors.grey,
            },
            '&:hover fieldset': {
            borderColor: colors.primary,
            },
            '&.Mui-focused fieldset': {
            borderColor: colors.primary,
            borderWidth: 2,
            },
        },
    };
});

export default StyledTextField;

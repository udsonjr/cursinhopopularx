'use client';

import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;

import { ThemeProvider } from '@emotion/react';
import FormLogin from './formlogin/FormLogin';
import HeaderLogin from './headerlogin/Header';
import { theme } from './style';

export default function LoginPage() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <HeaderLogin />
          <FormLogin />
        </ThemeProvider>
      </>
    );
  }
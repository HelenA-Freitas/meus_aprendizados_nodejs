import { ThemeProvider } from '@emotion/react';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import FormCreateAccount from './formCreateAccount/FormCreateAccount';
import { FormLogin } from './formlogin/FormLogin';
import HeaderLogin from './headerlogin/Header';
import { theme } from './style';

export default function LoginPage() {
  const [hasAccount, setHasAccount] = useState(true);
    return (
      <>
        <ThemeProvider theme={theme}>
          <HeaderLogin />
          {hasAccount ? <FormLogin /> : <FormCreateAccount/>}
          <Box display="flex" justifyContent="center" alignItems="flex-end">
            <Button type='button' onClick={() => setHasAccount(!hasAccount)}> {hasAccount ? 'Não possuo conta' : 'Já possuo conta'}</Button>
          </Box>
        </ThemeProvider>
      </>
    );
  }
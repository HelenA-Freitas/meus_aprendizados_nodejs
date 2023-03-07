import { Box, 
        AppBar, 
        Toolbar, 
        Typography, 
        Checkbox, 
        Container, 
        FormControlLabel, 
        TextField, 
        createTheme,
        ThemeProvider,
        SvgIcon} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useState } from 'react';



const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7F11'
    },
    secondary: {
      main: '#639FAB'
    }
  },
  typography: {
    fontFamily: "'Courier New', Courier, monospace",

  }
})

export default function Root() {
  const [password, setPassword] = useState(''); 




    return (
      <ThemeProvider theme={theme}>
        <><Box 
            sx={{ flexGrow: 2}}>
          <AppBar position="static">
            <Toolbar sx={{color:'white', padding: 2 }}>
              <Typography variant="h6" component="div" 
                sx={{ flexGrow: 5}}>
                Loja de Jogos
              </Typography>
              <Button color="inherit">Criar conta
              <SvgIcon component={AccountCircleIcon} sx={{padding: 2}}/>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: '#639FAB',
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" 
                  sx={{ mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{backgroundColor: '#fff'}} />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{backgroundColor: '#fff'}} />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Lembre de mim" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, 
                  mb: 2, 
                  backgroundColor:'#FF7F11' }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Container></>
      </ThemeProvider>
    );
  }
import { Box, 
        AppBar, 
        Toolbar, 
        Typography, 
        Checkbox, 
        Container, 
        FormControlLabel, 
        TextField, 
        createTheme,
        ThemeProvider} from '@mui/material';
import Button from '@mui/material/Button';

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
    return (
      <ThemeProvider theme={theme}>
                <><Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
              Loja de Jogos
            </Typography>
            <Button color="inherit">Criar conta</Button>
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
            backgroundColor: '#639FAB'
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password" />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre de mim" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container></>
      </ThemeProvider>
    );
  }
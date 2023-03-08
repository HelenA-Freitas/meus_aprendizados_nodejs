import { Button } from "@mui/material";

export default function AcessButton(){
    return(
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color='secondary'
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: '#FF7F11'
        }}
      >
        Entrar
      </Button>
    )
}
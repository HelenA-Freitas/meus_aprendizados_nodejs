import { Button } from "@mui/material";

export default function AcessButton(action: any){
    return(
        <Button
        type="button"
        fullWidth
        variant="contained"
        color='secondary'
        onClick={() =>action}
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
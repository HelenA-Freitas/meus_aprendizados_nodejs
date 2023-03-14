import { ThemeProvider } from "@emotion/react";
import { theme } from "../login/style";
import HeaderCreateLog from "./HeaderCreateLog";


export default function MainCreateAccount(){
    return(
        <>
        <ThemeProvider theme={theme}>
          <HeaderCreateLog/>
        </ThemeProvider>
      </>
        
    )
}
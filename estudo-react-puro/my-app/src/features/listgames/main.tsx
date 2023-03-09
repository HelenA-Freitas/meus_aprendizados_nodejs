import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import HeaderMain from "./headermain/Header";
import GameTable from "./table/GameTable";


export default function Main(){
  return(
    <>
      <HeaderMain />
      <GameTable/>
    </>
  )

}
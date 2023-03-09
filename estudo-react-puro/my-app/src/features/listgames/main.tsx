import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import HeaderMain from "./headermain/Header";


export default function Main(){
  return(
    <>
      <HeaderMain />
      <TableContainer component={Paper} sx={{mt: 5}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Ações</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.name} */}
              </TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">fat</TableCell>
              <TableCell align="right">carbs</TableCell>
              <TableCell align="right">protein</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )

}
import { TableHead, TableRow, TableCell } from "@mui/material";


export default function TableHeader(){
    return(
        <TableHead>
            <TableRow sx={{backgroundColor: '#639FAB'}}>
            <TableCell sx={{color:'white', fontSize:18}}>Título</TableCell>
            <TableCell align="left" sx={{color:'white', fontSize:18}}>Ano</TableCell>
            <TableCell align="left" sx={{color:'white', fontSize:18}}>Preço</TableCell>
            <TableCell align="center" sx={{color:'white', fontSize:18}}>Ações</TableCell>
            </TableRow>
        </TableHead>
    )

}
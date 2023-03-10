import { TableRow, TableCell } from "@mui/material"

interface Props {
    id: number;
    title: string;
    year: number;
    price: number;
}

export default function ShowGames({id, title, year, price}:Props){
    return(
    <TableRow>
        <TableCell component="th" scope="row"  sx={{fontSize:16}}>{title}</TableCell>
        <TableCell align="left" sx={{fontSize:16}}>{year}</TableCell>
        <TableCell align="left" sx={{fontSize:16}}>R$ {price.toFixed(2)}</TableCell>
    </TableRow>
    )
}
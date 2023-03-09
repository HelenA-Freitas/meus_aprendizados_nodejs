import { TableRow, TableCell } from "@mui/material"

interface Props {
    id: number;
    title: string;
    year: number;
    price: number;
}

export default function ShowGames({id, title, year, price}:Props){
    return(
    <TableRow 
        key={title}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {title}
        </TableCell>
        <TableCell align="right">{year}</TableCell>
        <TableCell align="right">{price}</TableCell>
    </TableRow>
    )
}
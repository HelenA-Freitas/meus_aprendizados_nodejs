import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ShowGames from "./ShowGames";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props {
    id: number;
    title: string;
    year: number;
    price: number;
}

export default function GameTable(){
    const[data, setData] = useState<Props[]>([]);

    useEffect(() => {
        axios.get("http://localhost:45678/games", axiosConfig).then(response => {
            setData(response.data);
        })
    },[data]);

    return(
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
            {data.map((item) => <ShowGames id={item.id} title={item.title} year={item.year} price={item.price}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, ThemeProvider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { theme } from "../../login/style";
import ShowGames from "./ShowGames";
import TableHeader from "./TableHeader";

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
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper} sx={{my: 5, mx: 'auto', width: 1500}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader/>
            <TableBody>
              {data.map((item) => <ShowGames id={item.id} title={item.title} year={item.year} price={item.price}/>)}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    )
}
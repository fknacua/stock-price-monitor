import React from "react";

import { useSelector } from "react-redux";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import * as moment from 'moment';

const StockPriceDisplay = (props) => {
    const stockDataList = useSelector((state) => state.stocks);

    function formatTime(value) {
        return moment(value).format("DD MMM YYYY, hh:mm:ss A");
    }

    function formatPrice(value) {
        return value.toFixed(2);
    }
    
    return stockDataList && stockDataList.length ? (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stockDataList.map((stockData) => (
                        <TableRow key={stockData._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {formatTime(stockData.updatedDateTime)}
                            </TableCell>
                            <TableCell align="right">
                                {formatPrice(stockData.price)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : <Typography>Please select a source and ticker.</Typography>
}

export default StockPriceDisplay;
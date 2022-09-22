import React from "react";

import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material/';

const App = (props) => {
    const [priceSource, setPriceSource] = React.useState('');
    const [ticker, setTicker] = React.useState('');

    const handleTickerChange = (event) => {
        setTicker(event.target.value);
    };
    const handlePriceSourceChange = (event) => {
        setPriceSource(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                <InputLabel id="lbl_source">Price Source</InputLabel>
                <Select
                    labelId="lbl_source"
                    id="slc_source"
                    label="Price Source"
                    value={priceSource}
                    onChange={handlePriceSourceChange}
                >
                    <MenuItem value={""}><em>None</em></MenuItem>
                    <MenuItem value={"yahoo"}>Yahoo! Finance</MenuItem>
                    <MenuItem value={"twelve"}>Twelve Data</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                <InputLabel id="lbl_ticker">Ticker</InputLabel>
                <Select
                    labelId="demo-lbl_ticker-select-label"
                    id="slc_ticker"
                    label="Ticker"
                    value={ticker}
                    onChange={handleTickerChange}
                >
                    <MenuItem value={""}></MenuItem>    
                    <MenuItem value={"GOOG"}>Google</MenuItem>
                    <MenuItem value={"TSLA"}>Tesla</MenuItem>
                    <MenuItem value={"AMZN"}>Amazon</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default App;
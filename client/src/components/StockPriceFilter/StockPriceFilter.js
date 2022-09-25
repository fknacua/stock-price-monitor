import React from "react";
import { useSelector } from "react-redux";
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material/';
import { Button, Grid } from "@material-ui/core";

const App = (props) => {
    const { ticker, priceSource, handlePriceSourceChange, handleTickerChange, handleSubmit, hasUpdates } = props;
    const priceSourceList = useSelector((state) => state.appParams.priceSource);
    const tickerList = useSelector((state) => state.appParams.ticker);

    return (
        <Grid container justifyContent="space-evenly" align-items="stretch" spacing="2">
            <Grid item sm={12} lg={6}>
                <FormControl fullWidth size="small">
                    <InputLabel id="lbl_source">Price Source</InputLabel>
                    <Select
                        labelId="lbl_source"
                        id="slc_source"
                        label="Price Source"
                        value={priceSource}
                        onChange={handlePriceSourceChange}
                    >
                        <MenuItem value={""}><em>None</em></MenuItem>
                        { priceSourceList.map((source) => <MenuItem key={source._id} value={source.priceSourceId}>{source.priceSourceName}</MenuItem>) }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sm={12} lg={6}>
                <FormControl fullWidth size="small">
                    <InputLabel id="lbl_ticker">Ticker</InputLabel>
                    <Select
                        labelId="demo-lbl_ticker-select-label"
                        id="slc_ticker"
                        label="Ticker"
                        value={ticker}
                        onChange={handleTickerChange}
                    >
                        <MenuItem value={""}><em>None</em></MenuItem>
                        { tickerList.map((ticker) => (<MenuItem key={ticker._id} value={ticker.tickerId}>{ticker.tickerName}</MenuItem>)) }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container sm={12} lg={6} spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" size="large" disabled={!ticker || !priceSource} onClick={handleSubmit}>Submit</Button>
                </Grid>
                { hasUpdates ? 
                    <Grid item>
                        <Button variant="contained" color="primary" size="large" disabled={!ticker || !priceSource} onClick={handleSubmit}>Refresh</Button>
                    </Grid>
                : null }
            </Grid>
        </Grid>
    )
}

export default App;
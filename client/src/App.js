import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Container, Grow, Typography } from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack, styled } from '@mui/system';
import StockPriceDisplay from "./components/StockPriceDisplay/StockPriceDisplay";
import StockPriceFilter from "./components/StockPriceFilter/StockPriceFilter";
import { getStocks } from "./actions/stocks.act";
import { getPriceSources, getTickers } from "./actions/params.act";


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const App = () => {
    const dispatch = useDispatch();
    const [priceSource, setPriceSource] = useState('');
    const [ticker, setTicker] = useState('');

    const handleTickerChange = (event) => {
        setTicker(event.target.value);
    };
    const handlePriceSourceChange = (event) => {
        setPriceSource(event.target.value);
    };
    const handleSubmit = () => {
        console.log("submit this data: ", [ticker, priceSource] );

        if (ticker && priceSource) {
            dispatch(getStocks(ticker, priceSource));
        }
    }

    useEffect(() => {
        dispatch(getPriceSources());
        dispatch(getTickers())
    }, [dispatch]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="md">
                <AppBar position="static">
                    <Typography variant="h4" align="center">Stock Price Monitor</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Stack spacing={2}>
                            <Item>
                                <StockPriceFilter 
                                    ticker={ticker} 
                                    priceSource={priceSource} 
                                    handlePriceSourceChange={handlePriceSourceChange}
                                    handleTickerChange={handleTickerChange}
                                    handleSubmit={handleSubmit} />
                                </Item>
                            <Item>
                                <StockPriceDisplay />
                            </Item>
                        </Stack>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    )
}

export default App;
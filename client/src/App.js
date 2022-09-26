import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { AppBar, Container, Grow, Typography } from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack, styled } from '@mui/system';
import StockPriceDisplay from "./components/StockPriceDisplay/StockPriceDisplay";
import StockPriceFilter from "./components/StockPriceFilter/StockPriceFilter";
import { getStocks } from "./redux/actions/stocks.act";
import { getPriceSources, getTickers } from "./redux/actions/params.act";
import io from "socket.io-client";
import { useAppDispatch } from "./redux/hooks";
import { WS_ENDPOINT } from "./constants/app-static-constants";


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

let socket;

const App = () => {
    const ENDPOINT = WS_ENDPOINT;
    const dispatch = useAppDispatch();
    const [priceSource, setPriceSource] = useState('');
    const [ticker, setTicker] = useState('');
    const [hasUpdates, setHasUpdates] = useState(false);

    const handleTickerChange = (event) => {
        setTicker(event.target.value);
    };
    const handlePriceSourceChange = (event) => {
        setPriceSource(event.target.value);
    };
    const handleSubmit = () => {
        console.log("submit this data: ", [ticker, priceSource] );

        if (ticker && priceSource) {
            setHasUpdates(false);
            socket.emit("SEARCH");
            dispatch(getStocks(ticker, priceSource));
        }
    }

    useEffect(() => {
        dispatch(getPriceSources());
        dispatch(getTickers());
    }, [dispatch]);

    useEffect(() => {
        socket = io(ENDPOINT);

        socket.on("UPDATES_READY", ({ hasUpdates }) => {
            console.log("Has Updates flag received in FE");
            setHasUpdates(hasUpdates);
        });
    }, [ENDPOINT]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="md">
                <AppBar position="static">
                    <Typography data-testid="appBar" variant="h4" align="center">Stock Price Monitor</Typography>
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
                                    handleSubmit={handleSubmit}
                                    hasUpdates={hasUpdates} />
                            </Item>
                            <Item>
                                <StockPriceDisplay/>
                            </Item>
                        </Stack>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    )
}

export default App;
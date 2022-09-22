import React from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, AppBar, Typography } from "@material-ui/core"
import StockPriceFilter from "./components/StockPriceFilter/StockPriceFilter";
import StockPriceDisplay from "./components/StockPriceDisplay/StockPriceDisplay";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar position="sticky">
                    <Typography variant="h6" align="left">Stock Price Monitor</Typography>
                </AppBar>
                <Container>
                    <StockPriceFilter />
                    <StockPriceDisplay />
                </Container>
            </Container>
        </ThemeProvider>
    )
}

export default App;
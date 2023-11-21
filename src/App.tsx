import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { SnackBarProvider } from './context/useSnackbarContext';
import { AuthProvider } from './context/useAuthContext';
import Test from './pages/Test';

// import Header from './components/Header/Header';

function App (): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <SnackBarProvider>
                    <AuthProvider>
                        {/* <Header /> */}
                            <Switch>
                                <Box style={{ overflow: 'hidden' }}>
                                    <Route exact path="/" component={Test} />
                                </Box>
                            </Switch>
                    </AuthProvider>
                </SnackBarProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { SnackBarProvider } from './context/useSnackbarContext';
import { AuthProvider } from './context/useAuthContext';
import Test from './pages/Test';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';

// import Header from './components/Header/Header';

function App (): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <SnackBarProvider>
                    {/* <AuthProvider> */}
                        <Header />
                            <Switch>
                                <Box style={{ overflow: 'hidden' }}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/calender" component={Calendar} />
                                </Box>
                            </Switch>
                    {/* </AuthProvider> */}
                </SnackBarProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
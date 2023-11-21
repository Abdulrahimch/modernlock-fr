import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { SnackBarProvider } from './context/useSnackbarContext';
import { AuthProvider } from './context/useAuthContext';
import Test from './pages/Test';
import Agent from './pages/Agent/Agent';
import ClientDetails from './pages/Agent/ClientDetails/ClientDetails';
import Home from './pages/Home/Home';
import Owner from './pages/Owner/Owner';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import NewDevices from './pages/Agent/NewDevices/NewDevices';

function App (): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <SnackBarProvider>
                    <AuthProvider>
                        <Header />
                            <Switch>
                                <Box style={{ overflow: 'hidden' }}>
                                    <Route exact path="/" component={Test} />
                                    <ProtectedRoute exact path="/home/owner" component={Owner} role="owner" />
                                    <ProtectedRoute exact path="/home/agent" component={Agent} role="agent" />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/client/details/:id" component={ClientDetails} />
                                    <Route exact path="/home/agent/new-devices" component={NewDevices} />
                                </Box>
                            </Switch>
                    </AuthProvider>
                </SnackBarProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
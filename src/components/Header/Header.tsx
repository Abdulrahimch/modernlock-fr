import { AppBar, Tabs, Box, Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/useAuthContext";
import useStyles from "./useStyle";

const Header = (): JSX.Element => {
    const { btnStyle } = useStyles();
    const { loggedInUser, logout } = useAuth();
    const history = useHistory();

    const handleLoginButtonClick = () => {
        history.push('/login');    
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <AppBar position="static">
                <Tabs 
                    aria-label="simple tabs example"
                >
                    <Box style={{ width: '100%', display:"flex", justifyContent:"flex-end", alignItems:"center",}} >
                        {loggedInUser ? 
                        <Button  
                            className={btnStyle}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                        : <Button 
                            className={btnStyle}
                            onClick={handleLoginButtonClick}
                        >
                            Login
                        </Button>
                        }
                    </Box>
                </Tabs>
            </AppBar>
        </>   
    )
};

export default Header;
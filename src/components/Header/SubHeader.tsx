import { AppBar, Tabs, Box, Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/useAuthContext";
import useStyles from "./useStyle";
import clsx from 'clsx';
import { ButtonInterface } from "../../interface/SubHeader";



interface Props {
    style?: string;
    buttons?: ButtonInterface[];
}

const SubHeader = ({ style, buttons }: Props): JSX.Element => {
    const { btnStyle, header } = useStyles();
    const { loggedInUser, logout } = useAuth();
    const history = useHistory();
    const headerStyle = clsx(header, style)

    const handleLoginButtonClick = () => {
        history.push('/login');    
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <AppBar position="static" className={headerStyle}>
                <Tabs 
                    aria-label="simple tabs example"
                >
                    <Box style={{ width: '100%', display:"flex", justifyContent: "center", alignItems:"center",}} >
                       {buttons?.map(({ btnText, onBtnClick }: ButtonInterface) => (
                            <Button  
                                className={btnStyle}
                                onClick={onBtnClick}
                            >
                                {btnText}
                            </Button>
                       ))}
                    </Box>
                </Tabs>
            </AppBar>
        </>   
    )
};

export default SubHeader;
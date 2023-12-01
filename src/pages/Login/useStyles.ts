import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '2em',
        overflow: 'hidden'
    },
    welcome: {
        paddingTop: theme.spacing(10),
        paddingBottom: 20,
        color: theme.palette.common.black,
        fontWeight: 700,
        textAlign: 'center',
        width: '95%',
    },
    signinImage: {
        height: "100%",
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}));

export default useStyles;

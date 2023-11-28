import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
        height: "100vh",
        // backgroundColor: "red"
    
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 24,
        color: 'primary',
        marginBottom: '2em',
        textAlign: 'center',
        paddingTop: theme.spacing(3),
    },
    pageTitle: {
        fontWeight: 800,
        fontSize: 24,
        textTransform: 'capitalize',
    }
}));

export default useStyles;

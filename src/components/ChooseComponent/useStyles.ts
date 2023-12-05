import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2)
    },
    confirmationMsg: {
        fontSize: 16,
        fontWeight: 600,
        padding: theme.spacing(2)
    },
    button: {
        '&.update': {
            backgroundColor: 'green',
            marginRight: theme.spacing(1),
        },
        '&.cancel': {
            backgroundColor: '#8B0000',
        },
        '&.no': {
            backgroundColor: '#8B0000',
            width: 20,
            height: 20,
            marginTop: theme.spacing(2)
        },
        '&.yes': {
            backgroundColor: 'green',
            width: 20,
            height: 20,
        },
        
    },
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 800,
        fontSize: 24,
        color: 'primary',
        textAlign: 'center',
    },
    select: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: theme.spacing(2),
        marginTop: '0.5em',
        width: '100%',
        minWidth: 400,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
      },
    listItem: {
        marginBottom: "1em", 
        padding: "2em"
    },
    list: {
        // padding: theme.spacing(8),
    }
}));

export default useStyles;

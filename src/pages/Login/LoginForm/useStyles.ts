import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        '& .MuiFormControl-root': {
            marginTop: theme.spacing(1),
        },
    },
    label: {
        marginTop: theme.spacing(2),
        textTransform: 'uppercase',
        color: theme.palette.common.black,
        fontSize: 12,
        fontWeight: 800,

    },
    inputs: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        height: '100%',
        padding: theme.spacing(2),
        marginTop: 0,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:cfous': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
    },
    submit: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(6, 2, 2),
        padding: theme.spacing(1),
        width: 160,
        height: 56,
        fontSize: 12,
        fontWeight: 600,
    },
    circularProgress: {
        color: theme.palette.common.white,
    },
}));

export default useStyles;

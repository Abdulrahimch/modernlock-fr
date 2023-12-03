import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '&.center': {
            position: 'absolute',
            right: '50%',
            top: '50%'
        }
    },
}));

export default useStyles;
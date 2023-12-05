import { Grid, Typography, Button } from "@material-ui/core";
import useStyles from './useStyles';
import clsx from 'clsx';

interface Button {
    text: string;
    func: () => void;
    clsxText: string;
}

interface Props {
    buttons: Button [];
    text: string;
};

const ChooseComponent = ({ buttons, text }: Props) => {
    const { container, confirmationMsg, button } = useStyles();
    return (
        <>
            <Grid container direction='column' className={container}>
                <Typography className={confirmationMsg}>{text}</Typography>
                <Grid item container>
                    {buttons.map(({ text, func, clsxText }) => (
                        <Button onClick={func} className={clsx(button, clsxText)} >{text}</Button>
                    ))}
                </Grid>
            </Grid>
        </>
    )
};

export default ChooseComponent;
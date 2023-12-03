import { CircularProgress } from "@material-ui/core";
import useStyles from './useStyles';
import clsx from 'clsx';

interface Props {
    style?: string;
};

const CustomCircularProgress = ({ style }: Props) => {
    const { root } = useStyles();
    const circularProgressStyle= clsx(root, style)
    return (
        <>
            <CircularProgress className={circularProgressStyle} />
        </>
    )
};

export default CustomCircularProgress;